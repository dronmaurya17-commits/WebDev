// Calc Factorial
/* let num81 = 7;
let fact1 = 1;
for (let i = 1; i <=num81 ; i++) {
     fact1*=i;
}
console.log(fact1);

let fact2 = 7;
for (let i = num81-1; i > 0; i--) {
    fact2*=i;
} 
console.log(fact2); */

// Reduce method
let num83 = 5;
function fact3(number){
    let arr81 = Array.from(Array(number+1).keys());
    console.log(arr81.slice(1,));

    let c = arr81.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    console.log(c);
}
fact3(5);