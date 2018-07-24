// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // TODO: Remove test log
  console.log(`Test log: function makeGrid started.`);

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

}

// TODO: Remove test after branch merging
// Test for a module
const gridHeight = 10;
const gridWidth = 5;
makeGrid();
