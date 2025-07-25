const pi = 3.14;
let firstNumber = 10;
let secondNumber = 20;

let sum = firstNumber + secondNumber;
console.log(sum);


console.table([firstNumber, secondNumber, sum]) // print in table form

// alert("hello") // will give an error in node.js

// data type conversion

let a = "33";
let valueInNumber = Number(a);
console.log(typeof (valueInNumber))
console.log(valueInNumber)

let b = "22cd";
let bTONum = Number(b);
console.log(typeof (bTONum)) //this give - number
console.log(bTONum) //but answer is NaN - not a number
