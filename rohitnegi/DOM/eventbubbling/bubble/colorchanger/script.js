// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const yellow = document.getElementById('yellow');
// const green = document.getElementById('green');
// const purple = document.getElementById('purple');

// red.addEventListener('click' , () =>{
//     const body = document.body;
//     body.style.backgroundColor = 'red';
// })


// const buttons = document.querySelectorAll('button');
// const body = document.body;
// console.log(buttons);

// buttons.forEach((button) => {
//     button.addEventListener('click' , () =>{
//         const color = button.id;
//         body.style.backgroundColor = color;
//         console.log(color)
//     })
   
// }); // this is not optimized because it uses too much eventlistener so it requires a lot of memory //

// Event bubbling event capturing // 

const parent = document.getElementById('root');
parent.addEventListener('click' , (event)=>{
console.log(event.target.tagName);

    const color = (event.target.id);
 // we are using the concept of bubling here by using event.target the parent knows which chich child is triggering this
    if(event.target.tagName === 'BUTTON'){
    document.body.style.backgroundColor = color;
}
    // event delegation child ko na deke parent ko dedo event  // 

    
})