
// Designing a faulty calculator that does wrong calculations 10% of the time 

/*
let ran71 = Math.random(); 
//Addition
function sum71(a,b) {
    if (ran71>0.1) {
        return a+b;
    } else {
        return a-b;
    }
}
//Substraction
function diff71(a,b) {
    if (ran71>0.1) {
        return a-b;
    } else {
        return a+b;
    }
}
//Multiply
function mul71(a,b) {
    if (ran71>0.1) {
        return a*b;
    } else {
        return a/b;
    }
}
//divide
function div71(a,b) {
    if (ran71>0.1) {
        return a/b;
    } else {
        return a*b;
    }
}


console.log(sum71(5,4));
console.log(diff71(5,4));
console.log(mul71(5,4));
console.log(div71(5,4));
*/


let random71 = Math.random();
let a = prompt("Enter the first number");
let c = prompt("Enter operator");
let b = prompt("Enter the second number");

let obj71 = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

// Using Eval for the first time 
if (random71 > 0.1) {
    // Perform correct calculations
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${eval('${a} ${c} ${b}')}`);
} else {
    // Perform wrong calculations
    c = obj71[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
