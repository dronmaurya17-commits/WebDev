/*
 // Settimeout:- kitne deer ke baad karvana chahte execute
function hlo() {
    console.log("Hello");
}

setTimeout(hlo, 2000);
 */


// CallBacks:- function passed as an argument into another function


/* function sum(a,b) {
    console.log("The sum is",a+b);
}
function calculator(a,b,sumCallback) {
    sumCallback(a,b);
}
calculator(2,4,sum); */


// setTimeout with call back function
/* function getData(getID) {
    //2sec delay
    setTimeout(() => {
        console.log("data",getID);
    }, 2000);
}
getData(234); */


// Humare pass 3 4 function hai jinhe hume 2 2 sec ke delay pe execute karna hai 
// CallBack Hell:-Pyramid of DOOM
/* function getData(dataID, getNextData) {
    //2 sec
    setTimeout(() => {
        console.log("data", dataID);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
};

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
}); */




// To resolve the call back we have Promises
// PROMISE:-
/* let p1 = new Promise((resolve,reject) => {
    console.log("I am promise with resolve");
    resolve(123);
});

let p2 = new Promise((resolve,reject) => {
    console.log("I am promise with reject");
    reject("P2 is rejected");
}); */


// Promise with setTimeout
/*
 function getData(getID, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", getID);
            resolve("Success");
            if (getNextData) {
                getNextData();
            }
        }, 2000);
    })

}

let finalval  = getData(123);
 */

// .then() --> Promise fullfill hone ke baad kaam karvana ho toh
/* const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("This is Promise");
        resolve("Success!!");
    });
};

let p3 = getPromise();
p3.then(() => {
    console.log("Using .then() to do the work");
    
}) */



// .catch() --> Promise reject hone ke baad kaam karvana ho toh
/* const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("This is Promise");
        reject("Network error");
    });
};

let p3 = getPromise();
p3.catch((err) => {
    console.log("Using .catch() to do the work",err);
}) */



// Promise Chain -->  
// Method_1:-without chaining then data occur as per the time limit
/* function async() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("DATA_1");
            resolve("Success")
        }, 2000);
    })
};

function async2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("DATA_2");
            resolve("Success")
        }, 4000);
    })
};




console.log("Getting Your DATA->1");
let p5 = async();
p5.then((res) => {
    console.log(res);
});

console.log("Getting Your DATA->2");
let p6 = async2();
p5.then((res) => {
    console.log(res);
}); */


/* 
// Method_1:- If we want the data one ater another then we use the chaining

function async() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("DATA_1");
            resolve("Success")
        }, 4000);
    })
};

function async2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("DATA_2");
            resolve("Success")
        }, 4000);
    })
};


// Fetching the data inside one another
console.log("Fetching your Data_1");
let p7 = async();
p7.then((res) => {
    console.log(res);
    console.log("Fetching DATA_2 which is inside the DATA_1");
    let p8 = async2();
    p8.then((res) => {
        console.log(res);
        
    })

        
    })
 */



// Async --> will return a Promise Compulsory
/* async function Hello() {
    console.log("Hello");
}
Hello();
 */
// Await --> Pauses the async function until the promise is settel
/* function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve(250);
        }, 2000);
    })
}

// Await can only be used with async function
async function getWheather() {
    await api(); //1st call
    await api(); //2nd call 
    // pehele 1st resolve hogyi then second
}

getWheather();
 */


// Har 2 sec baad data print karvaengye but phele ek data print hoga then 2 sec time lagega then dusra data print hoga
/* function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("daata -->",dataID);
            resolve("Success");
        }, 2000);
    })
}
async function getAllData() {
    console.log("Printing Data after 2 sec time gap from previous Data");
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
    
}

getAllData();
 */


// IIFE :- Immediately invoked function Expression
