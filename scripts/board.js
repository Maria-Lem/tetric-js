class Board {
  constructor() {
    this.piece = null;
  }

  // reset game board before each game
  reset() {
    this.grid = this.getEmptyBoard();
  }

  // create matrix 
  getEmptyBoard() {
    return Array.from(
      { length: ROWS }, () => Array(COLS).fill(0)
    );
  }

  insideWalls(x) {
    return x >= 0 && x < COLS;
  }

  aboveFloor(y) {
    return y <= ROWS;
  }

  // check if the cell is occupied by other piece
  notOccupied(x, y) {
    return this.grid[y] && this.grid[y][x] === 0;
  }

  valid(p) {
    return p.shape.every((row, dy) => {
      return row.every((value, dx) => {
        let x = p.x + dx;
        let y = p.y + dy;

        return value === 0 || (this.insideWalls(x) && this.aboveFloor(y) && this.notOccupied(x, y));
      });
    });
  }

  rotate(p) {
    let clone = JSON.parse(JSON.stringify(p));
  }
}