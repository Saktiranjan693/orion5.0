// conditional statement
   // simple if statement
     
//    if condition {
//             statement
//    } 
  let num=10
  if (num>0)
  {
    console.log("This is simple if");
    
  }

          // if-else statement

//     if condition{
//               statement;
//     }
//    else{
//     statement;
//    }

    let x=20
    if (x>0){
        console.log("number is positive");
        
    }else{
        console.log("number is negative");
        
    }
   

               /// else-if 
  
        // if condition {
        //     statement;
        // }else if condition{
        //      statement
        // }else{
        //     statement
        // }

        let p=0

        if(p>0){
            console.log(p +" is positive");
            
        }else if(p<0){
            console.log(p + "is negative");
            
        }else{
            console.log(p+ "is zero");
            
        }


        // ex
         
        // let age= Number(prompt("enter your age"))

        // if (age>0  && age<18){
        //     console.log("you'r a kid");
            
        // }else if(age>18 && age<55){
        //     console.log("you'r an adult");
            
        // }else{
        //     console.log("invalid age");
            
        // }

           // Switch case

            // initilization

            // switch (value){
            //     case 1:
            //         stament
            //         break
            //     case 2:
            //         stament
            //         break
            //     case 3:
            //         stament
            //         break
            //     case 4:
            //         stament
            //         break
            // }

            let y=2;
            switch(x){
                case 1:
                    console.log("case 1");
                    break;
                case 2:
                    console.log("case 2");
                    break;
                case 3:
                    console.log("case 2");
                    break;
                default:
                    console.log("Default case");
                    
            }