import React from "react";
import ReactDOM  from "react-dom";
//this file calculates the game results for a board

import {Message} from './game'; 

const num_rows = 6; //number of rows in the board;
const num_columns = 7; //number of columns in the board

//function returns the value of an array after column has been clicked
export function getArray(array, column, disk) {
    let dropped = false; //boolean to check if a disk has been dropped in this function call. initialized to false

    for (let row = 0; row < num_rows; row++) {
      if (array[row][column] === "empty" && !dropped) {
  
        array[row][column] = disk; //sets the first row, if the first row is empty.
        dropped = true; //sets dropped to true afterwards
      } 
    }
}
