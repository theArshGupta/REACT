// primitive
// 7 string , number , boolean , null , undifined, symbol , bigint


// const score = 100 // js is a dynamically typed language 


// refference type / non primitive
// Array , objects , functions 

const heros = ["hanuman " , "doga"]
 let myobj = {
    name :'arsh',
    age:  20
}

const myfunction = function(){
    console.log("hello");
    
}
console.log(typeof myfunction);


// ***************************
//stack
//used in primitive type make copy 
// , heap Memory (non primitive)  refference 

 let myname = "arsh";
 let anothername = myname;
 anothername = "rajaji"
 console.log(anothername);
 console.log(myname );

 let userone = {
    email: "arshg@doodle.com", 
    upi: "arsh@ybl"
 }

 let user2 = userone;
 user2.email = "arsh@google.com"
 console.log(userone.email);
 console.log(user2.email);
 
 


