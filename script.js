let b1 = document.querySelector("#buO");
let b2 = document.querySelector("#buT");
let b3 = document.querySelector("#buTH");

function resetAll() {
    b1.innerText = "Select";
    b2.innerText = "Select";
    b3.innerText = "Select";
}

b1.addEventListener("click", () => {
    resetAll();
    b1.innerText = "Selected";
});

b2.addEventListener("click", () => {
    resetAll();
    b2.innerText = "Selected";
});

b3.addEventListener("click", () => {
    resetAll();
    b3.innerText = "Selected";
});
