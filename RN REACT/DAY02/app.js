const element = React.createElement("h1",{id: "first" , className: "Rahul",style:{backgroundColor : "#212121" , color : "#fff"}},"Hello coder army");
// ReactDOM.render(element,document.getElementById('root')); 
const element2 = React.createElement("h1",{id: "second" , className: "Rahul",style:{backgroundColor : "#212121" , color : "#fff"}},"Maja aaya mujhe");
const div1 = React.createElement("div",{},[element,element2]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div1);
// root.render(element2);

// div 
// cdn content dilevry network // 


// JSX allows you to write html in js

