// js is a single threaded sychronous language 

// behaves asychronous also

console.log(10);

// setTimeout(() => {
//     console.log(20);
    
// }, 2000);
// console.log(20);

// console.log(30); // one after one 

// single threded ==>  one task at a time

const timer = Date.now();
// older time
// console.log(timer);
while(Date.now()-timer<2000){
    // ewait
}
console.log(20);
console.log(30);




