// call ,apply and bind are methods used to manipulate 'this' context

// call() --> function.call(thisArg,arg1,arg2,...)

const person ={
    name :"john"
};
function greet (city,job){
    console.log(`Helo, my name is ${this.name} and i live in ${city} .i am a ${job}`);    
}
greet.call(person,"New york","Engineer");


// apply()--> function.apply(thisArg,[argsArray])
const person2 ={
    name :"Jane"
};

function introduce (hobbies){
    console.log(`Hi,I am ${this.name}. My hobbies are: ${hobbies.join(", ")}.`);    
}
introduce.apply(person2,[["reading", "Hiking","running"]]);



// bind() -->   const newFunction = function.bind(ThisArg,arg1,arg2,...)
// most used
const car={
    brand : "toyata",
    getModel : function(year){
        console.log(`this is a ${this.brand} from ${year}.`);        
    }
};
const getToyotaModel = car.getModel.bind(car,2023);
getToyotaModel();
const getFordModel = car.getModel.bind({brand:"ford"});
getFordModel(2024);

// this is used because 'this.' context get lost . example :- 
const getExample = car.getModel;
getExample();