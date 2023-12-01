// 1. Template Strings
let a = "hello";
let b = a + "world";
let c = "Hola"
// console.log(`${a} and ${c}`);

let firstName = "Jack";
let lastName = "Henry"
function FullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
// console.log(FullName(firstName, lastName));
let name = `hello ${FullName(firstName, lastName)}`;
// console.log(name);

// 2. Arrow Function.
// normal function
function area(length, breadth) {
    return length * breadth;
}
// console.log(area(12, 10));

let area2 = function (length, breadth) {
    return length * breadth;
}
// console.log(area2(10, 5));

// Arrow function
let fname = (first, last) => {
    c = first + last;
    return `Welcome ${c}`;
}
// console.log(fname("mukesh", " kumar"));

let square = side => `area of square is ${side * side}`;
// console.log(square(10));

// 3. Error Handling
// diffrent types of errors in JS-
//  1) EvalError-
//  2) RangeError-
//  3) ReferenceError- using a variable or function which is not defined.
//  4) SyntaxError- 
//  5) TypeError-
//  6) URIError- 
//  7) AggregateError-

try {
    console.log("start of try");
    middle;
    console.log("end of try");
} catch (error) {
    // console.log("error occured");
    console.log(error.name);  //it shows the type of error.
    console.log(error.message);  //it shows why error is occuring.
    console.log(error.stack);   // it is combination of both name and message.
}

setTimeout(function () {
    try {
        blabla;
    } catch (error) {
        // console.log(error);
    }
}, 1000);

// let object = {age: 10, city: "mumbai"}; 
// console.log(typeof object);
// let stringifyed = JSON.stringify(object);
// console.log(typeof stringifyed);
let Json = '{"job":"dev", "salary":"10k"}';
let parsed = JSON.parse(Json);
console.log(typeof parsed);

