// function greet(){
//     console.log("hello world");
    
// }
// greet();

// function add(num1 , num2){ // parameters
//     console.log(num1 + num2);
    
// }
// add(3,4); // arguments
// add(10,12);

// function mul (num1 , num2){
//     return (num1*num2);
    
// }

// console.log(mul(4,5));

// const func1 = function(){
//     console.log("hello coder");
    
// }
// func1();
// console.log(func1());

// Arrow function
// const fun = () =>{
//     console.log("hello coder");
    
// }
// fun();

// const sum = (num1,  num2) => num1+num2 ;
// console.log(sum(3,4));

// const cube = num => num*num*num;
// console.log(cube(7));



const sum = function(...number){
console.log(number);

}
// unknown number of parameters
sum(2,3,4);
sum(1,2,3,4,5,6);