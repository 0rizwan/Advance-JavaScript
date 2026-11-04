// call(), apply(), bind() - this are JavaScript methods used to control the value of this inside a function and also used for method sharings.

// call() - call method is used to call the function with the given this value and argument can be passed individually.
let person1 = {
    firstname: "Peter",
    lastname: "Parker",
    greet: function () {
        console.log(this.firstname + " " + this.lastname);
    }
}
person1.greet();

let person2 = {
    firstname: "Tony",
    lastname: "Stark",
}

person1.greet.call(person2);

// 1. ********************call()********************
// Calls a function immediately.
// Passes arguments individually.
// Sets the value of this.
{
    function greet(city) {
        console.log(`Hello ${this.name} from ${city}`);
    }
    const user = { name: "John" };

    greet.call(user, "Mumbai");
}

// 2. ********************apply()********************
// Calls a function immediately.
// Passes arguments as an array.
// Sets the value of this.
{
    function greet(city, age) {
        console.log(this.name, city, age);
    }
    const user = { name: "Jude" };

    greet.apply(user, ["Madrid", 22]);
}

// 3. ********************bind()*************************
// Does NOT call the function immediately.
// Returns a new function.
// Sets the value of this.
// Arguments can be passed later.
{
    function greet(city) {
        console.log(this.name, city);
    }

    const user = { name: "Pedri" };

    // const newFunc = greet.bind(user, "Barcelona");
    // newFunc();

    const newFunc = greet.bind(user);
    newFunc("Barca");
}

// note - Once a function has been bound using bind(), its this cannot normally be changed by another bind(), call(), or apply().
{
    const user = { name: "Alex" };
    function showName() {
        return this.name;
    }

    const fn = showName.bind(user);
    const another = fn.bind({ name: "Sam" });

    console.log(another());
}

function add(a, b, c) {
    return a + b + c;
}
const fn = add.bind(null, 10, 20);

console.log(fn(30)); // 60 
console.log(fn(40)); // 70

// bind(null, 10, 20) presets the first two arguments.
// a = 10; b = 20
// When you call fn(30), c = 30.

// This technique is called partial application.

// ********************call, apply, bind with arrow function -******************** 
const obj = {
    value: 100,
    method() {
        const inner = () => {
            console.log(this.value);
        };

        inner.call({ value: 200 });
    }
};
obj.method(); // 100
// Explanation:
// Arrow functions don't have their own this.
// They inherit this from their surrounding lexical scope.

// Here:
// obj.method() makes this refer to obj.
// inner inherits that this.
// inner.call() cannot override the arrow function's this.

// Remember: call(), apply(), and bind() cannot change an arrow function's this.