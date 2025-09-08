const form = document.querySelector('form');
// form.addEventListener('input', (event) =>{
// // console.log(event); 
// console.log(event.target.value);
// console.log(event.target.id);

// })

// form.addEventListener('change', (event) =>{
//     // console.log(event); 
//     console.log(event.target.value);
//     // console.log(event.target.id);
    
// })

// form.addEventListener('focusin', (event) =>{
//     // console.log(event); 
//     console.log(event.target.value);
//     // console.log(event.target.id);  // bubbling is allowed in focus in 
    
// })

// form.addEventListener('focusout', (event) =>{
//     // console.log(event); 
//     console.log(event.target.value);
//     // console.log(event.target.id);  // bubbling is allowed in focus in 
//     // focus out is opposite of focus in 
    
// })

// form.addEventListener('click', (event) =>{
//     // console.log(event); 
//     console.log("clicked");
//     // console.log(event.target.id);  // bubbling is allowed in focus in 
    
// })

// form.addEventListener('dbclick', (event) =>{
//     // console.log(event); 
//     console.log("doublle clicked");
//     // console.log(event.target.id);  // bubbling is allowed in focus in 
    
// })

// form.addEventListener('submit', (event) =>{
//     // console.log(event); 
//     console.log("doublle clicked");
//     // console.log(event.target.id);  // bubbling is allowed in focus in 
    
// })

// form.addEventListener('reset', (event) =>{
//     // console.log(event); 
//     console.log("form reseted");
//     // console.log(event.target.id);  // bubbling is allowed in focus in 
    
// })

//// Accessing element by id ///

// form.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     const first = document.getElementById('first');
//     console.log(first.value);

//     const sec = document.getElementById('second');
//     console.log(sec.value);

//     const third = document.getElementById('third');
//     console.log(third.value);  
//     // accesing elements by their id by adding eventlistener on form 

//     const  result = document.getElementById('result');
//     result.innerText = `Name ${first.value},Last Name ${sec.value},age ${third.value}`

//     document.body.append(result);
// })
// if we have 100 input entries so we can't write 100 input entry differentlt so here comes form DAta


form.addEventListener('submit',(event) =>{
    event.preventDefault();


   const data =  new FormData(form);
   console.log(data); //key value pair 
   for(let [key,value] of data.entries()){
    console.log(key,"=>",value);
    
   }

//    console.log(Array.from(data.keys())); // data.keys is a iteraotr so we have to iterate each item 
//    console.log(Array.from(data.values()));
   
   


})