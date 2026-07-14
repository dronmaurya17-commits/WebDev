const { useCallback } = require("react");

// Js is Asynchornous in nature means it doesn't follow any order to execute the output
console.log("I am first");
console.log("I am Second");

setTimeout(() => {
    console.log("I am third but execute after 2sec");
}, 2000);

console.log("I am 4th but run before 3rd");


const callback = (arg) => {
    console.log(arg);
}
const loadscript = (src,callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Tata");
    document.head.append(sc);
}    

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",callback);

// Pyramid of Doom:-when function call itself again and again
