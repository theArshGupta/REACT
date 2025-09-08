let cart = ["pizza","coke","sandwich"];

function placeOrder(cart){
    console.log("talking with dominoz.......");
    const pr = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("order placed succesfully");
            const order={
                orderid: 123,
                food: cart,
                rest: "dominoz",
                location: "delhi",
            }
            resolve(order);
        }, 2000);
    })
    return pr;    
}

function preparingOrder(order){
    const pr = new Promise(function(resolve,reject){
        console.log("making started.....");
        setTimeout(() => {
            console.log("preperation done");
            const fooddetails = {
                token :12,
                rest: order.rest,
                location: order.location,
            }
        resolve(fooddetails);
        }, 2000);
    })
    return pr;  
}

function pickupOrder(fooddetails){
    console.log("picking order....");
    const pr = new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("picked up by delivery boy");
            const droplocation = fooddetails.location;
            resolve(droplocation);
        }, 3000);
    })
     return pr;   
}

function deliverOrder(droplocation){
    console.log("delivery on the way...");
    setTimeout(() => {
        console.log("order delivered");  
    }, 4000);   
}

 


async function greet () {
const order = await placeOrder(cart);
const fooddetails = await preparingOrder(order);
const droplocation = await pickupOrder(fooddetails);
deliverOrder(droplocation)
}

greet();