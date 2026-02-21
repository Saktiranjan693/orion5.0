// String and It's inbuilt Methods

let str='lorem ipsum dolor sit amet  ipsum consectetur adipisicing ipsum elit. Voluptas, voluptate.lorem ipsum dolor sit amet  ipsum consectetur adipisicing ipsum elit. Voluptas, voluptate.';

console.log(str);
console.log(str[2]);


let name='sakti'
let age=21
let job='software deveplore'


//? Template string

let example ="hello iam sakti"

//? Template Literal
// ${example}

//? Template Interpolation

console.log(`my name id ${name}, age is ${age} and my job is${job}`);



//?  Methods 

       //? charAt()
       console.log(str.charAt(2));


       //? indexOf()

       console.log(str.indexOf('ipsum'));

       //? lastIndexOf()

       console.log(str.lastIndexOf('ipsum'));

       //? toUppercase
       console.log(str.toUpperCase());

       //? toLowercase()
       console.log(str.toLowerCase());

       //?slice() :- it is used to extract a part of a string and return it as a new string, without modifying the original string.

       let slicedStr = str.slice(1, 9);
       console.log(slicedStr);

       // split() :- it is used to split a string into an array of substrings based on a specified separator.

       let splitedstr=str.split(' ');
       console.log(splitedstr);
       let splitedstr2=str.split('ipsum');
       console.log(splitedstr2);

       //? length() :- it is used to get the length of a string, which is the number of characters it contains.

       console.log(str.length);

       //? replace() :- it is used to replace a specified value with another value in a string.

       let newsrt=str.replace('lorem','Hello');
       console.log(newsrt);

       //?replaceAll() :- it is used to replace all occurrences of a specified value with another value in a string.

       let newsrt2=str.replaceAll('ipsum','Hello');
       console.log(newsrt2);

       //? includes() :- it is used to check if a string contains a specified value, and returns true or false accordingly.
       console.log(newsrt2.includes('Hello'));
       console.log(newsrt2.includes('Hello'));

       
       
       
       
       
       

 

