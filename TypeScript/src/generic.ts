//In languages like C# and Java, one of the main tools in the toolbox for creating
//  reusable components is generics, that is, being able to create a component that 
// can work over a variety of types rather than a single one. This allows users to 
// consume these components and use their own types.

function genericsExamle<template>(input: template): template {
  return input;
}

let total = genericsExamle<number>(10);
let message = genericsExamle<string>("Hello");

console.log(`number is ${total}`);
console.log(`message is ${message}`);
