function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success = true;
            // let success = false
            if (success) {
                resolve("Data fetched successfully"); //hare we can send eny thing -- object ,arr ... 
            }else{
                reject("Error fetching data");// same hare
            }

        },3000);

    })
}

fetchData()
    .then((data)=>{
        console.log(data);
        return data.toLowerCase();       // we can do processing on the data , we have got .and send it doen to next .then  
    }) 
    .then((value)=>{
        console.log(value);        
    })
    .catch((error)=>{
        // return console.log(error);
        return console.error(error);
    })