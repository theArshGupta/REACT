// const obj = {
//     0: 20,
//     1: 30,
//     2: 40,
//     name: "Arsh",
//     balance: 20,
//     gender: "male",
//     age: 20,
//     account_number: 23120
// }
//  const inst = {
//     username: "thearshgupta",
//     password: "arsh@12an"
//  }
//  // key is stored as a string 
// console.log(obj);
// console.log(obj.gender);
// console.log(obj["gender"]);
// console.log(obj["0"]);
// // if u see first three index they are working as an array 
// // that is why array is a type of object
//  const arr = {
//     0:10,
//     1:20,
//     2:30,
//     length: 3
//  }

//  const person = new Object();
//  // add //
// person.name = "arsh";
// person.age = 20;
// person.gender = 'gay';

// console.log(person);
// //delete//

// delete person.gender;
// console.log(person);

// class people{
//     constructor(name , age , gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }
// let per1 = new people("arsh", 20 ,"male");
// // here we created a constructor and class so we don't have to write lots and lots of code we can easily call our constructor 
// let per2 = new people("fauji",25,"female");
// console.log(typeof per1);
// console.log(per2 );


// const obj = {
//     0: 20,
//     1: 30,
//     2: 40,
//     name: "Arsh",
//     balance: 20,
//     gender: "male",
//     age: 20,
//     account_number: 23120
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// const arr2 = Object.entries(obj);
// console.log(arr2);

//assgin usecase
// let obj1 = {
//     a:1,
//     b:2,
// }
// let obj2 = {
//     c:3,
//     d:4,
// }
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// console.log(Object.assign(obj1,obj2));

// const obj5 = {...obj1,...obj2,...obj3}
// console.log(obj5);
// 

// let obj1 = {
//     a: 10,
//     b: 20,
// }
// let obj2 = obj1;
// // shallow copy //
// obj2.a = 30;

// console.log(obj1, obj2);

// //deep copy
// let obj3 = structuredClone(obj1);
// obj3.a = 40;
// console.log(obj1, obj2, obj3);

// // nested object

// let obj6 = {
//     name: "arsh",
//     age: 20,
//     add: {
//         pincode: 281001,
//         city: "mathura"
//     }
// }

// console.log(obj6.add);

// let obj7 = Object.assign({}, obj6);
// obj7.add.pincode = 281004;
// console.log(obj6.add.pincode);

// let obj8 = Object.assign({}, obj6);
// obj7.name = "rajat";
// console.log(obj6.name);

// so in assign a shallow copy is created in nested objects but a deep copy in without nested //

// destrucutring of an object ///

let obj = {
    name: "Arsh",
    age: 20,
    balance: 420,
    adhhar: 518854151658,
    add:{
        pincode: 281001,
        city: "Mathura",
        state: "UP",
    },
    greet : function(){
        return "hellocoders";
    },
    meet: function (params) {
        return 20;
    }
}
console.log(obj.greet());
console.log(obj.meet());

//  let {name , age} = obj;
//  console.log(name , age);
 
//  let {name : full_name , age: umar} = obj;
//  console.log(full_name , umar);

//  let {name, age, ...obj4} = obj;
//  console.log(obj4);
 
const arr = [1,2,3,4,5];
// const[first, second , third] = arr;
// console.log(first,second,third);

const[first, second,...third] = arr;
console.log(third);

const{add:{pincode}} = obj;
console.log(pincode);
