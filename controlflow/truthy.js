const useremail = "arsh@gmail.com"; // assumed that string has true value if it contains something
if(useremail){
    console.log("got email");
    
}
else{
    console.log("no email");
    
}

// falsey values // 
// false,0,-0,BigInt 0n , "", null , undefined ,NaN
// truthy 
// "0" , "false" , " " , [] , {} , function(){}

// nullish coalscing operator (??): null undefined

let val1;
val1 = 5??10;
console.log(val1);
val1 = null ?? 10;
console.log(val1);
var1 = undefined ?? 15;
console.log(var1);


