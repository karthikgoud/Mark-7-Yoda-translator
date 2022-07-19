var btnTranslate = document.querySelector("button");
var outputDiv = document.querySelector("#output-div");
const displayYoda = document.querySelector("#img-div");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function finalFetchURL(text) {
  return serverURL + "?" + "text=" + text;
}

// finalFetchURL("this is karthik");

btnTranslate.addEventListener("click", translate);

function translate() {
  var inputText = document.querySelector("input").value;

  fetch(finalFetchURL(inputText))
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      outputDiv.textContent = data.contents.translated;
      displayYoda.style.display = "block";
    })
    .catch((err) => {
      outputDiv.innerText = "error : " + err;
    });
}
