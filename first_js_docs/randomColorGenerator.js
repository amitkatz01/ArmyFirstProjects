document.querySelector("div").style.textAlign = "center";
let bodyEl = document.querySelector("body");
let btn = document.querySelector("button");
let rgbLabel = document.querySelector("h2");
let h1RandomColor = document.querySelector("h1"); //saving h1

function ifClicked (){
const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);
//Generating rgb
bodyEl.style.backgroundColor = `rgb(${red},${green},${blue})`;
rgbLabel.innerText = `rgb(${red},${green},${blue})`
}
function ifHovered (){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    //Generating rgb
    h1RandomColor.style.color = `rgb(${red},${green},${blue})`;
}
btn.style.border = "0.15rem solid #a2d2ff";
btn.addEventListener("click", ifClicked);
h1RandomColor.addEventListener('mouseover', ifHovered);
//h1 will change to random colors when hovered over
