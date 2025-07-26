const arr = [0,1,2,3,4,5,6];

arr.unshift(7) //add value in first position 
console.log(arr)
arr.shift()  // remove first element of array
console.log(arr)

console.log(arr.includes(9)); //to cheack if element is present in it or not 

const newArr = arr.join('-'); //it join the array with given seperator and make it a ---> string 
console.log(newArr) //type - string 

// slice - give the slice without changing the original array
// if (1,3) --- 1,2 not 3 
const slicedArray = arr.slice(1,5);
console.log(slicedArray)

//splice - remove the part in ---original arr too---
// and range is included --- (1,3)-- 1,2,3   
let arr2 = [0,1,2,3,4,5,6]
const splicedArray = arr2.splice(1,3)
console.log(splicedArray)
console.log(arr2)

// ---------------------
// if there are two arrays and you push second array in first, then the whole second array will be stored in first array as a last element 
// ex . [0,1,2,3,[4,5,6,7]]

// concate oprator return the new array 

// or we can use spread orator to merge 2 arrays  ---

let a = [1,2,3,4]
let b = [5,6,7,[8,9]]

let c = [...a , ...b]
console.log(c)

// flat function   --- Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let d = [1,2,3,[4,5],6,[7,8,[9,10,['ddd']],11],12 ,[13,14]]
let e = d.flat(1)
console.log(e)
let f = d.flat(Infinity)
console.log(f)


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Hitesh"}))
console.log(Array.of(a,b))