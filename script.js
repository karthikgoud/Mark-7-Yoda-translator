var btnTranslate = document.querySelector("button");
var outputDiv = document.querySelector("#output-div");
const displayYoda = document.querySelectorAll(".img-div");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function finalFetchURL(text) {
  return serverURL + "?" + "text=" + text;
}

// finalFetchURL("this is karthik");

btnTranslate.addEventListener("click", translate);

function translate() {
  var inputText = document.querySelector("input").value;

  if (inputText) {
    fetch(finalFetchURL(inputText))
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error(" Too many requests. Please try after some time.");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        outputDiv.style.display = "block";
        outputDiv.textContent = data.contents.translated;
        displayYoda[0].style.display = "block";
        displayYoda[1].style.display = "block";
      })
      .catch((err) => {
        outputDiv.style.display = "block";
        outputDiv.textContent = "❌" + err + "❌";
      });
  } else {
    alert("Please enter text to Translate.");
  }
}
