// First js creates global execution context and stores all the variables and functions in the memory
// then to run a js code there is call stack which takes the code or gec and then it runs it
// If there is setTimeout or setInterval it goes into webapi because its not part of js it is something that our browser provides
// After any webapi gets completed it goes to task queue and event loop handles the task queue
// So suppose once the call stack gets empty event loop pushes items from task queue

{
    console.log("Start");

    setTimeout(() => {
        console.log("Inside setTimeout");
    }, 0);

    setTimeout(() => {
        console.log("Inside setTimeout 2");
    }, 1000);

    console.log('End');
}
