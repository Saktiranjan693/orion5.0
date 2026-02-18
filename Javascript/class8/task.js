//Q1
  let name="sakti";
  console.log(name);

  let number=10;
  console.log(number);
  
    let isTrue=true;
    console.log(isTrue);

    let u
    console.log(u);

    let n=null;
    console.log(n);

    //?Q2

    let num=Number(prompt("enter a number"));
    if(num%2===0){
        console.log("even");
    }else{
        console.log("odd");
    }

    //Q3.

    let c=12,d=14;
    if(c>d){
        console.log("c is greater than d");
    }else if(c<d){
        console.log("d is greater than c");
    }else if(c===d){
        console.log("c and d are equal");
    }

    //Q4.

    let age=21,nam="Bhupati";
    let concat = nam + "is" +age+"years old";
    console.log(concat);

    //Q5.

    for(let i=1;i<=10;i++){
        console.log(i);
    }

    let j=1;
    while(j<=10){
        console.log(j);
        j++;
    }

    //Q6.
    let k=5;
    do{
        console.log(k);
        k--;
        
    }while(k>=1)

        //Q7.

        let arr=["apple","banana","orange","mango","grapes"]
        for(i of arr){
            console.log(i);
            
        }

        //Q8.
         
        let arr1=[5,6,5,4,7,8,4,6,7,8];

        console.log(arr1);
        

        arr1.push(14);
        console.log(arr1);

        arr1.unshift(55);
        console.log(arr1);

        //Q9.

        let arr2=[50,60,70,80,90,100,100,110,120,130];
        console.log(arr2);
        
        arr2.splice(3,0,7655,85555);
        console.log(arr2);

        arr2.splice(2,9,"sakti","bhupati");
        console.log(arr2);
    

