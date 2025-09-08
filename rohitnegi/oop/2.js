// console.log(this);
// function myfun(){
//     console.log(this);
    
// }
// myfun();

function hello (){
    console.log("hello rajat ");
}
 hello.call();
 // call apply bind

 const user1 ={
    name: "arsh",
    age:18,
    about: function(){
        console.log(this.name , this.age);
        
    }
 }
 user1.about();
 const user2 ={
    name: "arsh1",
    age:19,
 }
// if i have to call a function about in user 2 but it is not defined in user2 so i can use call method to call about function from user1 to get get user2 values
user1.about.call(); // undifined // 
user1.about.call(user2);