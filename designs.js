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
  // TODO: Remove test log
  console.log(`Test log: submit button clicked`);
  gridHeight = document.querySelector('#inputHeight').value;
  // TODO: Remove test log
  console.log(`Test log: value of variable "gridHeight" is set to ${gridHeight}.`);
  gridWidth = document.querySelector('#inputWidth').value;
  // TODO: Remove test log
  console.log(`Test log: value of variable "gridWidth" is set to ${gridWidth}.`);
  // TODO: Call makeGrid
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}
