// we want to show random 5 questions from 20 questions 
// ************************** create object o question *************** ///////////
const q1 = {
    question: "Who is the only player to score 100 international centuries?",
    options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Jacques Kallis"],
    ans: "Sachin Tendulkar"
};

const q2 = {
    question: "Which country won the first Cricket World Cup in 1975?",
    options: ["India", "Australia", "West Indies", "England"],
    ans: "West Indies"
};

const q3 = {
    question: "Who was the first batsman to score a double century in ODIs?",
    options: ["Virender Sehwag", "Rohit Sharma", "Chris Gayle", "Sachin Tendulkar"],
    ans: "Sachin Tendulkar"
};

const q4 = {
    question: "Which bowler has taken the most wickets in Test cricket?",
    options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"],
    ans: "Muttiah Muralitharan"
};

const q5 = {
    question: "Which player is known as 'Mr. 360'?",
    options: ["AB de Villiers", "Glenn Maxwell", "Kieron Pollard", "Jos Buttler"],
    ans: "AB de Villiers"
};

const q6 = {
    question: "Who won the ICC Cricket World Cup 2011?",
    options: ["India", "Sri Lanka", "Australia", "Pakistan"],
    ans: "India"
};

const q7 = {
    question: "Which cricketer is nicknamed 'The Wall'?",
    options: ["Rahul Dravid", "Sourav Ganguly", "Steve Waugh", "Hashim Amla"],
    ans: "Rahul Dravid"
};

const q8 = {
    question: "Which team has won the most IPL titles?",
    options: ["Mumbai Indians", "Chennai Super Kings", "Kolkata Knight Riders", "Sunrisers Hyderabad"],
    ans: "Mumbai Indians"
};

const q9 = {
    question: "Who was the captain of India during the 1983 World Cup victory?",
    options: ["Sunil Gavaskar", "Kapil Dev", "Ravi Shastri", "Mohinder Amarnath"],
    ans: "Kapil Dev"
};

const q10 = {
    question: "Which batsman has the highest individual score in ODIs?",
    options: ["Martin Guptill", "Rohit Sharma", "Chris Gayle", "David Warner"],
    ans: "Rohit Sharma"
};

const q11 = {
    question: "Who is the fastest batsman to score 10,000 runs in ODIs?",
    options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "Brian Lara"],
    ans: "Virat Kohli"
};

const q12 = {
    question: "Which bowler delivered the famous 'ball of the century'?",
    options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "James Anderson"],
    ans: "Shane Warne"
};

const q13 = {
    question: "Which Indian cricketer is nicknamed 'Prince of Kolkata'?",
    options: ["Virender Sehwag", "Sourav Ganguly", "VVS Laxman", "Rohit Sharma"],
    ans: "Sourav Ganguly"
};

const q14 = {
    question: "Who has hit the most sixes in international cricket?",
    options: ["MS Dhoni", "Shahid Afridi", "Chris Gayle", "Rohit Sharma"],
    ans: "Chris Gayle"
};

const q15 = {
    question: "Which country hosted the 2019 ICC Cricket World Cup?",
    options: ["India", "Australia", "England", "South Africa"],
    ans: "England"
};

const q16 = {
    question: "Who is the leading run-scorer in Test cricket?",
    options: ["Ricky Ponting", "Jacques Kallis", "Sachin Tendulkar", "Brian Lara"],
    ans: "Sachin Tendulkar"
};

const q17 = {
    question: "Which player is known for the 'helicopter shot'?",
    options: ["Virat Kohli", "MS Dhoni", "Hardik Pandya", "Rohit Sharma"],
    ans: "MS Dhoni"
};

const q18 = {
    question: "Which country is known as the 'Baggy Greens'?",
    options: ["England", "South Africa", "Australia", "New Zealand"],
    ans: "Australia"
};

const q19 = {
    question: "Who was the first Indian bowler to take a hat-trick in a World Cup?",
    options: ["Chetan Sharma", "Javagal Srinath", "Kapil Dev", "Zaheer Khan"],
    ans: "Chetan Sharma"
};

const q20 = {
    question: "Which cricketer is called 'Universe Boss'?",
    options: ["Andre Russell", "Kieron Pollard", "Chris Gayle", "Dwayne Bravo"],
    ans: "Chris Gayle"
};

const arr = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20];

function randomQuestion(){
   const data = new Set();
   // use set for unique sets // 
   while(data.size!=5){
   const index = Math.floor(Math.random()*(arr.length)+1);
   data.add(arr[index]);
}
return [...data];
}

// select the form and insert the elements ; 
const form = document.querySelector('form');
 

const problem = randomQuestion();
const oans = {};
console.log(problem);

problem.forEach((obj,index)=>{
    // suppose obj has const q1 = {//     question: "Who is the only player to score 100 international centuries?",/     options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Jacques Kallis"],//     ans: "Sachin Tendulkar"// };
    const div_element = document.createElement('div');
    div_element.className = 'question';

    // selecting the answers // 
    oans [`q${index+1}`] = obj['answer']  // key value pair main answer store kar rhe hain 

    const para = document.createElement('p');
    para.textContent = `${index+1}.${obj['question']}`;
    div_element.appendChild(para);
    // create 4 options // 
    obj['options'].forEach((data)=>{
       const label= document.createElement('label');
       const input = document.createElement('input');
       input.type = "radio";
       input.name = `q${index}`;
       input.value = data;
       label.appendChild(input);
       label.appendChild(document.createTextNode(data));
       div_element.appendChild(label);
       div_element.appendChild(document.createElement('br'));


    })  
    form.appendChild(div_element);
})

const button = document.createElement('button');
button.type = "submit";
// button.className = ""
button.innerText = "Submit";

form.appendChild(button);

// check the form
form.addEventListener('submit',(event)=>{
    // event.preventDefault();
    const data = new FormData(form);
    // const ans = Array.from(data.values());
    // console.log(ans);
    let result =0 ; 
    for (const [key,value] of data.entries()) {
        if(value===oans[key]){
            result++;
        }
    }
        
    
    const out = document.createElement('out');
    out.innerText = `you have scored ${result} out of 5`;

    document.getElementsByClassName('container')[0].append(out);
    // console.log(out);

    form.reset();
    
    
})
 
// randomQuestion()