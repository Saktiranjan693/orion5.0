const mydiv=document.getElementById("div")


mydiv.addEventListener("mouseenter",()=>{
    mydiv.style.backgroundColor="red";
})

mydiv.addEventListener("mouseleave",()=>{
    mydiv.style.backgroundColor="green"
})