const btn = document.getElementById("btn");
const colorSpan = document.getElementById("color");

const colors=["yellow", "red", "beige", "purple", "brown", "orange"];
let index = 0;

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = colors[index];
  //colorSpan.textContent = colors[index];
  index = (index + 1) % colors.length;  // Loop through colors
});
