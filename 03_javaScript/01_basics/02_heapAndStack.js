// stack -- primitive data Structure
let firstName = "hitesh"
let anotherName = firstName;
anotherName = "xyz";

// both will give diffent output
console.log(firstName)
console.log(anotherName)


// heap -- Non - primitive
let user1 = {
    email : "hitesh@gmail.com",
    name : "Bhusara"
    
}

// changing the second will change in frist on too . beacuse in heap , the data is refered(reffernce) and in stack , copy has sended.
let user2 = user1; 

user2.email= "xyz@gmail.com";
console.log(user1)
console.log(user2)