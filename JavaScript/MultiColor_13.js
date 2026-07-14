let boxes = document.getElementsByClassName("box");
console.log(boxes);

function getRandomColor() {
    let val1 = Math.ceil(0+Math.random()*255);
    let val2 = Math.ceil(0+Math.random()*255);
    let val3 = Math.ceil(0+Math.random()*255);
    return `rgb(${val1} ${val2} ${val3} )`
}

//Making array from boxes classes 
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
})
