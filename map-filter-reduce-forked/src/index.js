// import React from "react";
// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.

// // function double(x) {
// //   return x * 2;
// // }
// // const newNum = numbers.map(double);
// // console.log(newNum);

// var newNumbers = [];
// function double(x) {
//   newNumbers.push(x * 2);
// }
// numbers.forEach((x) => {
//   newNumbers.push(x * 2);
// });

// //Filter - Create a new array by keeping the items that return true.

// // const newNumbers = numbers.filter((num) => {
// //   return num > 10;
// // });

// var newNumbers = [];
// numbers.forEach((x) => {
//   if (num < 10) {
//     newNumbers.push(x);
//   }
// });

// //Reduce - Accumulate a value by doing something to each item in an array.

// // var newNumber = 0;
// // numbers.forEach((currentNumber) => {
// //   newNumber += currentNumber;
// // });

// numbers.reduce((accumulator, currentNumber){
//     return accumulator - currentNumber;
// });

// //Find - find the first item that matches from an array.

// const newNumber = numbers.find((num) => {
//     return num > 10;
// });
// console.log(newNumber);

// //FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex((num) => {
//     return num > 10;
// });
// console.log(newNumber);

import emojipedia from "./emojipedia";

const newList = emojipedia.map((emojipedia) =>
  emojipedia.meaning.substring(0, 100)
);
console.log(newList);
