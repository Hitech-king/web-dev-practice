let computer = {
    type : "Machine",
    needElectricity : true
};

let asus ={
    __proto__ :computer,
    specialaty : 'gaming pc'
};
// one way
// console.log(asus.__proto__);

// another 
let person ={
    type :'human'
};
let Ram ={
    maths : 34
}
Object.setPrototypeOf(Ram,person)
// console.log(Object.setPrototypeOf(asus,computer));
console.log(Ram);
console.log(Ram.type);

// if want to acces the properties you have injected , get it by 'getPrototypeOf'
console.log(Object.getPrototypeOf(Ram));