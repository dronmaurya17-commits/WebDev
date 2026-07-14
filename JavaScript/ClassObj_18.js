// PROTOTYPE:-this is an object inside the another object
// if prototype and object have same methods then object methods will be used only

/* 
// Creating an Object in js
const student = {
    Name:"Dron",
    Marks : 97.8,
    printMarks : function () {
        console.log("marks",this.Marks);
    }
}
// To acess the function inside the printMarks
// student.printMarks();
 */

/* 
// Creating Objects and our own Prototype
const employee = {
    // Method_1:- creating the function in object
    calcTax1(){
        console.log("Tax rate is 10%");
    },

    // // Method_2:-  creating function with different method 
    // calcTax2 : function(){
    //     console.log("Tax rate is 10%");
    // }, 
};

const Karan = {
    salary : 5000,
};

// Creating the prototype
Karan.__proto__ = employee;
Karan.calcTax1();
 */

/* 
class Toyota{
    constructor(){
        console.log("This is COnstructor");  
    }

    start(){
        console.log("Start..");
    }

    stop(){
        console.log("stop..");
    }

    setBrand(brand){
        this.BrandName = brand;
    }
}

let fortuner = new Toyota();
fortuner.start();
fortuner.setBrand("Fortuner");
 */
/* 
// INHERITANCE:-
class parent{
    greet(){
        console.log("Hello");
    }
}
class child extends parent{

}

let cld  = new child();
cld.greet();
// Method Overriding:-child and parent both have the same method,then child method will use
 */

// Super Keyword
class Person {
    constructor(name) {
        this.species = "Homosapiens";
        this.name = name;
    }
    eat181() {
        console.log(`${this.name} is eating`);

    }
}

class Engineer extends Person {
    constructor(name) {
        super(name);
    }
    Worker() {
        super.eat181();
        console.log(`${this.name} is working`);

    }
}
let p1 = new Person("Rohit");
let eng = new Engineer("Rahul");
eng.Worker();