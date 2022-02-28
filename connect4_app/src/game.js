import React from "react";
import ReactDOM  from "react-dom";

import {getArray, CheckForWinner} from './game_calc'; 

const num_rows = 6; //number of rows in the board;
const num_columns = 7; //number of columns in the board

let diskClicked = "empty" //this records the disk clicked

let arrayBoard = []; //2d array of the board, initiated as:
for (let row = 0; row < num_rows; row++) {
    let subArray = []; //subarray to add
    for (let column = 0; column < num_columns; column++) {
        subArray.push("empty"); //initializes all elements with empty
    }
    arrayBoard.push(subArray)
}


//displays message based on the status of the game
export class Message extends React.Component {
    render() {
        if(this.props.isActive === false) {
            return (
                <p>Start a new game by clicking any disk</p>
            );
        } else if (this.props.isActive === true) {  //message when 
            return (
                <p>It's player {this.props.player}'s turn</p>
            );
        } else if (this.props.message !== false) { //message when an explicit message is passed in
            return (
                <p>{this.props.message}</p>
            );        
        }
    }
};

//function to generate the array representation of the board that is used to make pattern computations;

//function to set the disk used
export function set_disk (input) {
    diskClicked = input;
}

//component-based representation of the board based on the array board with each slot being a react component with a column id.
//each slot has an onclick attribute that causes a column insertion to be recorded. 
//the disk parameter is the string representing the value of the disk inserted: red or black
export function generate_game_board() {
    let slots  = []; //array of the slots

    for (let row = 0; row < num_rows; row++) {
        let subArray = []; //subarray to to slots
        for (let column = 0; column < num_columns; column++) {
            class Slot extends React.Component {
                constructor(props) {
                    super(props);
                }

                 //function for handling clicked events
                clicked() { 
                    //sets the arrayBoard to the value set by the get array function and column clicked
                    getArray(arrayBoard, column, diskClicked); 
                    
                    //changes the color based on the array 
                    modifyColor(arrayBoard);

                    //checks for a winner
                    CheckForWinner(arrayBoard, diskClicked)
                }
                
                render () {

                     //returns the circularly shaped slots
                     //the id name is based on the column number and row number as a string
                    return (
                        <button onClick={this.clicked} className="slot"  id={"r"+row+"c"+column}>

                        </button>
                    );
                }        
            }
            subArray.push(<Slot></Slot>); //initializes all elements with empty
        }
        slots.push(subArray)
    }
    ReactDOM.render(slots, document.getElementById("board"))//append the slots to the game
}

export function ResetArray() {
    arrayBoard = [];
    for (let row = 0; row < num_rows; row++) {
        let subArray = []; //subarray to add
        for (let column = 0; column < num_columns; column++) {
            subArray.push("empty"); //initializes all elements with empty
        }
        arrayBoard.push(subArray)
    }
    generate_game_board();
}

//changes color based on the array provided and the disk clicked
function modifyColor(array) {
    //updates the message to pass to the next player
    ReactDOM.render(<Message isActive={true} player={diskClicked}/>, 
        document.getElementById('game-status')); 
    for (let row = 0; row < num_rows; row++) {
        for (let column = 0; column < num_columns; column++) {
            //changes if the color is not empty
            if(array[row][column] !== "empty") {
                let slot = document.getElementById("r"+row+"c"+column); //this works since each slot has been assigned an id this way
                slot.style.backgroundColor= array[row][column];
            }
        }
    }
}

