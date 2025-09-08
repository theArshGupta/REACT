// create element through js 

// const header1 = document.createElement('h1');
// header1.textContent = "Hello World";

// header1.style.backgroundColor = "#212121";
// header1.style.color = "#fff";
// header1.style.fontSize = "30px";

// const header2 = document.createElement('h1');
// header2.textContent = "Hello World";

// header2.style.backgroundColor = "blue";
// header2.style.color = "#fff";
// header2.style.fontSize = "30px";


// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2); // too much code 

// now using react //


const react = {
    createElement : function(tag,styles,children){
        const ele = document.createElement(tag);
        if(typeof children === 'object'){
            for (const element of children) {
                ele.append(element);
            }

        }
        else{
        ele.innerText = children;
        }
        for(let key in styles){
            ele.style[key] = styles[key];     //   ele.style[key]  =   ele.style.key //   styles[key] is the value of object
        }
        return ele;
    }
}

const reactdom = {
    render: function(element , root){
        root.append(element);
    }
}
const header1 = react.createElement('h1' , {fontSize:"30px" , backgroundColor: "blue" , color: "#fff"} , "hello world");
const header2 = react.createElement('h1' , {fontSize:"30px" , backgroundColor: "#212121" , color: "#fff"} , "hello world");

// unorder list 
//html csss , js



reactdom.render(header1,document.getElementById('root'));
reactdom.render(header2,document.getElementById('root'));

const l1 = react.createElement('li',{},"HTML");
const l2 = react.createElement('li',{},"CSS");
const l3 = react.createElement('li',{},"JS");
const ul = react.createElement('ul', {} ,[l1,l2,l3]);

reactdom.render(ul,document.getElementById('root'));


 