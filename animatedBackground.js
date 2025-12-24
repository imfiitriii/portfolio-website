//interactive bg

let grid = document.querySelector(".animatedbg")
let section = document.querySelector("#projects")

function generateSquares(){
    grid.innerHTML = "";
    const length = 20;
    const gap = 5;

    const cols= Math.ceil(section.clientWidth / (length+gap));
    const rows = Math.ceil(section.clientHeight / (length+gap));

    const total = rows*cols;

    for (let i = 0; i < total; i++) {
        const square = document.createElement("div")
        square.classList.add("square") /* add class .square to student */
        grid.appendChild(square);
    }

    
}

generateSquares()
window.addEventListener("resize",generateSquares)

function delay(time){
    return new Promise((resolve) => setTimeout(resolve,time))
}

//mouse effect
const length = 20;
const gap = 5;
const cols= Math.ceil(section.clientWidth / (length+gap));
const rows = Math.ceil(section.clientHeight / (length+gap));
const squares = document.querySelectorAll(".animatedbg .square");
const squaresArray = [];
let currentCol = 0, currentRow = 0;
squaresArray[currentRow] = []; // initialize first row, important before assigning data

squares.forEach(square => { // browser will insert the argument
    squaresArray[currentRow][currentCol] = square;
    currentCol++;

    if (currentCol >= cols) {
        currentCol = 0;
        currentRow++;
        squaresArray[currentRow] = []; // initialize next row
    }
});

async function flickerEffect() {
    let selectedRows = Math.floor(Math.random() * rows);
    let selectedCols = Math.floor(Math.random() * cols);
    let selectedSquare = squaresArray[selectedRows][selectedCols];
    selectedSquare.style.backgroundColor = "rgba(11, 87, 60, 0.368)";
    await delay(500);
    selectedSquare.style.backgroundColor = "rgba(11, 87, 60, 0.068)";
    await delay(1000);
    selectedSquare.style.backgroundColor = "#05100d"

}


async function trailEffect(square) {
    square.style.transform = "scale(1)";
    square.style.backgroundColor = "rgba(11, 87, 60, 0.58)";
    await delay(100);
    square.style.backgroundColor = "rgba(11, 87, 60, 0.068)";
    await delay(200);
    square.style.backgroundColor = "#05100d";
}

// change style using js
squares.forEach((square) => { //auto assign the argument;
    square.addEventListener("mouseenter", () => {
        square.style.transform = "scale(1.2)";
        square.style.backgroundColor = "aquamarine";
    });
    //wrap the function calling in an anonymous function
    square.addEventListener("mouseleave", () => trailEffect(square)); //cannot use trailEffect(square) immediately because it immediately calls, not following event
    // when it immediately calls, it returns a promise, the promise will will be sent to the eventlistener, but the listener expect func
});

//start flicker
setInterval(() => {flickerEffect()}, 100);