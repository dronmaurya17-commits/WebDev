const URL = "https://api.thecatapi.com/v1/images/0XYvRd7oD";

/* let promise = fetch(URL);
console.log(promise); */

// Using the Async and Await
/* const getFacts = async () => {
    console.log("Getting Data in few time");
    
    let response = await fetch(URL); //this is GetRequest data leke aate
    console.log(response); //Output is in JSON/Js format 
}
getFacts();
 */


// Stage_1:-response to JSON   Stage_2:-Json to Js object 
// Json() Method:- return 2nd promise
/* 
const getFacts = async () => {
    console.log("Getting Data in few time");
    
    let response = await fetch(URL); 
    console.log(response); 
    let data = await response.json();
    console.log(data);

    //Accesssing the test at 0th index data
        console.log("Accessing the Height -->",data.height);
}
getFacts(); */



// Connecting the API with the html

// Method_1:- Using Async and Await
/* const factPara = document.querySelector("#fact");
const btn  = document.querySelector("#btn");

const getFacts = async () => {
    console.log("Getting Data in few time");
    
    let response = await fetch(URL); 
    console.log(response); 
    let data = await response.json();
    factPara.innerText = data.fact;
}
btn.addEventListener("click",getFacts); */

// Method_2:-  Using Promise method
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

function getFacts() {
    fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            factPara.innerText = data.fact;
        });
}

btn.addEventListener("click",getFacts); 
