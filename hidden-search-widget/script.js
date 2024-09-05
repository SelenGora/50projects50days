const container = document.querySelector(".container");
const input = document.querySelector(".input-selector");
const btn = document.querySelector(".btn-selector");


btn.addEventListener("click", () => {
    container.classList.toggle("active");
    input.focus();
})