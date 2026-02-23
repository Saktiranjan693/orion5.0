

const button=document.getElementById("btn");
const box1=document.getElementById('box');


button.onclick=()=>{

    const h1=document.createElement("h1");
    h1.textContent="new element is created";
    // box.append(h1);
    // box.before(h1);
    box1.after(h1);
    box1.style.backgroundColor="red";
}