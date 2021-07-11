const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

function changeColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    h1.innerText=`RGB(${red},${green},${blue})`
    body.style.backgroundColor = `rgb(${red},${green},${blue})`
    
    
}
btn.addEventListener('click',changeColor)



