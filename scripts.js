const container = document.getElementById("container");

function createGrid(size) {
    const containerWidth = container.getBoundingClientRect().width;
    const squareSize = (363 / size) - 1;
    console.log(containerWidth);
    console.log(squareSize);
    
    for (let i = 0; i < (size * size); i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.classList.add(i + 1);
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      container.appendChild(square);
    }
    console.log(containerWidth);
  }

function resetGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.remove());
}


function drawGrid(size = 16) {
    resetGrid();
    createGrid(size);
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseenter', paintGrid));
}

const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseenter', paintGrid));

function paintGrid(e) {
    this.classList.add('filled');
}


// const button = document.querySelector('button');

function newGrid(e) {
    let newSideLength = prompt("Enter the number of squares for a side (1-100)");
    while (true) {
        if (1 <= newSideLength && newSideLength <= 100) {
            console.log(newSideLength);
            drawGrid(newSideLength);
            break;
        }
        else {
            console.log("Error: input out of range " + newSideLength);
            newSideLength = prompt("Enter the number of squares for a side (1-100)");
        }
    }
}


drawGrid();
