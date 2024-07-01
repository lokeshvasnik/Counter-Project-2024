const inc = document.getElementById("increment");
const dec = document.getElementById("decrement");
const count = document.getElementById("counter");
const resetBtn = document.getElementById("reset");

let counter = 0;

const updateCounter = () => {
    count.innerText = counter;
    if (counter > 4) {
        document.body.style.background = "#f1c40f";
    } else {
        document.body.style.background = "#fff";
    }
};

inc.addEventListener("click", () => {
    counter++;
    updateCounter();
});

dec.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        updateCounter();
    }
});

resetBtn.addEventListener("click", () => {
    counter = 0;
    updateCounter();
});
