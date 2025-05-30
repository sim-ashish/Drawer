const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drawing = false;
let penColor = "#000000";
let penSize = 5;
let erasing = false;

const colorPicker = document.getElementById("colorPicker");
const penSizeSlider = document.getElementById("penSize");
const eraserBtn = document.getElementById("eraser");
const clearBtn = document.getElementById("clear");

canvas.addEventListener("mousedown", () => (drawing = true));
canvas.addEventListener("mouseup", () => (drawing = false));
canvas.addEventListener("mouseout", () => (drawing = false));

canvas.addEventListener("mousemove", draw);

function draw(e) {
  if (!drawing) return;

  ctx.lineWidth = penSize;
  ctx.lineCap = "round";
  ctx.strokeStyle = erasing ? "#f0f0f0" : penColor;

  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
}

// Update color
colorPicker.addEventListener("input", (e) => {
  penColor = e.target.value;
  erasing = false;
});

// Update size
penSizeSlider.addEventListener("input", (e) => {
  penSize = e.target.value;
});

// Eraser mode
eraserBtn.addEventListener("click", () => {
  erasing = !erasing;
  eraserBtn.textContent = erasing ? "Drawing Mode" : "Eraser";
});

// Clear canvas
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
});
