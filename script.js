let container = document.querySelector(".container");

function createGrid(squaresPerSide = 256) {
  for (let i = 0; i < squaresPerSide ** 2; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

function hoverIn() {
  this.classList.add("hovered");
}

function hoverOut() {
  this.classList.remove("hovered");
}

function setHoverProperty() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => square.addEventListener("mouseenter", hoverIn));
  squares.forEach((square) => square.addEventListener("mouseleave", hoverOut));
}

function newGrid() {
  let squaresPerSide = Number(
    prompt("Number of squares per side of new grid?")
  );
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.style.gridTemplateColumns = `repeat(${squaresPerSide}, ${
    960 / squaresPerSide
  }px)`;
  container.style.gridTemplateRows = `repeat(${squaresPerSide}, ${
    960 / squaresPerSide
  }px)`;
  createGrid(squaresPerSide);
  setHoverProperty();
}

createGrid();
setHoverProperty();

let resetButton = document.querySelector("button");
resetButton.addEventListener("click", newGrid);
