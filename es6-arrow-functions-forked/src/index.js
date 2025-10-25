import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

// function square(x) {
//   return x * x;
// }

// const newNumbers = numbers.map((x) => x * x);

// console.log(newNumbers);

// var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.

// const newNumbers = numbers.map((x) => x * 2);

//////Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter((x) => x < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

// const newNumbers = numbers.reduce(
//   (accumulator, currentNumber) => accumulator + currentNumber
// );

////Find - find the first item that matches from an array.
// const newNumber = numbers.find((x) => x < 10);

////FindIndex - find the index of the first item that matches.
const newNumber = numbers.findIndex((x) => x > 10);

console.log(newNumber);
