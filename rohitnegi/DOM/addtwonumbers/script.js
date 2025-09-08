const button = document.querySelector('button');
button.addEventListener('click' ,()=>{
// read the data
const firstnum = document.getElementById("first");
const num1 = Number(firstnum.value);
const secnum = document.getElementById("second");
const num2 = Number(secnum.value);

/// and show 
const result = num1+num2;
const ans = document.getElementById("result");
ans.textContent = result;
})