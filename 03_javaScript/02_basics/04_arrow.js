// arrow funtion
const addTwo = function(num1,num2){
    return num1+ num2;
}

console.log(addTwo(1,2));

// explicit return 
const addThree = (num1,num2,num3) => {
    return num1+ num2+num3;
}

console.log(addThree(1,2,3));

// implicit return  
const subTwo = (num1,num2,) => num1-num2
console.log(subTwo(1,2));
// or with round bracket -- parenthesis . if curly bracket then we need to add ---> return word
const subthree = (num1,num2,num3) => (num1-num2-num3)  
console.log(subthree(1,2,3));

