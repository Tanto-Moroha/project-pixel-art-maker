/**
* There will be a lot of comments in this file. You may find them unnecessary, but I'm still learning and I find them helpful for me.
*/

// Set objects to read/manipulate
const colorPicker = document.querySelector('#colorPicker');
const pixelCanvas = document.querySelector('#pixelCanvas');


// Grid size
let gridHeight;
let gridWidth;


// Get grid size values
document.querySelector('#sizePicker').addEventListener('submit', function (event) {
  // Prevent page refreshing
  event.preventDefault();

  gridHeight = document.querySelector('#inputHeight').value;
  gridWidth = document.querySelector('#inputWidth').value;

  makeGrid();
});


// Draw a grid
function makeGrid() {
  // Remove previous table if there was any
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
  }
  // Draw rows and cells
  for (let row = 1; row <= gridHeight; row++) {
    const newRow = document.createElement('tr');
    pixelCanvas.appendChild(newRow);

    for (let col = 1; col <= gridWidth; col++) {
      const newCell = document.createElement('td');
      newRow.appendChild(newCell);
    }

  }
  pixelCanvas.addEventListener('click', respondToTheClick);
}


function respondToTheClick (evt) {
  // Change a cell's color
  evt.target.style.backgroundColor = colorPicker.value;
}
