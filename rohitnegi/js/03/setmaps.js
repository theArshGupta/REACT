// // const items = [1,2,3,4,5];
// // // for(let item of items){
// // //     console.log(item);
    
// // // }

// // // const users = {
// // //     name: "arsh",
// // //     age : 19,
// // // }
// // // for(let item of users){
// // //     console.log(item);
    
// // // }

// // // Array like objects 
// // //which have length property and can ascces by index

// // // string 

// // let s1 = "arsh";
// // console.log(s1.length);

// // // ************************* SETS  **********************//
// // // it is iterable 
// // // stores data
// // // no indexed base access
// // //it has its own methods
// // //order is not guaranteed 
// // // unique items only

// // const numbers = new Set([1,2,2,3,4,5]);
// // console.log(numbers);

// // const numbers1 = new Set('abxc');
// // console.log(numbers1);


// // const numbers2 = new Set();
// // numbers2.add(1);
// // numbers2.add(2);
// // numbers2.add(3);
// // numbers2.add(4);
// // numbers2.add(5);
// // numbers2.add(items)
// // numbers2.add(['r','re2']);
// // if(numbers2.has(1)){
// //     console.log('1 is present');
    
// // }
// // else{
// //     console.log('not present');
    
// // }
// // console.log(numbers2);

// //  for(let num of numbers2){
// //     console.log(num);
    
// // }

// const myarr = [1,2,2,3,3,4,5,6,7,7];
// const myset = new Set(myarr);
// let len = 0;
// for(let num of myset){
//     len++;
// }
// console.log(len);

// console.log(myset );
// console.log(myarr);

// // object leterals
// const person = {
// firstname : "Arsh", // keys are always in string 99% 
// age: 19,
// 1:"one"
// }

// // console.log(person.firstname);
// // console.log(person.age);

// for (let key in person){
//     console.log(typeof key);
    
// }

//// ************************* MAPS ********************//
const person = new Map();
person.set('name' , 'arsh');
person.set('age',19);
person.set(1,'one');


console.log(person.get(1));

console.log(person);
for(let key of person.keys( )){
    console.log(key , typeof key);
    
}

// the difference between object and maps in js is that keys in maps can be of any type 

const person1 = {
    name : "arsh",
    id: 1
}
const person2 = {
    name : "harsh",
    id: 2
}

const extrainfo = new Map();
extrainfo.set(person1 , {age:8 , gender:"male"});
extrainfo.set(person2,{age:9, gender: "male"});
console.log(extrainfo);
console.log(person1.id);
console.log(extrainfo.get(person1).age);
console.log(extrainfo.get(person2).gender);

// clone using Object.assign
// memory 

const obj ={
    key1: "value1",
    key2: "value2",
}

obj2 = obj;
obj2.key3 = "value3";
obj.key4 = "value4";
// if i do change in obj or obj2 both will change because they are pointing toewards the same memory location
// another method is spread operator // 

const obj3 = {... obj};
obj.key5 = "value5";
console.log(obj3 , 'obj3'); // now if i change the obj it does not reflect in obj 3
console.log(obj2);
console.log(obj);
// another is assign method //
const obj4 = Object.assign({},obj);
obj.key6 = "value6";  
console.log(obj4);

// optional chaining / 
let obj7 = {
    name: "arsh",
    // address: {housenumber:1231},
    age:18
}
console.log(obj7.name);
console.log(obj7?.address?.housenumber); // error Cannot read properties of undefined (reading 'housenumber')
console.log(obj7.address); //undefined
// solution of getting no error use ?. 





