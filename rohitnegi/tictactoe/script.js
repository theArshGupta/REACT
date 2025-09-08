let turn = 'O';
let total_turn = 0; 
let winner = [
    [0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7] , [2,5,8] , [0,4,8] , [2,4,6] 
]


let board_array = new   Array(9).fill("E");
 



const board = document.querySelector('.board');

 // function to check winner // 
function checkWinner(){
    for (const [i1,i2,i3] of winner)  {  // destructuring the array 
        // console.log(i); 
        if(board_array[i1]!="E" && board_array[i1]===board_array[i2] && board_array[i2]===board_array[i3]){
            return true;
        }
    }
    return false;
}

function Draw(){
    if(total_turn>=9){
        return true;
    }

    return false;
}

// function to print the X O 
const printer = (event) =>{
        console.log(event.target.id); // event.target se we know which child triggered the click 
        const element = event.target;
        if(board_array[element.id]==="E") // to avoid more click after one click ; 
        {
        if(turn==='O'){
            element.innerHTML = "O";
            total_turn++;
            if(Draw()){
                document.getElementById('winningMsg').innerHTML="DRAW"
            }
            board_array[element.id] = "O";
            if(checkWinner()){
                document.getElementById('winningMsg').innerHTML = "Winner is O"
                board.removeEventListener('click' , printer);
            }
            turn = "X";
        }
        else{
            element.innerHTML = "X";
            total_turn++;
            if(Draw()){
                document.getElementById('winningMsg').innerHTML="DRAW"
            }
            board_array[element.id] = "X";
            if(checkWinner()){
                document.getElementById('winningMsg').innerHTML = "Winner is X"
                board.removeEventListener('click' , printer);
            }
            turn = "O";
        }
    
    
     }
    }
board.addEventListener('click' ,printer); // calling the function printer using printer (call back function )
 
// restart button 
const restart = document.getElementById('resetbutton');
restart.addEventListener('click',(event)=>{
const cell = document.getElementsByClassName('cell');
Array.from(cell).forEach(element => {
    element.innerHTML = "";
});
// resetting the default settings 
turn = "O";
total_turn=0;
board_array = new Array(9).fill("E");
document.getElementById('winningMsg').innerHTML = "";
board.addEventListener('click' ,printer);
});
 
 