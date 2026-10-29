let age = 25;
let promise = new Promise((resolve, reject) => {
    if (age >= 21) {
        resolve("True");
    } else {
        reject("False");
    }
});
console.log(promise)

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

prom(0).then(fullfilled).catch(rejected);
// prom(10).catch(rejected);


Promise.resolve(10)
    .then((responseOne) => responseOne + 1)
    .then((response) => {
        throw new Error(`Some Error Show`)
    })
    .catch((error) => {
        console.log(error)
        return re;
    })
    .then((number) => console.log(number))

function api() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // reject("False");
            // resolve("True");
            reject(new Error("Error occured"));
        }, 2000)
    })
}

api()
    .then((res) => console.log("res"))
    .catch((rej) => console.log(rej.message))
    .finally((res) => console.log(res))
    .then((res) => console.log("hello"))

// Promises APIs - 
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
    console.log(result);
}).catch(function (err) {
    console.log(err);
})

// all settled -  same in case of success as promise all but if one get fail it will wait for other.
Promise.allSettled([p1, p2, p3]).then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.log(err);
})

// race- the first settled promise will return whether it is success or fail
Promise.race([p1, p2, p3]).then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.log(err);
})

// any- it is basically a success seeking api it will wait for the first settled success it will keep checking until it get success  and all fail it will return an aggregated error
Promise.any([p1, p2, p3]).then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.log(err); // aggregate error
    console.log(err.errors); // array of erros
})