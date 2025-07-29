let guess = document.getElementById("guess");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let txt1 = document.getElementById("txt1");
let txt2 = document.getElementById("txt2");
let message = document.getElementById("message");
let randomNum = Math.floor(Math.random() * 100) + 1;
let score = 0;
let attempts = 0;
btn1.addEventListener("click", function(){
    let userGuess =Number(guess.value);
    attempts++;
    if(userGuess ===randomNum){
    document.getElementById("message").textContent = "Correct!";
    score++;
    txt1.textContent = "Your Score: " + score;
    }else if(userGuess <randomNum){
    document.getElementById("message").textContent = "too low!";
    }
    else{
    document.getElementById("message").textContent = "too high!";
    }
    txt2.textContent = "Attempts: " + attempts;
});
btn2.addEventListener("click", function(){
    randomNum = Math.floor(Math.random() * 100) + 1;
    score = 0;
    attempts = 0;
    txt1.textContent = "Your Score: 0";
    txt2.textContent = "Attempts: 0";
    guess.value = "";
    message.textContent = "";
});