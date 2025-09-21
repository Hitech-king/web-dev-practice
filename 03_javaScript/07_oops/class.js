// function inside the class are called methods
// and they don't need function keyword (prefix)

class Vehicle{
    constructor(brand,model){
        this.brand = brand;
        this.model =model;
    }
    start(){
        return`${this.model} is a car of ${this.brand} brand`
    }
    
}
// inheritance

class Car extends Vehicle{
    type(){
        return`${this.brand} makes cars too.`
    }
}

let car1 = new Car('Toyota','Corolla')
console.log(car1.start());

// Encapsulation :- Restricting direct access to the data

class BankAccount{
    #balance =0; // abstrated data / value

    deposit(amount){
        this.#balance += amount;
        return `$ ${amount} is deposited `;
    }
    debit(amount){
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance(){
        return`Your Balance:- $ ${this.#balance}`
    }
}

let account1 = new BankAccount()
console.log(account1.deposit(1000));
console.log(account1.debit(501));
console.log(account1.getBalance());

// Abstraction :- it hides the complicated implentation details
class coffeeMachine{

    start(){
        // complex commands ----> which we are not abstracting 
        return `machine has started`
    }

}
let machine1 = new coffeeMachine();

console.log(machine1.start());

// Polymorphism  :- more than one form

class Birds{
    fly(){
        return`flying...`
    }
}

class Penguin extends Birds {
    fly(){
        return`penguin can't fly`
    }
}

peg1 = new Penguin();
console.log(peg1.fly());

 
// static method :- can only be called by  classes
class Calculator{
     static add(a,b){
        return a+b ;
    }

}
console.log(Calculator.add(5,4));

// getters and setters  :- to  have more control 
