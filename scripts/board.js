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
}