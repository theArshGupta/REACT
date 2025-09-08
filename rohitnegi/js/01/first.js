console.log("hello coder army");
// js is a brain of a website 
// it does mathmatical operations and many things
// it can modify html 
// it has two datatypes primitive and nonprimitive
// primitive has 7 
// number , string , bigint , boolean , null(object) , undifined , symbols
// in js the range of number lies in -2^n-1-1 to 2^n-1-1
// _ _ _ 1st bit is sign bit and other two are magnitude 
// so the range is -3 to 3 011 to 111
// 64 bit number 

console.log(Number.MAX_SAFE_INTEGER); // 2^53 -1
// 64 bit it should be 2^63-1 not this  2^53 -1 why 
// sign bit 11 bit exponent 52 bit mentisa 
// 42.75 42.75 => 101010.11 => 1.0101011*2^5 5 is exponent
// so +ve number 11 bit for exponent 0101011 this is mentisa
// add 1023 in 5 => 1028
// binary convert 
// move decimal to left side
// Non primitive data type
// Array,
//object ek type ka data ek saath rahe jaise username aur password jaise k user ka data ek saath key value pair main
// but in array we can't have key value pair so we can't know what value is associated to the given value
//,function
 let username1 ={
    name: "arsh",
    class: "2nd year",
    balance: 0
 }
console.log(username1);
// object vvvvvvimportant 

// funnction 
let func = function(){
    console.log("hello function started");  
}
func();

// typeconversion 
// one type to another type
let acc = "100";
let num = Number(acc);

let x = false;
console.log(Number(x));

let account = "100xs";
console.log(Number(account));
 
let x1 = null;
console.log(Number(x1));

let x2;
console.log(Number(x2));

// string 

let s1 = 20;
console.log(typeof String(s1));

let s2 = true;
console.log(String(s2));

// boolean 

let b1 = "abc";
console.log(Boolean(b1));

let b2 = "";
console.log(Boolean(b2));

// operators to aate hi hai
// arithmetic operators
// bracket,divide , multiply , add , sub , left to right 
// modulus same as java 
// increment and decrement operator 
// assignment operator let x = 20;
