const BOARD_SIDE = 8;
const allDirections = [
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1]
];
const associatedFlipDirection = [
  { x: 0, y: 0, z: 180 },
  { x: 0, y: -90, z: 180 },
  { x: -180, y: 0, z: 0 },
  { x: 0, y: 90, z: -180 },
  { x: 0, y: 0, z: -180 },
  { x: 0, y: -90, z: -180 },
  { x: 180, y: 0, z: 0 },
  { x: 0, y: 90, z: 180 }
];

class Game {
  constructor() {
    (this.turn = 1),
      (this.pos = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, false, true, null, null, null],
        [null, null, null, true, false, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null]
      ]),
      (this.currPlayer = true), // true = black, false = white
      (this.gameset = false),
      (this.result = null); // winner
  }

  // increment turn by 1 and decide the player for the next turn
  nextTurn() {
    if (this.hasValidMove(!this.currPlayer)) {
      this.togglePlayer();
    } else {
      if (!this.hasValidMove(this.currPlayer)) {
        // both player has no valid moves
        this.gameset = true;
        this.decideWinner();
        return;
      }
    }
    this.turn += 1;
  }

  togglePlayer() {
    this.currPlayer = !this.currPlayer;
    document.getElementById("turn_indicator").emit("flipEvent", {
      flipDirection: { x: 540, y: 0, z: 0 },
      flipDuration: 300
    });
  }

  // return true if player has valid moves,
  // or false otherwise
  hasValidMove(player) {
    for (let i = 0; i < BOARD_SIDE; i++) {
      for (let j = 0; j < BOARD_SIDE; j++) {
        if (this.pos[i][j] == null) {
          if (this.isValidMove([i, j], player)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  // move is an array of length 2
  // pre: move is within the valid range
  isValidMove(move, player) {
    if (this.getPieceAt(move) != null) {
      return false;
    }

    for (let direction of allDirections) {
      let currGrid = move;
      let currPiece = null;
      let theOtherColorDetected = false;

      do {
        currGrid = [currGrid[0] + direction[0], currGrid[1] + direction[1]];
        currPiece = this.getPieceAt(currGrid);
        if (!theOtherColorDetected && currPiece == !player) {
          theOtherColorDetected = true;
        }
      } while (currPiece != null && currPiece !== player);

      if (currPiece == null) {
        continue;
      }

      if (theOtherColorDetected) {
        return true;
      }
    }

    return false;
  }

  getPieceAt(grid) {
    if (
      grid[0] < 0 ||
      grid[0] > BOARD_SIDE - 1 ||
      grid[1] < 0 ||
      grid[1] > BOARD_SIDE - 1
    ) {
      return null;
    }
    return this.pos[grid[0]][grid[1]];
  }

  // apply a move and change the pos correspondingly
  // return a list of pieces to be flipped and with
  // each's own flip direction
  // pre: move is a valid move
  applyMove(move, player) {
    this.pos[move[0]][move[1]] = player;

    let result = new Array(allDirections.length);

    for (let i = 0; i < allDirections.length; i++) {
      let currGrid = move;
      let currPiece = null;

      do {
        currGrid = [
          currGrid[0] + allDirections[i][0],
          currGrid[1] + allDirections[i][1]
        ];
        currPiece = this.getPieceAt(currGrid);
      } while (currPiece != null && currPiece !== player);

      let eachResult = [];
      if (currPiece != null) {
        currGrid = [
          move[0] + allDirections[i][0],
          move[1] + allDirections[i][1]
        ];
        currPiece = this.getPieceAt(currGrid);

        while (currPiece !== player) {
          this.pos[currGrid[0]][currGrid[1]] = player;
          eachResult.push([
            document.getElementById("" + currGrid[0] + currGrid[1]),
            associatedFlipDirection[i]
          ]);
          currGrid = [
            currGrid[0] + allDirections[i][0],
            currGrid[1] + allDirections[i][1]
          ];
          currPiece = this.getPieceAt(currGrid);
        }
      }

      result[i] = eachResult;
    }
    return result;
  }

  decideWinner() {
    let falseNum = 0;
    let trueNum = 0;
    for (let i = 0; i < BOARD_SIDE; i++) {
      for (let j = 0; j < BOARD_SIDE; j++) {
        if (this.pos[i][j] == true) {
          trueNum += 1;
        } else if (this.pos[i][j] == false) {
          falseNum += 1;
        }
      }
    }

    if (trueNum > falseNum) {
      this.result = true;
    } else if (falseNum > trueNum) {
      this.result = false;
    }
  }

  annouceWinner() {
    if (this.result == true) {
      alert("Black wins");
      console.log("Black wins");
    } else if (this.result == false) {
      alert("White wins");
      console.log("White wins");
    } else {
      alert("Tie");
      console.log("Tie");
    }
  }

  // xzPair: [x, z]
  convertXZCoordinateToPosIndex(xzPair) {
    return [xzPair[1] + 4 - 0.5, xzPair[0] + 4 - 0.5];
  }

  getGridByPieceId(id) {
    return [parseInt(id.substring(0, 1)), parseInt(id.substring(1, 2))];
  }

  withinBoardArea(x, z) {
    return -4 < x && x < 4 && -4 < z && z < 4;
  }
}
