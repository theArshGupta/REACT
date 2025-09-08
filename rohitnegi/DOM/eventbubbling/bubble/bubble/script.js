const gp = document.getElementById('GP');
const parent = document.getElementById('Parent');
const child = document.getElementById('child');

// event bubbling and listening // 

child.addEventListener('click',(event)=>{
// console.log(event.target);
// event.stopPropagation(); // stop the propogation after child // 
// console.log("child clicked");

})
parent.addEventListener('click',(event)=>{
    // console.log(event.target);

    // console.log("parent clicked");
    
})
gp.addEventListener('click',(event)=>{
    console.log(event.target);

// console.log("gp clicked");

})

// addEventListener(First_event , callback , capture) bydefault capture value is false


// event elegation 
