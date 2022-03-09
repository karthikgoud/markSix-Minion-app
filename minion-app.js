// reference button s=using querySelector
var buttonClick = document.querySelector("#btnTranslate");
var textInput = document.querySelector("#userText");
var display = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("try after sometime")
}


function clickHandler() {

    // taking input
    var inputText = textInput.value;

    // calling server
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            display.innerText = translatedText;
        })
        .catch(errorHandler)

}


// add eventlistener
buttonClick.addEventListener("click", clickHandler);