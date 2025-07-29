let count = document.getElementById("count");
let text = document.getElementById("text");
text.addEventListener("input", function(){
    txtCount = text.value.length;
    count.textContent = "Character count is:" +txtCount;
});