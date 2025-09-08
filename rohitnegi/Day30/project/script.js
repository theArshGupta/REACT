const button = document.querySelector('button')
button.addEventListener('click',()=>{
   const place = document.getElementById('location').value;

   const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=8be52f02e35b47738cc92158250309&q=${place}&aqi=no`);

   function updateTemp(data){
    const ele = document.getElementById('weatherInfo');
    ele.innerHTML = data.current.temp_c;

   }

   promise.then((response)=>{
    return response.json();
   })
   .then((data)=>{
        updateTemp(data);
   })


})