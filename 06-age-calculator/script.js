let DOB = document.getElementById("DOB");
let calc = document.getElementById("calc");
let age = document.getElementById("age");
calc.addEventListener("click" , function(){
    let today = new Date();
    let DOB = document.getElementById("DOB").value;
    let birthDate = new Date(DOB);
    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth();
    let birthDay = birthDate.getDate();

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDay = today.getDate();
    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;
    age.textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;
});