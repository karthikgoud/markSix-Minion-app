
// reference button s=using querySelector
var buttonClick = document.querySelector("#btnTranslate");
var textInput = document.querySelector("#userText");
var display = document.querySelector("#output");


// add eventlistener
buttonClick.addEventListener("click",readInput);

function readInput(){

    // console.log(textInput.value);

    display.innerText = textInput.value

    
}