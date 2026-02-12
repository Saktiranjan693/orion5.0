//while loop


    //  initialization
    // while condition {
    //     instruction
    //     updation
    // }

    let i=1
     while(i<12){
        console.log(i);
        i++
        
     }

     //left


    // for-of loop
      let arr=[10,20,20,12,2,0,220,35,5]
      for(let i=0; i<=arr.length;i++){
         console.log(arr[i]);
         
      }

      // for(e of arr/str){
      //    instruction
      // }

      for(items of arr){
         console.log(items);
         
      }

      let str="loremjjfldfjghsll"

      for (s of str){
         console.log(s);
         
      }
  


   //  for-In loop

      //  for(key in obj){
      //    instrucion
      //  }

      let obj={
         name:"sakti",
         age:23,
         city:"jajpur"
      }

      for(key in obj){
         console.log(key);
         console.log(obj[key]);
         
         
      }



   let a=[2,5,4,5,4,5]
    for(key in a){
      console.log(key);
      
    }
    for (key of a){
      console.log(key);
      
    }



    // function

