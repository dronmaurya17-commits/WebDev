/*
function getData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(455);
        }, 2000);
    })
}

console.log("Loading Modules");

console.log("Do something else");

console.log("Load Data");

let data = getData();
console.log(data);

console.log("Process Data");
*/

// Method_1:-using it as promise and creating a function
/* 
function getData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(455);
        }, 2000);
    })
}

console.log("Loading Modules");

console.log("Do something else");

console.log("Load Data");

let data = getData();
// Promise type method using the callback approach 
data.then(() => {

    console.log(data);
    console.log("Process Data");
    console.log("Task 2");

})
 */

/* 
// Method_2:- Async approach means a function that runs in background
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 2000);
    })
}

//Warpping the await function into the another main function
async function main() {
    console.log("Loading Modules");

    console.log("Do something else");

    console.log("Load Data");

    let data = await getData();

    console.log(data);
    console.log("Process Data");
    console.log("Task 2");
}

// Running the main function
main();
 */


// FETCH API
async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    console.log(data);

//       .then(response => response.json())
//       .then(json => console.log(json))
}

//Warpping the await function into the another main function
async function main() {
    console.log("Loading Modules");

    console.log("Do something else");

    console.log("Load Data");

    let data = await getData();

    console.log(data);
    console.log("Process Data");
    console.log("Task 2");
}

// Running the main function
main();
