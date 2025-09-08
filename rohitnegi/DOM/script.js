console.log("hello coders kaise ho");
// document.getElementById("first")
function attach (content){
const element = document.createElement('li'); // created an element
element.innerHTML = content;

const parent = document.getElementById("root");
parent.appendChild(element);
parent.append(element , "hello coder army"); // in this method you can attach multiple elements in; 
};
attach("TS");
attach("React");

// creating  a text node // 
function attach1 (content){
const parent = document.getElementById("root"); // selecting element by id root and appending a child text node // 
// const li = document.createElement("li");
const element = document.createTextNode(content);
// li.appendChild(element);
parent.append(element); // here we are not creating a new li which is a new line element by default but the text we are creating is inline by default // 
}
attach1("maa")
// attach1("hello arshu");

// create a attribute Node // 

// const element = document.createAttribute("id");
// element.value = "first";
 
// const curr_list = document.querySelector('li'); // select the first li // 
// curr_list.innerHTML = "heloo";
// curr_list.setAttributeNode(element);

// acces to second list // 
// const parent = document.getElementById("root");
// parent.children[2].setAttributeNode(element);
//  console.log(parent.children); // gives html collection  




 // accessing attributes // 
 const element = document.getElementById("root");
 console.log(element.getAttribute('style')) // getting attribute
 element.setAttribute('custom', 20)
 element.setAttribute('class' , 'rohan') // setting attribute 
 element.removeAttribute('custom'); // removing attributes 

 // Add nodes to the DOM // 
 
 const parent = document.getElementById("root");
 const element1 = document.createElement('li');
 element1.innerHTML = "TS";
 parent.prepend(element1); // first main 
 parent.append(element1); // last main
 const element2 = document.createElement('li');
 element2.innerHTML = "insertbefore"
 const child2 = parent.children[1];
 parent.insertBefore(element2,child2); // inserted element 2 before child 2

 parent.replaceChild(element2,child2);

 const element3 = document.createElement('div');
 element3.innerHTML = "helllo coder army 33";
 parent.insertAdjacentElement("beforebegin" , element3);
//  parent.insertAdjacentElement("afterend" , element3);
 parent.insertAdjacentElement("afterbegin" , element3);


// deleting node or element // 
const li = document.querySelector('li')
li.remove();  // removing eleme nt