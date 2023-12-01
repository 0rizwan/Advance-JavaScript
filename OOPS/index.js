// YAHOO BABA
// creating a class 
class OOPS{
    // method
    msg(){
        console.log("teri maa ki chut")
    }
    // method
    greet(){
        console.log("Hey bitch");
    }
}
//Creating a object and calling a method
let a = new OOPS();
// a.msg();
// a.greet();

// using constructor
class player{
    constructor(){
        let name;
        console.log("Constructor Function")
    }
    stats(){
        console.log("name of a player is " + this.name)
    }
}

let b = new player();
b.name = "Zidane";
// b.stats();

// using parameter
class Student{
    constructor(name, age){
        this.studentName = name;
        this.studentAge = age;
        console.log("Constructor Function")
    }
    details(){
        console.log(`name of the student is ${this.studentName} and age is ${this.studentAge}`)
    }
}

let c = new Student("JACK", 24);
// c.details();

// CODE WITH HARRY
// Prototypes

let x = {
    name: "Victor",
    age: 18
}

let y = {
    run: ()=>{
        console.log("Run")
    }
}
x.__proto__ = y
// x.run()

// console.log(x)

// Classes and Objects
class RailwayForm{

    constructor(givenname, trainno, address){
        console.log('Consructor called ' + givenname + " " + trainno)
        this.name = givenname;
        this.trainno = trainno;
        this.address = address;
    }
    submit(){
        console.log(this.name + ": Your form is submitted with train No. " + this.trainno)
    }
    cancel(){
        console.log(this.name + ": Your form is cancelled with train No. " + this.trainno)
    }
    
}

// Creating and filling a form for Harry 
let HarryForm = new RailwayForm('Harry', 1111);

// Creating and filling form for John 
let JohnForm1 = new RailwayForm('John', 2222);
let JohnForm2 = new RailwayForm('John', 8888);

HarryForm.submit();
JohnForm1.submit();
JohnForm2.submit();
JohnForm1.cancel();