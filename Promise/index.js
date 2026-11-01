let age = 25;
let promise = new Promise((resolve, reject) => {
    if (age >= 21) {
        resolve("True");
    } else {
        reject("False");
    }
});
// console.log(promise)

function prom(age) {
    return new Promise((resolve, reject) => {
        console.log("Fetching data, please wait...")
        setTimeout(() => {
            if (age > 18) {
                resolve("Succesfull");
            } else {
                reject("Failed");
            }
        }, 3000)
    });
}

let fullfilled = (result) => {
    console.log(result)
};

let rejected = (error) => {
    console.log(error)
}
// console.log(prom(10));

// prom(0).then(fullfilled).catch(rejected);
// prom(10).catch(rejected);


Promise.resolve(10)
    .then((responseOne) => responseOne + 1)
    .then((response) => {
        throw new Error(`Some Error Show`)
    })
    .catch((error) => {
        // console.log(error)
        return 100;
    })
// .then((number) => console.log(number))

function api() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("False");
            // resolve("True");
            // reject(new Error("Error occured"));
        }, 2000)
    })
}

// api()
// .then((res) => console.log("res"))
// .catch((rej) => console.log(rej))
// .finally((res) => console.log(res))
// .then((res) => console.log("hello"))

// Promises APIs - 

// 1. Promise.all()
// Definition: Executes multiple promises concurrently and waits for all of them to fulfill.

// Scenario                 What does it return?
// All promises succeed     Array of all results    
// Any one promise fails    First rejection reason
// All promises fail        First rejection reason

// Example:
Promise.all([
    Promise.resolve("A"),
    Promise.resolve("B"),
    Promise.resolve("C")
])
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Output: ["A", "B", "C"]

// Failure example:
Promise.all([
    Promise.resolve("A"),
    Promise.reject("Error B"),
    Promise.reject("Error C")
])
    .then(res => console.log(res))
    .catch(err => console.log(err));

// Output: "Error B"

// Remember:
// All success → Array of results.
// Any failure → Rejects with the first rejection reason.
// Does not wait for other promises after rejection to produce its result.
// Does not cancel the remaining promises.

// 2. Promise.allSettled()
// Definition: Waits for all promises to settle, whether fulfilled or rejected.

// Scenario                     What does it return?
// All promises succeed         Array of fulfilled objects
// Any one promise fails        Array containing fulfilled and rejected objects
// All promises fail            Array of rejected objects

// Example:
Promise.allSettled([
    Promise.resolve("A"),
    Promise.reject("Error B"),
    Promise.resolve("C")
])
    .then(res => console.log(res));

//Output:
[
    { status: "fulfilled", value: "A" },
    { status: "rejected", reason: "Error B" },
    { status: "fulfilled", value: "C" }
]

// Remember:
// Always fulfills(assuming valid iterable input).
// Never rejects because an input promise rejects.
// Waits for every promise to settle.
// Returns status + value / reason.

// 3. Promise.race()
// Definition: Returns the result of the first promise that settles, whether fulfilled or rejected.

// Scenario                      What does it return?
// First promise succeeds        Its fulfilled value
// First promise fails           Its rejection reason
// All succeed                   Value of the fastest promise
// All fail                      Reason of the fastest rejection
// Mix of success/failure      Result of whichever settles first

// Example:
Promise.race([
    Promise.resolve("A"),
    Promise.reject("Error B"),
    Promise.resolve("C")
])
    .then(res => console.log(res))
    .catch(err => console.log(err));
// Output: Depends on which promise settles first.In this example, the already - settled promises are processed in input order, so the output is "A".

// Remember:
// First settled wins.
// Settled = Fulfilled OR Rejected.
// Does not cancel other promises.

// 4. Promise.any()
// Definition: Returns the first successfully fulfilled promise.It ignores rejected promises until either one fulfills or all reject.

// Scenario                     What does it return?
// All promises succeed         First fulfilled value
// Any one succeeds             First fulfilled value
// All promises fail            AggregateError

// Example:
Promise.any([
    Promise.reject("Error A"),
    Promise.resolve("B"),
    Promise.resolve("C")
])
    .then(res => console.log(res))
    .catch(err => console.log(err));
// Output: "B"

// If all fail:
Promise.any([
    Promise.reject("Error A"),
    Promise.reject("Error B")
])
    .catch(err => console.log(err));

// AggregateError
// Remember:

// First success wins.
// Ignores failures if another promise succeeds.
// All failures → AggregateError.
// AggregateError.errors contains the rejection reasons.

// 5. Promise.resolve()
// Definition: Creates a fulfilled Promise with the given value(or adopts the state of a supplied Promise / thenable).

