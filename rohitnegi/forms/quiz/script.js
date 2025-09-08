const oans = ['Sachin Tendulkar' , 11 ,'West Indies' , 50 ,  'AB de Villiers' ];
const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data = new FormData(form);
    const ans = Array.from(data.values());
    console.log(ans);
    let result =0 ; 
    for (let index = 0; index < oans.length; index++) {
        if(ans[index] == oans[index]){
            result++
        }
        
    }
    const out = document.createElement('out');
    out.innerText = `you have scored ${result} out of 5`;
    document.getElementsByClassName('container')[0].append(out);
    console.log(out);
    
    
})