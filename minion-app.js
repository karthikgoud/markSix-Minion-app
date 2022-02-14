
//query selector

var btnTranslate = document.querySelector("#btn-translate");

var textInput = document.querySelector("#txt-input")



// events
btnTranslate.addEventListener("click", clickEvent); 


//call back function

function clickEvent() {
    console.log("clicked");
    console.log(textInput.value);
}



// console.dir(document);