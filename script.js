var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradient = document.getElementById("gradient");
var random = document.getElementById("random");

function randomizer() {
  color1.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color2.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function setGradient() {
  /* randomizer(); */
  gradient.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  random.style.background =
    "linear-gradient(to right, " + color2.value + ", " + color1.value + ")";

  css.textContent = gradient.style.background + ";";
}

function setRandom() {
  randomizer();
  setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandom);

randomizer();
setGradient();

console.log("code end");
