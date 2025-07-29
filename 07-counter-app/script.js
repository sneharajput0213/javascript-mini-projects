let counter = document.getElementById("counter");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let count=0;
button1.addEventListener("click", function(){
    count += 1;
    counter.textContent = count;
});
button2.addEventListener("click", function(){
    count -= 1;
    counter.textContent = count;
});
button3.addEventListener("click", function(){
    count = 0;
    counter.textContent = count;
});