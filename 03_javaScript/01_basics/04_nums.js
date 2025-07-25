const balance = new Number (100)  //create a object of number
const num = 101.786

console.log(balance)
console.log(num)

console.log(balance.toString().length)
console.log(num.toFixed(2))  // float value - numbers after point - 0.00   - for precision value
console.log(num.toPrecision(4)) // it counts from left side


const num2 = 123456789
console.log(num2.toLocaleString());
console.log(num2.toLocaleString('en-In')); //fro indian type 00,00,00,000 


// maths

console.log(Math.abs(-5))  //abosultute  --- it is like a mod - give posotive value
console.log(Math.round(5.6)) //round off 
console.log(Math.ceil(4.1))  //ceiling  - top round
console.log(Math.floor(5.9)) //bottom round off 

console.log(Math.random())  //gives values between 0 (inclusive) and 1 (exclusive). 
//  it can give value 0.04 --> soif you don't want to get 0 -- always use (*10 +1)

console.log(((Math.random()*10)+1).toPrecision(1))
// or
console.log(Math.floor(Math.random()*10)+1) 



