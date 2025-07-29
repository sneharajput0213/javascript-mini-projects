let btn = document.getElementById("btn");
let image = document.getElementById("image");
let result = document.getElementById("result");
btn.addEventListener("click",function() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    image.src = `images/dice${randomNumber}.png`;
    result.textContent = "Rolled:" + randomNumber
});