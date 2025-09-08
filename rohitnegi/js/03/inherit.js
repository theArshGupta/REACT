let obj1 = {
    name: "Arsh",
    age:20,
}

let obj2 = {
    amount: 2345000000000,
    money:200,
}
obj2.__proto__ = obj1;
// obj2 has inherited the properties of obj1 that's why they are accessible
console.log(obj2.name);
 // Arrays have function which are not even difined why?
 // because they use inheritane they use the prototype which is called Array.prototypes
 // and which inherit from object prototypes so they all are connected 
 let arr = [];
console.log(arr.__proto__ == Array.prototype);
console.log(arr.__proto__.__proto__ == Object.prototype);
console.log(arr.__proto__.__proto__.__proto__ == null);


