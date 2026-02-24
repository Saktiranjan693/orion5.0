const button=document.getElementById("btn");

button.onclick=(e)=>{
    console.log("button clicked");
    button.style.backgroundColor="red";
    console.log(e);
    console.log(e.target);
    console.log(e.type);
   
}


const input=document.getElementById("input");

input.onchange=(e)=>{
    console.log(e.target);
    console.log(e.type);
    console.log(e.target.value);
    
    
    
}