//------- this in Global space -------
// In the global execution context, this refers to the global object (window in browsers).
console.log(this); // Output: window (in browser)

// ------ this inside function ------
// When a normal function is called alone, this refers to the global object (window in browsers). 
function show() {
    console.log(this);
}

show(); // Output: window (in non-strict mode)

// ------- this in stric mode - (this substitution) --------    
// In strict mode, this inside a standalone function is undefined; JavaScript does not substitute it with the global object.
"use strict";
function show() {
    console.log(this);
}

show(); // Output: undefined

// ------- this value depends on how this is called (window) --------
function show() {
    console.log(this);
}

show();

window.show = show;

window.show(); // window

// -------- this inside object's method ---------
// When a function is called as an object's method, this refers to the object before the dot.
const obj1 = {
    name: "John",

    x: function () {
        console.log(this.name);
    }
};

obj1.x(); // Output: John

// call, apply and bind methods (sharing methods)

// --------- this inside arrow function --------
// Arrow functions do not have their own this; they inherit this from their surrounding lexical scope.
const obj2 = {
    name: "John",

    x: () => {
        console.log(this);
    }
};

obj2.x(); // Output: window (in a browser's classic script)

// ---------- this inside nested arrow function ------------
// A nested arrow function inherits this from its nearest surrounding non-arrow function.
const obj3 = {
    name: "John",

    x: function () {
        const y = () => {
            console.log(this.name);
        };

        y();
    }
};

obj3.x(); // Output: John

// ------- this inside DOM -------
// In a normal DOM event handler, this refers to the DOM element on which the event handler is registered.
document.querySelector("button").addEventListener("click", function () {
    console.log(this); // Output: The button element
});
