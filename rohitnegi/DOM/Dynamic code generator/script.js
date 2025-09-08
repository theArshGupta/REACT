const quotes = [
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "The future depends on what you do today. – Mahatma Gandhi",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Life is what happens when you’re busy making other plans. – John Lennon",
    "Do not pray for an easy life, pray for the strength to endure a difficult one. – Bruce Lee",
    "The best way to predict the future is to create it. – Peter Drucker",
    "Man is the measure of all things. – Protagoras",
    "The unexamined life is not worth living. – Socrates",
    "He who has a why to live can bear almost any how. – Friedrich Nietzsche",
    "Time is the most valuable thing a man can spend. – Theophrastus",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. – Aristotle",
    "The greatest thing you’ll ever learn is just to love and be loved in return. – Nat King Cole",
    "Love all, trust a few, do wrong to none. – William Shakespeare",
    "We rise by lifting others. – Robert Ingersoll",
    "Be the change that you wish to see in the world. – Mahatma Gandhi",
    "Peace begins with a smile. – Mother Teresa"
  ];

  const backgrounds = [
    "#e8f5e9", // pastel green
    "#a5d6a7", // soft mint green
    "#c8e6c9", // fresh leafy green
    "#f1f8e9", // near white with green hint
    "#81c784", // medium green
  
    "linear-gradient(to right, #ffffff, #a8e6cf)", // white → mint green
    "linear-gradient(135deg, #e0f7fa, #c8e6c9)",  // teal → soft green
    "linear-gradient(to bottom, #ffffff, #dcedc8)", // white → lime tint
    "linear-gradient(to right, #43a047, #c8e6c9)", // deep → light green
    "linear-gradient(120deg, #f0fff4, #a7ffeb)"   // pastel green → aqua
  ];
  
function generatequote(){
const quote = document.getElementById('quote');
// quote.innerHTML = "i am great"
const index = Math.floor(Math.random()*quotes.length);
quote.textContent =  quotes[index] // use math . random 
}

setInterval(generatequote , 2000); // calling the function every 2 seconds 
//  homework change the background color in every 5 second // 

// function changebg () {
//     const body = document.body;
//     const index = Math.floor(Math.random()*backgrounds.length)
//     body.style.background = backgrounds[index];
// }
// setInterval(changebg , 2000);
 // background color is changing 



 // now we are learning eventlistner we want that the things only change when want them to using a button 


 const button = document.querySelector('button');
 button.addEventListener('click', (event)=>{ // use callback function // 
    console.log(event.target);
    console.log(event.type);
    console.log(event.clientX);
    console.log(event.clientY);
    
    
    
    const quote = document.getElementById('quote');
// quote.innerHTML = "i am great"
const index = Math.floor(Math.random()*quotes.length);
quote.textContent =  quotes[index] // use math . random 
 })

// document.addEventListener('keydown',(event)=>{
// console.log(event.key);
// if(event.key === "Enter"){
// const quote = document.getElementById('quote');
// // quote.innerHTML = "i am great"
// const index = Math.floor(Math.random()*quotes.length);
// quote.textContent =  quotes[index] // use math . random 
// }
// })
