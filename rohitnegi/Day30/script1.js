// call back hell 

// async task
// fetch opn ();
// whether 

const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=8be52f02e35b47738cc92158250309&q=London&aqi=no`);

// promises.then((response)=>{
//     // console.log(response);
//     const pro2 = response.json();
//     pro2.then((data)=>{
//         console.log(data);
        
//     })
//    console.log(response.json());// asyc also 
   
    // three states 
    // pending resolve reject  
// }).catch((error)=>{
//     console.log(error); // if then don't work
    
//  })
// setInterval(() => {
//     console.log(obj);
    
// }, 2000);
// console.log(obj); // async task it is fetching data which takes time // 

promises
.then(response=>response.json())
.then(data=>console.log(data));

