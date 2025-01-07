var numberArray = [1, 2, 3, 4, 5, 6];
var doubleData = numberArray.map(function (curValue) {
    return curValue * 2;
});
console.log(doubleData);
//to convert array elements to string
var numberToString = numberArray.map(function (curVal) { return curVal.toString(); });
console.log(numberToString);
//
// const average = numberArray.map(getAverage);
// function getAverage(number:number) {
// }
var stringArray = ['ram', 'raju', 'athul'];
var upperCaseName = stringArray.map(function (curVal) { return curVal.toUpperCase(); });
console.log(upperCaseName);
