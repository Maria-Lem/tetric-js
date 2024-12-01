// Configuration and rules

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

const KEY = {
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
  DOWN: 'ArrowDown',
};
// Object.freeze() freezes the object and it only applies to the immediate properties of object itself. To make an object immutable, recursively freeze each non-primitive property (deep freeze). 
// Attempt to change properties will throw a TypeErrow in strict mode and in non-strict mode it will fail silently
Object.freeze(KEY);