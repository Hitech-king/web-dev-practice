// keys --- converted into string ,,, and values can be anything 
let Student = {
    name : "hitesh",
    age : 20,
    "full name" : "hitesh  bhusara"
}

// Ways to acces the elements in object

console.log(Student.name)

console.log(Student["full name"])

// to print Symbol ---interview question 

let key = Symbol("key1");

let S2 = {
    [key] : "myKey2"
}
console.log(S2[key])

// Object.assign({},obj1,obj2) ---to merge  ----source of merge is first so we give empty object

// or we can use spread funk  (...obj1, ...obj2)

let obj3 = {...Student , ...S2}
console.log(obj3);

// to get keys or values --- as array
console.log(Object.keys(Student));
console.log(Object.values(Student));
console.log(Object.entries(Student));

// to check if a object has that property --give boolean value

console.log(Student.hasOwnProperty('age'));

// de-structuring 
const {"full name" : fn} = Student;
console.log(fn);



