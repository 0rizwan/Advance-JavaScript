// First js creates global execution context and stores all the variables and functions in the memory
// then to run a js code there is call stack which takes the code or gec and then it runs it
// If there is setTimeout or setInterval it goes into webapi because its not part of js it is something that our browser provides
// After any webapi gets completed it goes to task queue and event loop handles the task queue
// So suppose once the call stack gets empty event loop pushes items from task queue

// https://www.jsv9000.app/ - We can use this site to visualize the js under the hood.

// Call stack - This is where js code gets executed.
// Event loop - It manages the both queues microtask and task queue
// Microtask queue - It contains Promises, It has more priority than task queue thats why it is executed first
// Task queue - setTimeout, setInterval, DOM event listeners, setImmediate

function abc() {
    console.log("Start"); // 1

    setTimeout(() => {
        console.log("Inside setTimeout"); // 3
    }, 0);

    setTimeout(() => {
        console.log("Inside setTimeout 2"); // 4
    }, 1000);

    console.log('End'); // 2
}
// abc();

function xyz() {
    console.log("Start"); // 1

    setTimeout(() => { 
        console.log("Inside setTimeout"); // 4
    }, 0);

    Promise.resolve().then(() => { 
        console.log("Inside promise") // 3
    })

    console.log('End'); // 2
}

xyz();
