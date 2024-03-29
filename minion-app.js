// reference button s=using querySelector
var buttonClick = document.querySelector("#btnTranslate");
var textInput = document.querySelector("#userText");
var display = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  //   console.log("error occured", error);
  alert("Server Error: Too many request. Please try after few minutes...");
}

function clickHandler() {
  // taking input
  var inputText = textInput.value;

  //validation
  if (inputText) {
    // calling server
    fetch(getTranslationURL(inputText))
      .then((response) => response.json())
      .then((json) => {
        var translatedText = json.contents.translated;
        display.textContent = translatedText;
      })
      .catch(errorHandler);
  } else {
    console.log(inputText);
    alert("Please enter the text to translate to Minion.");
  }
}

// add eventlistener
buttonClick.addEventListener("click", clickHandler);
