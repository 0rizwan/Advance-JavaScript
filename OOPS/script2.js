// Inheritance
class Animal{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    eat(){
        console.log(this.name + " is Eating")
    }
    shout(){
        console.log(this.name + " is shouting")
    }
}

class Monkey extends Animal{
    jump(){
        console.log(this.name + " is jumping on tree")
    }
}

let dog = new Animal('doggie', 'black')
let chimp = new Monkey('chimpu', 'brown')
dog.shout()
chimp.jump()

// Method Overriding
class Employee {
    constructor(name){
        this.name = name;
        console.log(`${name} - Employee's constructor`)
    }
    login(){
        console.log(`${this.name} has logged in`)
    }
    logout(){
        console.log(`${this.name} has logged out`)
    }
    reqLeave(leaves){
        console.log(`${this.name} has requested ${leaves} leaves`)
    }
}

class Programmer extends Employee{
    // If there is no constructor in child class, This constructor is automatically gets created by javascript engine
    // constructor(...args){ 
    //     super(...args)
    // }

    constructor(name){
        super(name)
        this.name = name
        console.log(`${name} - Programmers Constructor`)
    }
    reqCoffee(coffee){
        console.log(`${this.name} has requested ${coffee} coffee`)
    }
    reqLeave(leaves){
        super.reqLeave(5)
        console.log("One extra is granted")
        // console.log(`${this.name} has requested ${leaves + 1} leaves (one extra)`)
    }
}

let p = new Programmer('Bob')
p.login()
p.reqCoffee(1)
p.reqLeave(4)
p.logout()

let e = new Employee('david');
e.login()
e.reqLeave(2)
e.logout()