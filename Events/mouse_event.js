let div=document.querySelector('div')

div.onmouseover=()=>{
    console.log("You are inside div");
}

let btn1=document.querySelector('.btn1')

btn1.onclick=()=>{
    console.log("Button Was clicked");
}

let btn2=document.querySelector('.btn2')

btn2.ondblclick=()=>{
    console.log("Button Was clicked 2 Times");
}