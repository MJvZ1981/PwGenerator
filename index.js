const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+=[{|:;<>,.?/";

let passwordEl = document.getElementById("password");
let numberEl = document.querySelector(".number");
const handleNumEl = document.getElementById("check-num");
const handleCapEl = document.getElementById("check-cap");
const handleSymEl = document.getElementById("check-sym");
const handleLengthEl = document.getElementById("rangeSlider");
let passwordLength = handleLengthEl.value;

let numbersIncluded = true;
let uppercaseIncluded = true;
let symbolsIncluded = true;

// lengthEl.textContent = `Password length: ${passwordLength}`;

handleCapEl.addEventListener("change", function () {
  uppercaseIncluded = handleCapEl.checked;
  generatePassword();
});

handleNumEl.addEventListener("change", function () {
  numbersIncluded = handleNumEl.checked;
  generatePassword();
});

handleSymEl.addEventListener("change", function () {
  symbolsIncluded = handleSymEl.checked;
  generatePassword();
});

handleLengthEl.addEventListener("input", function () {
  passwordLength = handleLengthEl.value;
  generatePassword();
});

function generatePassword() {
  const includedChars =
    "abcdefghijklmnopqrstuvwxyz" +
    (uppercaseIncluded ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "") +
    (numbersIncluded ? "0123456789" : "") +
    (symbolsIncluded ? "~`!@#$%^&*()_-+=[{|:;<>,.?/" : "");
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += includedChars[Math.floor(Math.random() * includedChars.length)];
  }

  passwordEl.textContent = password;
  numberEl.textContent = ` ${passwordLength}`;
}

generatePassword(); // Generate a password when the page loads

function copyPassword() {
  navigator.clipboard.writeText(passwordEl.textContent);
}
