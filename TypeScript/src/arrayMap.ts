const numberArray:number[] =[1,2,3,4,5,6];

const doubleData = numberArray.map((curValue)=>
    curValue*2
)

console.log(doubleData);

//to convert array elements to string

const numberToString = numberArray.map((curVal)=> curVal.toString());

console.log(numberToString);

//

// const average = numberArray.map(getAverage);


// function getAverage(number:number) {

// }

const stringArray:string[] = ['ram','raju','athul'];

const upperCaseName = stringArray.map((curVal)=> curVal.toUpperCase());

console.log(upperCaseName);