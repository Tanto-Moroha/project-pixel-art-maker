/*
There will be a lot of comments in this file. You may find them unnecessary, but I'm still learning and I find them helpful for me.
*/

// Select color input

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
  // TODO: Remove test log
  console.log(`Test log: function makeGrid started.`);

  // Remove previous table if there was any
  while (document.querySelector('#pixelCanvas').firstChild) {
    document.querySelector('#pixelCanvas').removeChild(document.querySelector('#pixelCanvas').firstChild);
  }

  // Draw rows and cells
  for (let row = 1; row <= gridHeight; row++) {
    // Create a new row
    const newRow = document.createElement('tr');
    document.querySelector('#pixelCanvas').appendChild(newRow);

    for (let col =1; col <= gridWidth; col++) {
      // Create a new cell
      const newCell = document.createElement('td');
      newRow.appendChild(newCell);
    }

  }

  document.querySelector('#pixelCanvas').addEventListener('click', respondToTheClick);

}

function respondToTheClick (evt) {
  // TODO: Remove test log
  console.log('A cell was clicked.');
  // Change a cell's color
  // TODO: Link color picker
  evt.target.style.backgroundColor = 'red';
}
