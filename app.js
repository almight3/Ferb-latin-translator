let textInPut = document.querySelector("#translate-input");
let btnTranslate = document.querySelector("#translate-button");
let textOutPut = document.querySelector("#translate-output");

let serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslatedURl(text){
    return serverURL + "?" +"text=" + text;
}

function errorHandler(error){
    console.log("there is error" + error);
    alert("there is some problem in server try again after some time ");
}

function clickHandler() {
    let inputText = textInPut.value;
    fetch(getTranslatedURl(inputText))
    .then(response => response.json())
    .then(json => {
        let translatedText = json.contents.translated ;
        textOutPut.innerText = translatedText;
    })
    .catch(errorHandler);
}


btnTranslate.addEventListener("click", clickHandler);