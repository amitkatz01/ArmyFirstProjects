document.querySelector("div").style.textAlign = "center";
let bodyEl = document.querySelector("body");
let btn = document.querySelector("button");
let rgbLabel = document.querySelector("h2");
function ifClicked (){
const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);
//Generating rgb
bodyEl.style.backgroundColor = `rgb(${red},${green},${blue})`;
rgbLabel.innerText = `rgb(${red},${green},${blue})`
}
btn.style.border = "0.15rem solid #a2d2ff";
btn.addEventListener("click", ifClicked);