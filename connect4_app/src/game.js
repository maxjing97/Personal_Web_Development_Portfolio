import React from "react";
import ReactDOM  from "react-dom";

import {getArray} from './game_calc'; 

const num_rows = 6; //number of rows in the board;
const num_columns = 7; //number of columns in the board
let arrayBoard = []; //2d array of the board
let columnClicked = "0" //this records the column clicked

//displays message based on the status of the game
export class Message extends React.Component {
    render() {
        if(this.props.isActive === false) {
            return (
                <p>Start a new game by clicking any disk</p>
            );
            
        } else {
            return (
                <p>It's player {this.props.player}'s turn</p>
            );
        } 
    }
};

//function to generate the array representation of the board that is used to make pattern computations;
export function initiateBoard() {
    for (let row = 0; row < num_rows; row++) {
        let subArray = []; //subarray to add
        for (let column = 0; column < num_columns; column++) {
            subArray.push("empty"); //initializes all elements with empty
        }
        arrayBoard.push(subArray)
    }
}


//component-based representation of the board based on the array board with each slot being a react component with a column id.
//each slot has an onclick attribute that causes a column insertion to be recorded. 
export function generate_game_board() {
    let slots  = []; //array of the slots

    for (let row = 0; row < num_rows; row++) {
        let subArray = []; //subarray to to slots
        for (let column = 0; column < num_columns; column++) {
            class Slot extends React.Component {
                clicked() {  //function for handling clicked events
                    arrayBoard = getArray(column);
                }
                
                render () {
                     //returns the circularly shaped slots
                     //the id name is based on the column number as a string
                    return (
                        <button onClick={this.clicked} className="slot"></button>
                    );
                }        
            }


            subArray.push(<Slot></Slot>); //initializes all elements with empty
        }
        slots.push(subArray)
    }
    ReactDOM.render(slots, document.getElementById("board"))//append the slots to the game
}


