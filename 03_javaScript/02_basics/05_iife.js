// Immediately Invoked Function Exprestion (IIFE)
// used for problem -- pollution of global scope varaibles or declaration
// syntaxt  -->   ()(); --> it it same as addTwo(1,2) ---> (addTwo)(1,2)  ---  ; semicolen is imp to stop the contaxt

(function databaseConnection(){ 
    //named IIFE
    console.log(`DB CONNECRED`);
    
})();

// OR unnamed IIFE 

(() => {
    console.log(`DB CONNECRED`);
})();
// 
((num) => {
    console.log(`DB CONNECRED ${num}`);
})(2);