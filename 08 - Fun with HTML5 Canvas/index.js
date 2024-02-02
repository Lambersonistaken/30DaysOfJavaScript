const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d"); // context where we can draw on
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55"; // color of the line

ctx.lineJoin = "round"; // how the line should join together
ctx.lineCap = "round"; // how the line should end

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return; // stop the function from running when they are not moused down
  console.log(e);
  ctx.beginPath(); // start from
  ctx.moveTo(lastX, lastY); // go to
  ctx.lineTo(e.offsetX, e.offsetY); // end to
  ctx.stroke(); // draw the line
  [lastX, lastY] = [e.offsetX, e.offsetY]; // destructuring an array
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
