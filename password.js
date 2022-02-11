// Elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const copy = document.getElementById("copy");
const resultCont = document.getElementById("result-container");
const warnEl = document.getElementById("warning");
const copyAlert = document.getElementById("copyAlert");
const message = document.getElementById("message");
//function to get LowerCase
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//function to get UpperCase
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//function to get Number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//function to get Symbol
function getRandomSymbol() {
  const symbols = "~!@#$%^&*+=_?";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// slider Function  to update length
function updateLength(val) {
  document.getElementById("length").value = val;
}

//OnClick Generate Password Functions
function generatePassword() {
  copyAlert.innerHTML = "";
  message.innerHTML = "";
  if (lengthEl.value > 20 || lengthEl.value < 4) {
    result = "";
    resultEl.innerHTML = result;
    warnEl.innerHTML = "Enter Password length between 4 to 20";
    warnEl.style.fontSize = "100%";
    warnEl.style.color = "red";
    setTimeout(function () {
      resultEl.innerHTML = "Click Generate Password";

      resultEl.style.color = "";
      resultEl.style.fontSize = "";
      document.getElementById("result-container").style.background = "";
      warnEl.innerHTML = "";
    }, 2000);
    return;
  }

  if (
    !uppercaseEl.checked &&
    !lowercaseEl.checked &&
    !numbersEl.checked &&
    !symbolsEl.checked
  ) {
    result = "";

    resultEl.innerHTML = result;
    warnEl.innerHTML = "Atleast check one checkbox";
    
    warnEl.style.color = "red";
    setTimeout(function () {
      resultEl.innerHTML = "";
      message.innerHTML = "Click Generate Password",
      resultEl.style.color = "";
      resultEl.style.fontSize = "";
      document.getElementById("result-container").style.background = "";
      warnEl.innerHTML = "";
    }, 2000);
    return;
  }
  var result = "";
  while (result.length < lengthEl.value) {
    if (uppercaseEl.checked && result.length < lengthEl.value) {
      result += getRandomUpper();
    }
    if (lowercaseEl.checked && result.length < lengthEl.value) {
      result += getRandomLower();
    }
    if (numbersEl.checked && result.length < lengthEl.value) {
      result += getRandomNumber();
    }
    if (symbolsEl.checked && result.length < lengthEl.value) {
      result += getRandomSymbol();
    }
  }

  resultEl.innerHTML = result;
}
function copyPass() {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  copyAlert.innerHTML = "Password copied to clipboard";
  copyAlert.style.color = "gold";
}







// result = "Enter Password length between 4 to 20";
// resultEl.style.fontSize = "90%"
// resultEl.style.color = "white";
// document.getElementById("result-container").style.background = "red";
// resultEl.innerHTML = result;
// // copy.remove();
// setTimeout(function(){
//   resultEl.innerHTML = "Click Generate Password";
//   resultEl.style.color = "";
//   resultEl.style.fontSize = "";

//   document.getElementById("result-container").style.background = "";
// },2700)
// return;

// && lengthEl.value > 20 && lengthEl.value < 4

// if(result.length < lengthEl.value){
//   generatePassword();
// }

// alert(
// "Password Copied.   " + resultEl.innerHTML
//  +
// "   length   " +
// password.length
// );

// copy.remove();

// resultEl.style.color = "gold";
// document.getElementById("result-container").style.background = "rgb(233, 34, 34)";
