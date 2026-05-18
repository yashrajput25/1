//12a
const add = function(){
    console.log(2+3);
}
add()


//12b
const runTwice = function(param){
    param();
    param();
}
runTwice(add)


//12c
function updateStartButton(){
    
    setTimeout(()=>{
        const startButtonElement = document.querySelector(".js-start-button");
        startButtonElement.innerHTML = "Finsihed!";
        console.log("Updated the button in 2-seconds")
    },2000);
}


//12d
function updateStartButtonTwo(){

    const startButtonElement = document.querySelector(".js-start-button");
    console.log("Updated the button to loading")
    startButtonElement.innerHTML = "Loading...";

    setTimeout(()=>{
        startButtonElement.innerHTML = "Finished!";
        console.log("Updated the button to finished in 2-seconds");
    },2000);

    setTimeout
}

//12e

// function addToCart(){
//     const addedElement = document.querySelector(".js-added");
//     addedElement.innerHTML = "Added";
//     setTimeout(()=>{
//         addedElement.innerHTML = "";
//     },4000);

// }

//12f
let intervalId = null;

function addToCart(){
    const addedElement = document.querySelector(".js-added");
    addedElement.innerHTML = "Added";
    if(intervalId){
        clearInterval(intervalId);
    }
    
    intervalId = setTimeout(()=>{
        addedElement.innerHTML = "";
    }, 4000);
}

//12g
/*
setInterval(()=>{
    const titleElement = document.querySelector(".js-title");
    const title = titleElement.innerHTML;
    if(title === "App"){
        titleElement.innerHTML = "(2) New Message";
        return;
    }else{
        titleElement.innerHTML = "App";
        return;
    }
},1000);
*/

let messages = 1;

function updateValue(param){
    param === 1 ? messages++ : messages--;
    console.log(messages)
}

const titleElement = document.querySelector(".js-title");
setInterval(()=>{

    titleElement.innerHTML === "App" ? titleElement.innerHTML = `(${messages}) New Messages` : titleElement.innerHTML = "App";

}, 1000)