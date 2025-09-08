document.body.addEventListener('click', (event) =>{
    const circle  = document.createElement('div');
    circle.className = 'circle';
    circle.textContent = 'hello';

    const x = event.clientX;
    const y = event.clientY;
    console.log(x);
    console.log(y);
    
    circle.style.left = `${x-25}px`
    circle.style.top = `${y-25}px`

    const color = ['red' , 'blue' , 'orange' , 'green' ,'yellow' , 'purple'] 
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];

    const msg = ['hola' , 'Ram Ram' , 'Khuda haafiz' , 'guru raadhe' , 'jai gopal' ];
    circle.textContent = msg[Math.floor(Math.random()*msg.length)];

    document.body.appendChild(circle);
    setTimeout(() => {
        circle.remove();
    }, 5000);
})