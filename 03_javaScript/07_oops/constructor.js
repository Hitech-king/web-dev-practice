function Person(name,age){
    this.name = name;
    this.age =age
    this.greet = function(){
        console.log(`Hello ${this.name}`);        
    }
}

let Hitesh = new Person('hitesh',20);
// console.log(Hitesh);
console.log(Hitesh.greet());

// prototyple chian
Person.prototype.legs = function(){
    return `${this.name} has 2 legs`;
}

console.log(Hitesh);
console.log(Hitesh.legs());

// to throw an error from our side 
function fruit(type){
    if(!new.target){
        throw new Error (`create a object with 'new' word`);
    }

    this.type =type;
}
// let banana = fruit('banana');
// obove line will throw  an error