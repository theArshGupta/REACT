// call back hell 

// call back 
function fetchuser(callback){
    console.log("fetching detail......");
    setTimeout(()=>{
        console.log("data fetched");
        const obj = {
            name: "arsh",
            age : 18,
        }
        // fetched from backend
        callback(obj);
        // meet(name);
    },2000)
    
}

function greet(obj){
    console.log("hello",obj.name);
   
}
function meet(obj){
    console.log("hello",obj.name,"i will meet you in delhi");
    
}
fetchuser(greet);
fetchuser(meet);
 
// greet 
// meet 
// edit
// age

// function fetchdata (callback){
// make functions and call back 
//}