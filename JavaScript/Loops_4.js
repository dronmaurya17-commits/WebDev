/* for (let i = 0; i < 10; i++) {
    console.log(i);
} */

// for-in:-used to return the keys of an object
let obj41 = {
    "Name":"Dddj",
    "Roll":45,
    "ID":2411
}
for (const key in obj41) {
    if (!Object.hasOwn(obj41, key)) continue;
    
    const element = obj41[key];
    console.log(element)
} 

//accesssing keys and values both
let obj42 = {
    "Name":"Dddj",
    "Roll":45,
    "ID":2411
}
for (const key in obj42) {
    if (!Object.hasOwn(obj42, key)) continue;
    
    const element = obj42[key];
    console.log(key,element)
} 

// for-of:-used for iterable structures like array,strings
for (const characters of "Badshah") {
    console.log(characters)
}