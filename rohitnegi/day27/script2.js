// call back hell 

// order pizza 

// ca;;back = (()=>{
    // preparingOrder();
// })


function placeOrder(callback){
    console.log("talking with dominoz.......");
    setTimeout(() => {
        console.log("order placed succesfully");
        callback();
    }, 2000);
}

function preparingOrder(callback){
    console.log("making started.....");
    setTimeout(() => {
        console.log("preperation done");
        callback()
    }, 2000);
    
}

function pickupOrder(callback){
    console.log("picking order....");
    setTimeout(() => {
        console.log("picked up by delivery boy");
        callback()
    }, 3000);
    
}

function deliverOrder(){
    console.log("delivery on the way...");
    setTimeout(() => {
        console.log("order delivered");
        
    }, 4000);
    
}
// placeOrder(preparingOrder);
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    });
})
// call back hell .. // 
// disadvantage code becomes messy // 

// preparingOrder();
