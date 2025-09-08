const coding = ["js" , 'java' , 'python' , 'php'];
coding.forEach( function (item) {
    console.log(item);
    
});

coding.forEach((item) => {
console.log(item);

})

function printme(item){
    console.log(item);
    
}
coding.forEach(printme);


coding.forEach((item , index , arr)=> {
    console.log(item,index,arr);
    
})

const mycoding = [
    {
        languagename: "java",
        languagefilename: "java"
    },
    {
        languagename: "python",
        languagefilename: "py"
    },
    { 
        languagename: "javascript",
        languagefilename: "js"
    }
]
 mycoding.forEach((item)=>{
console.log(item.languagename);

 })