// Scenario            What does it return?
// Normal value        Fulfilled Promise
// Existing fulfilled Promise      Adopts that Promise
// Existing rejected Promise   Adopts its rejection
// Thenable        Adopts its eventual state

Promise.resolve("Success")
    .then(res => console.log(res));

// Output: "Success"
// Remember: Promise.resolve() → Fulfilled Promise(unless it adopts a rejected Promise or rejecting thenable).

// 6. Promise.reject()
// Definition: Creates a rejected Promise with the given reason.

// Scenario         What does it return?
// Any value        Rejected Promise
// Error object     Rejected Promise with that error

Promise.reject("Something went wrong")
    .catch(err => console.log(err));

// Output: "Something went wrong"
// Remember: Promise.reject() → Always returns a rejected Promise.

const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("P1 fullfiled");
    }, 1000)
})

const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("P2 fullfiled");
    }, 3000)
})

const p3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("P3 fullfiled");
    }, 4000)
})


// all - if the one fails all fails  and if all the success there is succes
Promise.all([p1, p2, p3]).then(function (result) {
    // console.log(result);
}).catch(function (err) {
    console.log(err);
})

// all settled -  same in case of success as promise.all but if one get fail it will wait for other.
Promise.allSettled([p1, p2, p3]).then(function (result) {
    // console.log(result);
}).catch(function (err) {
    console.log(err);
})

// race- the first settled promise will return whether it is success or fail
Promise.race([p1, p2, p3]).then(function (result) {
    // console.log(result);
}).catch(function (err) {
    console.log(err);
})

// any- it is basically a success seeking api it will wait for the first settled success it will keep checking until it get success and all fail it will return an aggregated error
Promise.any([p1, p2, p3]).then(function (result) {
    // console.log(result);
}).catch(function (err) {
    console.log(err); // aggregate error
    console.log(err.errors); // array of erros
})

const p = new Promise((resolve, reject) => {
    resolve("P resolved!");
});

async function asyncFn() {
    return p;
}

// console.log(asyncFn(), "async Fn");

// async and await -
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1 resolved");
    }, 20000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise2 resolved");
    }, 10000);
});

async function handlePromise() {
    console.log("Start");

    const val1 = await promise1;
    console.log(val1, 'val1');

    const val2 = await promise2;
    console.log(val2, 'val2');

    console.log("End");
}

handlePromise();

// Doubt Question -----------------------
// Now my query is  How it will print/console.log the "Namaste Javascript 2" and
//  also the val value i.e. "Promise Resolved Value!!" ?

// Because as I follow you in the Video, at that time it will not fetch the     const val2 = await p2 Line.
// When it fetch "const val2 = await p2 ;"  Logically It will then Remove the handlePromise Function remove from call stack Again.
// So before it go to "const val2 = await p2 ;" Line Interpreter do not know that there has another AWAIT Function there. (i.e. const val2 = await p2;)
// So how it prints "Namaste Javascript 2" and "Promise Resolved Value!!" for second time  after 10 seconds?
// Please enlighten me for this condition.

// Explanation of the Doubt ---------------
// your logical thinking is correct for async and await but you missed the point for promises. In the code we created 2 promises. So when the promises are created and they start executing as soon as they are defined, not when they are awaited. let me explain little more.

// 1. Promise createion
// When the line const p1 = new Promise(...) is executed, the promise p1 is immediately created and starts executing.
// Similarly, the line const p2 = new Promise(...) is executed right after p1 is created. Thus, both promises are created and start their timers right away.
// In this code, both p1 and p2 are created before the handlePromise function is called.

// 2. Promises Running in the Background
// When p1 is created, the setTimeout within the promise starts its 10-second countdown.
// When p2 is created, its setTimeout starts its 5-second countdown
// These timers start ticking right away and are running in the background, independently of the handlePromise function.

// So now see how the await works in our handlePromise()

// 1. When handlePromise is called, the console.log("Hello World !!") executes first.
// 2. When the interpreter reaches const val = await p1;, it pauses the handlePromise function and waits for p1 to resolve.
// 3. While the handlePromise function is paused, p1 and p2 continue running in the background since their timers are already counting down.
// 4. Since both promises were created before the handlePromise function started, their countdowns run simultaneously.
// 5. p2 will resolve after 5 seconds, but since the function is paused at await p1, it does not handle p2 until after p1 has resolved.
// 6. After 10 seconds, p1 resolves, and the handlePromise function resumes execution.
// 7. When handlePromise resumes, it assigns the resolved value of p1 to val and executes the console.log statements.
// 8. Then, it encounters the line const val2 = await p2;.
// 9. Since p2 already resolved after 5 seconds (while the function was waiting for p1), the await p2 completes almost immediately, and the function continues to execute the remaining console.log statements.