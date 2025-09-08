//methods => functions inside objects

// const person = {
//     name : "mohit",
//     age : 19,
//     about: function(){
//         console.log(`person name is ${this.name} and age is ${this.age}`);
//         console.log(this); // this // is a full object here 
        
        
//     }
// }
// console.log(person.about);
// person.about();

function personInfo(){
    console.log(`person name is ${this.name} and age is ${this.age}`);
    
}


const person1 = {
    name : "mohit",
    age : 19,
    about: personInfo
}

const person2 = {
    name : "harsh",
    age : 14,
    about: personInfo
}

const person3 = {
    name : "fauji",
    age : 18,
    about: personInfo
}

// personInfo();
person1.about(); 
person2.about();
person3.about();
