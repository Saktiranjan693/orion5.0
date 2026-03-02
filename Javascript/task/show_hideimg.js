const btn=document.getElementById("mybtn");
const img=document.getElementById("img1");

btn.addEventListener("click",()=>{
    if(img.style.display==="block"){
        img.style.display="none";
    }   else{  
        img.style.display="block";
    }});