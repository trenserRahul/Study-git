"use strict";
const numberArray = [1, 2, 3, 4, 5, 6];
const doubleData = numberArray.map((curValue) => curValue * 2);
console.log(doubleData);
const numberToString = numberArray.map((curVal) => curVal.toString());
console.log(numberToString);
const stringArray = ['ram', 'raju', 'athul'];
const upperCaseName = stringArray.map((curVal) => curVal.toUpperCase());
console.log(upperCaseName);
