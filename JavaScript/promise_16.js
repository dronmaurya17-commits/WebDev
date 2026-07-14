// Using alert snippet 
// alert('Hello');

/* 
// Promise:-means promise of code execution
// using .then or .catch to resovle or reject 
// Consumers:- .then and .catch are called consumers

// Step_1:-resolve promise
let prom1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("This is Promise");
        resolve("Hitachi");
    }, 2000);
})

// Step_2:-after solving promise doing the work for output
prom1.then((a) => {
    console.log(a);
})

// CONCLUSION:-hum network banaengye prom1 ki help se aur uss network pe request karengye .then ki help se

 */

/* 
// Method_1:-without Catching the error
let prom2 = new Promise((resolve, reject) => {
    let random = Math.random();
    if (random < 0.5) {
        reject("No random number was supporting to you");
    }
    else {
        setInterval(() => {
            console.log("Random Numbers");
            resolve("Maths value");
        }, 1000);
    }

})

prom2.then((a) => {
    console.log(a);
}) 
*/

// Method_2:-with Catching the error
let prom3 = new Promise((resolve, reject) => {
    let random = Math.random();
    if (random < 0.5) {
        reject("No random number was supporting to you");
    }
    else {
        setInterval(() => {
            console.log("Random Numbers");
            resolve("Maths value");
        }, 1000);
    }

})

prom3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})

// We can use multiple handlers in .then()