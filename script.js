var css = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.getElementById("gradient");
var bodygradient = window.getComputedStyle(body).background;
var random = document.querySelector(".random");
var linearcolors = bodygradient.slice(17, 55);

const myVariable = window.getComputedStyle(document.body)
 console.log(myVariable.backgroundColor);

console.log(bodygradient);

color1.value = "#ff0000";
color2.value = "#ffff00";

function dura() {
	console.log(linearcolors);
}
dura();
css.textContent = linearcolors;

console.log(css);
console.log(color1);
console.log(color2);

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandColor() {
	color1.value = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
	color2.value = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandColor);
