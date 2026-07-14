let box111 = document.getElementsByClassName("box");
/* console.log(box111);

box111[2].style.backgroundColor = "red";

document.getElementById("greenbox").style.backgroundColor = "green" */

// Querry selector :-selects the first box
document.querySelector(".box").style.backgroundColor = "aqua";
  
// Selecting all box
console.log(document.querySelectorAll(".box") );//return html collection
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "yellow";
})