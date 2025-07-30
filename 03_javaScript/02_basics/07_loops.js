// for of

let arr = [1,2,3,4];
for (const element of arr) {
    console.log(element);
    
}
console.log('----------------------------------');
let name = "Hitesh Bhusara"

for (const element of name) {
    if(element==" "){
        console.log('\n');        
        continue
    }
    else{
        console.log(element);
        
    }
}
console.log('----------------------------------');

// maps --unique values , order in mentained , (in object order is not maintained )
// Map are not itrable
let abc = new Map() ;
abc.set('1','one')
abc.set('3','three')

console.log(abc);

// for (const [a,b] of abc) {
//     console.log(a + " :- "+ b);    
// }

for (const [a,b] of abc) {
    console.log(a," :- ",b);    
}

// for (const [a,b] of abc) {
//     console.log(a , " :- "+ b);    
// }

console.log('----------------------------------');

// this forof loop does not work on Objects
// we use  forin loop

let randomobject = {
    1: 'one',
    4 : 'four'
}

for (const i in randomobject) {
    console.log(`key: ${i} , value: ${randomobject[i]}`);   
}
console.log('----------------------------------');
// forIN loop -- used on loop -- it will give keys :- 0,1,2,3,..
let arr2 = [1,2,3,4];
for (const i in arr2) {
    console.log(arr2[i]);    
}

console.log('----------------------------------');
// callback function -- function that is passed as an argument to another function 
// in forEach we need callback function 
let arr3 = [1,2,3,4,5,6]

arr3.forEach((element) => {
    console.log(element);
    
});

function square (num){
    console.log(num*num);
       
}
arr3.forEach(square)
console.log('----------------------------------');
function square2 (num){
    
    return num*num;    
}
arr3.forEach( (i) => { 
    let sq = square2(i);
    console.log(sq);   
} )

//forEach loop for objects in array

let studentData = [
    {
        prn : "2004",
        name : 'Hitesh'

    },
    {
        prn : "2001",
        name : 'Shivtej'
    },
    {
        prn : "2005",
        name : 'Ajay'
    }
]

studentData.forEach( (i)=>{
    console.log(`PRN:${i.prn}\nname:${i.name}`);    
} )
console.log('----------------------------------');
// forEach don't return values
// for that we we some inbuilt functions

// filter  ---- return true values only

let arr4 = [1,2,3,4,11,2,44,6,100,55];

const TwoDigits = arr4.filter( (i)=>{
    return i>=10 && i<=99    
} );
console.log(TwoDigits);
console.log('----------------------------------');

// map function 
let squared = arr4.map( (i)=>(i*i) )
console.log(squared);

let data = [
    {
        prn : "2004",
        name : 'Hitesh'

    },
    {
        prn : "2001",
        name : 'Shivtej'
    },
    
]

let names = data.map( (name)=>(name.name))
console.log(names);

// chaining  ---> let num = data.map().map().filter();
// 1. map --> then reult array  is passed on to second array ---> then to filter --> then store in num (container)

console.log('----------------------------------');

// reduce function

arr5 = [5,10,15,20];
const sum = arr5.reduce( (accu,curVal) =>{
    return accu + curVal
}, 0 );

console.log(sum);
