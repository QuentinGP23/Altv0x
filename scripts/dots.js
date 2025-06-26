function createGrid() {
  const grid = document.getElementById("bg-grid");
  grid.innerHTML = "";
  const pointSize = 32;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const cols = Math.ceil(w / pointSize);
  const rows = Math.ceil(h / pointSize);
  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  for (let i = 0; i < cols * rows; i++) {
    const dot = document.createElement("div");
    dot.className = "bg-point";
    grid.appendChild(dot);
  }
}

window.addEventListener("resize", createGrid);
window.addEventListener("DOMContentLoaded", createGrid);
