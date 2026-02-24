const button=document.getElementById("btn");

// button.onclick=(e)=>{
//     console.log("button clicked");
//     button.style.backgroundColor="red";
//     console.log(e);
//     console.log(e.target);
//     console.log(e.type);
   
// }


// const input=document.getElementById("input");

// input.onchange=(e)=>{
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.target.value);
    
// }


input.addEventListener("input",(e)=>{
    console.log(e.target.value);
})


function handleClick(){
    console.log("button clicked");
    
}
button.addEventListener("click",handleClick);

setTimeout(()=>{
    button.removeEventListener("click",handleClick);
    console.log("button removed");
    
},5000)



//! prototype

const person1={
    name:"john",
    age:30,
    city:"new york"

}
 const person2={

    cours:"MERN" , skils:["Html","Css","JavaScript"], __proto__:person1
}

person1.newkey="new value";
console.log(person1.newkey);

console.log(person1.name);
console.log(person2.name);


const person3=Object.create(person1);
console.log(person3.name);
person3.isworking=true;
console.log(person3.isworking);
console.log(person2);
console.log(person3);




