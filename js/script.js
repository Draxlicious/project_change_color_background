let body = document.querySelector("body");
let btn = document.querySelector("button");
let colors = ["Red", "Green", "Blue", "Yellow", "Orange", "Brown", "Purple"];

btn.addEventListener("click", ChangeColor)

body.style.backgroundColor = "Purple";

function ChangeColor(){
    let ColorIndex = Math.floor(Math.random( ) * colors.length);
    console.log(ColorIndex)
    body.style.backgroundColor = colors[ColorIndex];

}

// function ChangeColor(){
//     let ColorIndex = parseInt(Math.random() * colors.length + 1)
//     console.log(ColorIndex)
//     body.style.backgroundColor = colors[ColorIndex];
// }