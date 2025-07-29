
function userLoginMessage (userName){  
    if(!userName){ 
        /*if (!parameter) is a conditional statement that checks if the parameter variable evaluates to a falsy value.
         falsy :- false,
         0 (the number zero), -0 ,BingInt 0n,
         "" (an empty string),
         null,undefined,
         NaN (Not-a-Number)

         or we can use (userName="sam") --- to get bydefault sam ,if true value come then sam will be overwritten.
         */
        console.log("Please enter valid username!");
        return
    }
    else{
        console.log(`welcome ${userName} to our website`);
        return
    }

}

userLoginMessage("Monalisa");
userLoginMessage();


// rest operator ---> (...parameter)

function allCartPrices (...prices){
    return prices;
}
arrayOfPrices = allCartPrices(11,221,334,555)
console.log(arrayOfPrices);
