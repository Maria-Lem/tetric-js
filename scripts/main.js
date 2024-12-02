const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Set canvas dimension
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Set scale
// The CanvasRenderingContext2D.scale() method of the Canvas 2D API 
//adds a scaling transformation to the canvas units horizontally and/or vertically.
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

// create new board from Board class
let board = new Board();

function play() {
  board.reset();
  let piece = new Piece(ctx);

  piece.draw();
  board.piece = piece;

  console.table(board.grid);
}

const moves = {
// Для перемещения тетрамино мы будем стирать старое отображение и копировать его в новых координатах. Чтобы получить эти новые координаты, сначала скопируем текущие, а затем изменим нужную (x или y) на единицу.
//Так как координаты являются примитивными значениями, мы можем использовать spread-оператор, чтобы перенести их в новый объект.

  [KEY.LEFT]: p => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
  [KEY.DOWN]: p => ({ ...p, y: p.y + 1 }),
  [KEY.SPACE]: p => ({ ...p, y: p.y + 1 }),
};

document.addEventListener('keydown', event => {
  console.log(event.key)
  if (moves[event.key]) {
    event.preventDefault();

    // new coordinates of a piece
    let p = moves[event.key](board.piece);

    if (event.key === KEY.SPACE) {
      while (board.valid(p)) {
        board.piece.move(p);

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        board.piece.draw();

        p = moves[KEY.DOWN](board.piece);
      }
    } else if (board.valid(p)) { // checking new position
      
      board.piece.move(p);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      board.piece.draw();
    }
  }
});

// const getRecipies = () => {
//   return fetch(`https://www.themealdb.com/api/json/v1/1/random.php`, {
//     method: 'GET',
//   })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error))
// }

// getRecipies();