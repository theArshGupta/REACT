const coding = ["js" , 'java' , 'python' , 'php'];
const values = coding.forEach((item) => {
    console.log(item);
    return item;
    
})
console.log(values ); // foreach don't return any value

  const mynums = [1,2,3,4,5,6,7,8,9,10];
//   const mynewnums = mynums.filter((num) => num >4); // condition satisfy return the value in filter
  const mynewnums = mynums.filter((num) => {
    return num >4 // u have to return the value if curly braces started otherwise it'll return empty array
});
  console.log(mynewnums );
  

