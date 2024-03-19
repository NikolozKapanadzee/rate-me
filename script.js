const submit = document.getElementById("submit-button");
const rates = document.querySelectorAll(".btn");
const container = document.querySelector(".container");
const appreciateContainer = document.querySelector(".appreciate-container");
const rating = document.querySelector(".rating")

submit.addEventListener("click", () => {
    container.style.display = "none";
    appreciateContainer.style.display = "flex";
});
rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    });
});

