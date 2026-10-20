
function outer() {
    let a = 10;
    return function inner() {
        return function inner2() {
            console.log(a);
        }
    }
}
var res = outer();
console.log(res);

let res2 = res();
console.log(res2);
res2()

// Closures in JavaScript
// 1. What is a Closure ?
// --- A closure is a function bundled together with its lexical environment.
// --- When a function is returned from another function, it retains access to the variables from its outer scope, even after the outer function has finished executing.
// --- This bundle of:
// --- Function Code
// --- Its Lexical Scope is what we call a Closure.

// Example::
function x() {
    var a = 7;

    function y() {
        console.log(a);
        // 'y' forms a closure with the lexical environment of 'x'
    }

    return y;
}

var z = x();
console.log(z); // Prints the function definition of y
z(); // 7 printed

// Step - by - Step Explanation
// i) x() is executed → creates a variable a = 7 and a function y().
// ii) x() returns the function y.
// iii) The returned function y is stored in variable z.
// iv) Even though x()'s execution context is gone, y still remembers the reference to variable a because of closure.
// v) Calling z() prints 7.

// 2. Key Points About Closures
// --- When a function is returned, it remembers its lexical environment.
// --- A function doesn’t just return itself; it returns a closure (Function + Lexical Scope).
// --- Variables inside the closure are referenced, not copied.
// --- If the variable’s value changes later, the closure sees the updated value.
// --- In nested function chains, the innermost function forms closures with all its outer functions.

// 3. Functions as First - Class Citizens in JavaScript
//  JavaScript treats functions as First - Class Citizens, meaning:
// --- Functions can be assigned to variables.
// --- Functions can be passed as arguments to other functions.
// --- Functions can be returned from other functions.

// Example::
function greet(name) {
    return `Hello, ${name}`;
}

let sayHello = greet; // Assigning a function to a variable
console.log(sayHello("John")); // Hello, John

function execute(fn) {
    console.log(fn("World"));
}

execute(greet); // Hello, World


// 4. Application of Closures

// i) Module Design Pattern
// --- A closure can encapsulate variables and functions, exposing only the necessary parts

// Example::
function createCounter() {
    let count = 0; // private variable

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        }
    };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
//  ...)count remains private and accessible only through the returned methods.

// ii) Function Currying
// Transforming a function with multiple arguments into a sequence of functions, each with a single argument.e.g,
function multiply(a) {
    return function (b) {
        return a * b;
    };
}

const double = multiply(2);
console.log(double(5)); // 10

const triple = multiply(3);
console.log(triple(5)); // 15

//  Closures remember the value of a even after the outer function has executed.

// 3. Function That Runs Only Once
// Using closures to create a function that can be executed only once.e.g,
function runOnce(fn) {
    let executed = false;
    return function () {
        if (!executed) {
            executed = true;
            fn();
        }
    };
}

const init = runOnce(() => console.log("Initialized!"));
init(); // "Initialized!"
init(); // (No output)

// 4. Memoization
// Storing results of expensive function calls for faster future calls.e.g,
function memoize(fn) {
    const cache = {};
    return function (n) {
        if (cache[n] !== undefined) {
            console.log("Fetching from cache:", n);
            return cache[n];
        }
        console.log("Calculating result:", n);
        const result = fn(n);
        cache[n] = result;
        return result;
    };
}

const factorial = memoize(function f(n) {
    return n <= 1 ? 1 : n * f(n - 1);
});

console.log(factorial(5)); // Calculating...
console.log(factorial(5)); // Fetching from cache

// ✅ The cache persists across calls via closure.

// 5. Maintaining State in Async World
// Closures preserve variables in asynchronous operations.e.g,
function fetchData(url) {
    let loading = true;
    console.log("Loading started...");

    setTimeout(() => {
        loading = false;
        console.log(`Data fetched from ${url}`);
    }, 2000);

    return function checkLoading() {
        console.log("Loading state:", loading);
    };
}

const result = fetchData("https://api.example.com");
result(); // Loading state: true
setTimeout(result, 2500); // Loading state: false
//  loading state is remembered across async callbacks.

// 6. Using Closures with setTimeout
// Avoiding var pitfalls and preserving variables in timed callbacks.e.g,
function printNumbers() {
    for (let i = 1; i <= 3; i++) {
        setTimeout(() => console.log(i), i * 1000);
    }
}
printNumbers();
// 1 (after 1s), 2 (after 2s), 3 (after 3s)
//Each callback remembers its own copy of i because of block scope and closure.

// 7. Iterators
// Creating custom iterable logic using closures.
function createIterator(array) {
    let index = 0;
    return function () {
        return index < array.length ? array[index++] : null;
    };
}

const next = createIterator(["A", "B", "C"]);
console.log(next()); // A
console.log(next()); // B
console.log(next()); // C
console.log(next()); // null
// ✅ index persists between calls without polluting global scope.
