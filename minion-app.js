
// reference button s=using querySelector
var buttonClick = document.querySelector("#btnTranslate");
var textInput = document.querySelector("#userText");

// add eventlistener
buttonClick.addEventListener("click",readInput);

function readInput(){

    console.log("clicked");
    console.log(textInput.value);
    
}