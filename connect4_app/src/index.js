import React from "react";
import ReactDOM  from "react-dom";

 //game react file responsible for the messages given to user of the game, user interactions
import {Message, generate_game_board, initiateBoard} from './game'; 

let diskClicked = ""; //string storing the disk clicked
let isActive = false; //stores whether or not a game is active


//renders the initial message with the correct prop when clicked
ReactDOM.render(<Message isActive={isActive} player={diskClicked}/>, document.getElementById('game-status'));

//component for the red disk
class RedDisk extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            style: {
                backgroundColor: "red"
            }  
        };
    }

    clicked() {
        diskClicked = "red";
        console.log(diskClicked);
        isActive = true;
        //renders the message with the correct prop when clicked
        ReactDOM.render(<Message isActive={isActive} player={diskClicked}/>, document.getElementById('game-status'));
    }

    hovered() {
        this.setState({style: {
            backgroundColor: "red"
        }});
    }
    render() {
        return (
            <div>
                <button id='red' onClick={this.clicked}  style={this.state.style}>
                Red
                </button>
            </div>
        );
    }
};

//component for the black disk
class BlackDisk extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            style: {
                backgroundColor: "black"
            }  
        };
    }

    clicked() {
        diskClicked = "black";
        isActive = true;
        console.log(diskClicked);

        //renders the message with the correct prop when clicked
        ReactDOM.render(<Message isActive={isActive} player={diskClicked}/>, document.getElementById('game-status'));
    }

    render() {
        return (
            <div>
                <button id='black' onClick={this.clicked} style={this.state.style}>Black</button>
            </div>
        );
    }
};

const disks = [<RedDisk></RedDisk>, <BlackDisk></BlackDisk>]; //array of the player disks
ReactDOM.render(disks, document.getElementById('disks'));


//component for the undo button
class Undo extends React.Component {
    clicked() {
        //renders the message with the correct prop when clicked
        ReactDOM.render(<Message isActive={isActive} player={diskClicked}/>, document.getElementById('game-status'));
    }

    render() {
        return (
            <div>
                <button className="action" onClick={this.clicked}>Undo</button>
            </div>
        );
    }
};

class Reset extends React.Component {
    clicked() {
        //resets the game
        
        let answer = window.confirm("Are you sure you want to Reset the game? All progress will be lost");
        if (answer) {
            isActive = false;
        }
        else {
            isActive = true;
        }
        //renders the message with the correct prop when clicked
        ReactDOM.render(<Message isActive={isActive} player={diskClicked}/>, document.getElementById('game-status'));
    }

    render() {
        return (
            <div>
                <button className="action" onClick={this.clicked}>Reset game</button>
            </div>
        );
    }
};

//renders the undo and reset buttons
const action = [<Undo></Undo>, <Reset></Reset>];
ReactDOM.render(action, document.getElementById('action-buttons'));

//generate the board;
initiateBoard();
//generate the visual representation of the game board with the onclick attributes
generate_game_board();