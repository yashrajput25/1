
        
function updateButton(buttonElement){

    if(!buttonElement.classList.contains("enabled-button")){
        closePrevButton();
        buttonElement.classList.add("enabled-button")
    }else{
        buttonElement.classList.remove("enabled-button")
    }
}

function closePrevButton(){
    const prevButtonElement = document.querySelector(".enabled-button");
    if(prevButtonElement){
        prevButtonElement.classList.remove("enabled-button")
    }
    
}