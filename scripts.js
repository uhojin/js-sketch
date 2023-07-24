const container = document.getElementById("container");
let brushType = 'solid';
let red = 0, green = 0, blue = 0;

function createGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.classList.add(i + 1);
        container.appendChild(square);
    }
  }

function resetGrid(option = 'erase') {
    const squares = document.querySelectorAll('.square');
    if (option === 'remove') {
      squares.forEach(square => square.remove());
    }
    else if (option === 'erase') {
        // squares.forEach(square => square.style.filter.);
        squares.forEach(square => { square.style.filter = '', square.style.backgroundColor = 'white' , square.brightness = '100' });
        squares.forEach(square => square.style.backgroundColor = 'white');
    }
    return;
}

function drawGrid(size = 16) {
    resetGrid('remove');
    createGrid(size);
    document.documentElement.style.setProperty("--side-length", size)
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', paintGrid));
}

function randomizeColor() {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
}

function paintGrid() {
    if (brushType === 'pen') {
        this.style.backgroundColor = 'black'
    }
    else if (brushType === 'random') {
        randomizeColor();
        this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
    else if (brushType === 'darken') {
        // console.log(this.classList);
        // this.style.filter.brightness += 10;
        // if (this.brightness == 0)
        if (typeof this.brightness === 'undefined') {
            this.brightness = 100;
        }

        if (this.brightness === 0) {
            return;
        } 
        else {
            this.style.filter = `brightness(${this.brightness -= 10}%)`;
        }
    }
}

function newGrid() {
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

function setBrush(newBrushType = 'pen') {
    
    if (brushType === newBrushType) {
        return;
    }
    else {
        brushType = newBrushType;
    }
}


drawGrid();
setBrush();
