//query selector

var btnTranslate = document.querySelector("#btn-translate");

var textInput = document.querySelector("#txt-input")

var outputDiv = document.querySelector(".output");



// events
btnTranslate.addEventListener("click", clickEvent);


//call back function

function clickEvent() {
    outputDiv.innerText = "banananananananaana " + textInput.value;
}

//love excercise

// 1. document.getElementsByTagName("textarea");

// 2. document.getElementsByClassName("btn-primary");

// 3. document.getElementById("input-btn");

// 4. document.getElementsByTagName("input", "name= translator");

// using querySelector

// 1. document.querySelector("textarea");
// 1. document.querySelector(".btn-primary");
// 1. document.querySelector("#input-btn");
// 1. document.querySelector("input[name='translate']");




// console.dir(document);