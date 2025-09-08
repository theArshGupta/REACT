// for of //
// ["", " " , "  "];
// [{}]

const arr = [1,2,3,4,5];
for (const val of arr) {
    console.log(val);
    
}

const greetings = "hello world!";
for (const num of greetings) {
    console.log(num);
    
}

// Maps
const map = new Map(); // unique and oredered values
map.set(1,"arsh");
map.set(2,"fauji");
map.set(3,"rajat");
console.log(map);

for (const [key,value] of map) {
    console.log(key, ':', value);
    
}