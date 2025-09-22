function fetchData(){
    return new Promise((resolve, reject)=>{
       setTimeout(() => {
        resolve({name:"Hitech",xyz:3})
       }, 3000); 
    })
}

async function getUserData(){
    try {
        console.log('Fetching user data...');
        const userData = await fetchData() //we can only use await keyword when there is async over the function.
        console.log("user Data: ", userData);        
    } catch (error) {
        console.error("Error while fetching the data",error);
        
    }
}
getUserData();