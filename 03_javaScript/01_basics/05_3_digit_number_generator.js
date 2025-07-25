//  to get only generate -  3 digits number

const min = 100;
const max = 999;

console.log(Math.floor(Math.random() * (max - min + 1))+ min)
//  Multiplying Math.random() by 900 (max - min + 1) scales the range to be from 0 to 899.999... 
// Math.floor() rounds this number down to the nearest whole integer
// Adding 100 (min) shifts this range to be between 100 and 999