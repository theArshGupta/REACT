const myobj ={
    js : 'javascript',
    cpp : 'c++',
    rb: 'ruby',
}
for (const key in myobj) {
    console.log(key);
    
}

const prog = ["js" ,'ruby' , 'java'];
for (const key in prog) {
    console.log(key , prog[key]);
}