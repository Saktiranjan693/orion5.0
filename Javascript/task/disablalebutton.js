const mybtn=document.getElementById("btn");

mybtn.addEventListener("click",()=>{
    alert("hiii")
    mybtn.disabled="true";
    mybtn.innerHTML="button disabled"
})