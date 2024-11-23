const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Set canvas dimension
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Set scale
// The CanvasRenderingContext2D.scale() method of the Canvas 2D API 
//adds a scaling transformation to the canvas units horizontally and/or vertically.
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);