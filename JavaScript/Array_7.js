/* let arr61 = [1,2,3,4,5];
console.log(arr61);
console.log(arr61.length);
 */

// Some imp methods of array
let arr62 = [12,3,4,65,87,32];
/*
console.log(arr62.toString());

console.log(arr62.join(" and "));

console.log(arr62.pop());

arr62.push("Name");
console.log(arr62); 

console.log(arr62.shift());//remove 1st element 

arr62.unshift("Jack");//adds at first position
console.log(arr62);

delete arr62[2];//creates an empty hole
console.log(arr62);
console.log(arr62.length);

let arr63 = [1,2,3];
let arr64 = [4,5,6];
let arr65 = [7,8,9];
console.log(arr63.concat(arr64,arr65));//This will give new array

console.log(arr62.splice(1,2));//start with index 1 and delete upto 2 elements
arr62.splice(1,3,222,333);//Start at index 1 and deletes 3 element then insert 222 and 333
console.log(arr62);*/

// For loop in Array
let arr66 = [2,3,4,5,6,7];

/* for (let i = 0; i < arr66.length; i++) {
    const element = arr66[i];
    console.log(element);
    
}
 */
// For each loop
/* arr66.forEach((value,index,arr)=>{
    console.log(value,index,arr)
}) */


// Map filter reduce 
/* let new_arr66 = arr66.map((e)=>{
    return e**2;
})
console.log(new_arr66); */

/* const greaterthan3 = (e)=>{
    if (e>3) {
        return true;
    }
    return false;
}
console.log(arr66.filter(greaterthan3)); */

/* let arr_67 = [1,2,3,4,5,6];
const add = (a,b)=>{
    return a+b;
}
console.log(arr_67.reduce(add)); */

// Converting any object into array
let str67 = "Vande Baharat";
console.log(Array.from(str67));