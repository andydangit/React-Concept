const incrementBtn = document.getElementById("increment-button");
const countDisplay = document.getElementById("count-display");

let currentCount = 0;

incrementBtn.addEventListener('click', () => {
    currentCount ++
    countDisplay.innerHTML = currentCount
})