import React from "react";
import ReactDOM  from "react-dom";

let diskClicked = ""; //string storing the disk clicked

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
        console.log(diskClicked);
    }

    render() {
        return (
            <div>
                <button id='black' onClick={this.clicked} style={this.state.style}>Black</button>
            </div>
        );
    }
};

//component encompassing all the two disks
class Disks extends React.Component {
    render() {
        return (
            <div>
                <RedDisk/>
                <BlackDisk/>
            </div>
        );
    }
};


ReactDOM.render(<Disks/>, document.getElementById('disks'));