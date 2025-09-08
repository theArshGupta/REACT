
const resturant = [];
const img = ["First","second","third","fourth","fifth","sixth","seventh","Eigth","nine","tenth"];
const restName =  ["Spice Villa","Ocean Breeze","Golden Spoon","The Hungry Hippo","Royal Tandoor","Flavors of India","Urban Bites","The Curry House","Pizza Paradise","Saffron Lounge","The Noodle Nest","BBQ Nation","Taste of Tuscany","The Burger Shack","Masala Magic","Grill & Chill","The Dessert Den","Biryani Palace","Cafe Aroma","The Food Factory"];
const foodItems = ["Pizza","Burger","Pasta","Sushi","Biryani","Tacos","Noodles","Sandwich","Fried Rice","Salad"];
const locations = ["New York","London","Paris","Tokyo","Dubai","Sydney","Toronto","Singapore","Rome","Mumbai"];


for(let i =0 ; i<103; i++){
    const obj = {};
    obj["image"] = img[Math.floor(Math.random()*10)];
    obj["name"] = restName[Math.floor(Math.random()*20)];
    obj["rating"] = ((Math.random()*5).toFixed(1));
    obj["foodtype"] = foodItems[Math.floor(Math.random()*10)];
    obj["price_for_two"] = Math.floor(Math.random()*2401+100);
    obj["location"] = locations[Math.floor(Math.random()*10)];
    obj["distance"] = Math.floor(Math.random()*10+1) + ("km");
    obj["offers"] = Math.floor(Math.random()*30)+"%";
    obj["alcohol"] = Math.random() > 0.7;
    obj["open_time"] = Math.floor(Math.random()*24);
    obj["close_time"] = (obj["open_time"]+12)%24;
    resturant.push(obj);
}

console.log(resturant);


// Array to JSON (HW);

const fs = require('fs');

// Assuming resturant array already exists
fs.writeFileSync("restaurants.json", JSON.stringify(resturant, null, 2));

console.log("restaurants.json file created successfully!");
