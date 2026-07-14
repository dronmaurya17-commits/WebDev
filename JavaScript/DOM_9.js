// DOM:-more like a frontend Html
// 4 Pillars:- 1.Selection of element 2.Changing HTML 3.Changing CSS 4.Event Listener

// Write this in HTML console
/*

// 1.Selection of element:- element in HTML can be selected in js using this method
 var a = document.querySelector("h1");
console.log(a); 

// 2.Changing HTML:- means h1 ki jagah aajega
a.innerHTML = "Change the previous HTML";

// 3.Changing CSS:- using the style tag
document.querySelector("h1").style.color = "green";

// 4.Event Listener:- addEventlistener("Defined Event",Function())
var a = document.querySelector("h1");
a.addEventListener("click",function(){
    a.innerHTML = "Tumhare click ne badal diya";
    a.style.color = "green";
})

*/

// For the bulb to glow
var blb = document.querySelector("#bulb");
var btn = document.querySelector("button");

// Method_1:-
/* 
// on bulb
btn.addEventListener("click",function(){
    blb.style.backgroundColor = "yellow";
})

// off bulb 
btn.addEventListener("dblclick",function() {
    blb.style.backgroundColor = "white";
})
 */

// Method_2:-
/* 
var flag = 0;
btn.addEventListener("click", function () {
    if (flag == 0) {
        blb.style.backgroundColor = "yellow";
        flag = 1;
    } else {
        blb.style.backgroundColor = "white";
        flag = 0;
    }
}) 
*/


// Adding the content2 classs to the content1 class 

// Method_1:-removing the old class and adding the new class
/*
var cont1 = document.querySelector("p");
cont1.getAttribute("class");
cont1.setAttribute("class","content2"); //Completely overwrites 
 */


// Method_2:-Keeping the original as same and adding the new one into it 
var para1 = document.querySelector("p");
para1.classList;
para1.classList.add("content2");