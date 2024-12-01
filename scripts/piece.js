class Piece {
  constructor(ctx) {
    this.ctx = ctx;
    this.color = 'blue';
    this.shape = [
      [2, 0, 0],
      [2, 2, 2],
      [0, 0, 0]
    ];

    // Initial position
    this.x = 3;
    this.y = 0;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        // this.x, this.y - top left corner of a piece on the board
        // coordinates of a cell relative to the piece matrix
        // this.x + x - coordinates of a cell on the board
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }

  move(p) {
    this.x = p.x;
    this.y = p.y;
  }
}