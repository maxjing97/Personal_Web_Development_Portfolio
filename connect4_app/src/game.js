import React from "react";



//displays message based on the status of the game
export class Message extends React.Component {
    render() {
        if(this.props.isActive === false) {
            console.log(this.props.isActive);
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
