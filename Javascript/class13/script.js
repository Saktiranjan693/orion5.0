//! class in JS

class Example{
    sayHello(){
        console.log("this is a function");
        
    }
}

const e=new Example();
// e.sayHello();


//! Constructor

class vehicle{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }

    show(){
        console.log(`vehicle name is ${this.name} and color is ${this.color}
        `);        
    }
    
}

const v1=new vehicle("car","red");

const v2=new vehicle("bike","blue");
v1.show();
v2.show();

//! Inheritance

class parent{
    info(){
        console.log("this is parent class");
    }
}

class child extends parent{
    details(){
        console.log("this is a child class method");
        
    }

    //? method overriding
    info(){
        console.log("this is overridden method in child class");
    }
}


const c1 = new child();
 c1.info();
 c1.details();


