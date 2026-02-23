//! Event

function sayhello(){
    console.log("button is clicked");
    console.log(10+30);
}

const button2=document.getElementById("btn2");

button2.ondblclick=()=>{
    console.log("this is double click button");
    
}

const heading=document.getElementById("heading");


const button=document.getElementById("btn");

button.onclick=()=>{
    console.log("button is clicked");
    heading.style.color="red";
    
}