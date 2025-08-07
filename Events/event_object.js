let button=document.querySelector('button')

button.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
}