const bars = document.querySelector(".menu");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

const menu = document.querySelector(".navbar");

bars.addEventListener("click", function(){
    one.classList.toggle("one-active");
    two.classList.toggle("two-active");
    three.classList.toggle("three-active");
    menu.classList.toggle("active")
})