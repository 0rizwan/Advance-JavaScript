// Whenever we run a js code it create a global execution context 
// There are two phases - memory phase and code (thread) phase
// All the variables first gets allocated in memory as undefined
// and function gets allocatad with its full body

// 🧠 JavaScript Hoisting Summary
// Items                Hoisted?	    Accessible Before Declaration?
// var	                ✅ Yes	        ✅ Yes (value is undefined)
// let	                ✅ Yes           ❌ No (ReferenceError)
// const	            ✅ Yes	        ❌ No (ReferenceError)
// Function Declaration	✅ Yes	        ✅ Yes (fully usable)
// Function Expression	✅ (name only)	❌ No (TypeError or ReferenceError)
// Arrow Function	    ✅ (name only)	❌ No (TypeError or ReferenceError)
// Class Declaration	✅ Yes	        ❌ No (ReferenceError)

// 1
x = 30;
console.log("Value of X is", x);
var x = 10;

// 2
console.log('global execution context started');
var globalVariable = 'I am a global variable';

function globalFn() {
    console.log('I am inside global fn');
}
console.log(globalVariable);
globalFn();

console.log('global execution context ended');
