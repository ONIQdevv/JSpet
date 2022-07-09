const drawable = document.getElementById("drawable");
const ctx = drawable.getContext("2d");

const size_el = document.getElementById("size");
const color_el = document.getElementById("color");
// Toolkit buttons
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const rubber = document.getElementById("rubber");

let isPressed = false;

let size = 10;
let color = "black";

let x = 0;
let y = 0;

drawable.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;

});

drawable.addEventListener("mouseup", (e) => {
    isPressed = false;
    x = 0;
    y = 0;

});

drawable.addEventListener("mousemove", (e) => {
    if (isPressed) {

        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        theLine(x, y, x2, y2);
        x = x2;
        y = y2;

    }

});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

}

function theLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();

}

increase.addEventListener("click", () => {
    size += 5;
    if (size > 50) size = 50;
    updateSizeOnScreen();

});

decrease.addEventListener("click", () => {
    size -= 5;
    if (size < 5) size = 5;
    updateSizeOnScreen();

});

color_el.addEventListener("change", (e) => {
    color = e.target.value;

});

rubber.addEventListener("click", () => {
    ctx.clearRect(0, 0, drawable.width, drawable.height);

});

function updateSizeOnScreen() {
    size_el.innerText = size;

}
