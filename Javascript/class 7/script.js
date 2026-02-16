// const number = Number(prompt("Enter a number between 1 to 100 to check if it is a prime number"));
//    for(let i=1 ; i<=100; i++){
// if((i%1==0 && i/i==1) && (i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0 ) ){
//     console.log(i + " is a not a prime number");
// }
// else {
//     console.log(i + " is  a prime number");
// }
//    }


// const num= Number(prompt("Enter a number between 1 to 100 to check if it is even or odd"));

// if(num%2==0){
//     console.log("The number is even");
// }
// else{
//     console.log("The number is odd");
// }


let arr = [1,2,3,4,5,6,7,8,9,10];


     // Map()

//  let a=arr.forEach((item, index) => {
//     console.log(' value of index is ' + index + " and the item is " + item);
//  })
//  console.log(a);
 
// let newarr=arr.map((mark,index)=>{
//     return mark*10;
// })
// console.log(newarr);

// Filter()

// let filteredArr = arr.filter((item) => {
//     return item>6;
// })
// console.log(filteredArr);

// reduce()
//   let total =arr.reduce((value,sum)=>sum+=value,0);
//   console.log(total);
//   console.log(typeof sum);

//sort()

   let a = [1, 5,54,583,54,455,887,9852,5,6,542, 4];
      
       a.sort((a,b)=> b-a)
         console.log(a);