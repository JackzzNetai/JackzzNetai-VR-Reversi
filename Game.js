const BOARD_SIDE = 8;

class Game {
  constructor() {
    this.turn = 1,
    this.pos = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, false, true, null, null, null],
      [null, null, null, true, false, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ],
    this.currPlayer = true, // true = black, false = white
    this.gameOver = false,
    this.result = null // winner
  }
  
  // increment turn by 1 and decide the player for the next turn
  nextTurn() {   
    if (this.hasValidMove(!this.currPlayer)) {
      this.currPlayer = !this.currPlayer;
    } else {
      if (!this.hasValidMove(this.currPlayer)) { // both player has no valid moves
        this.gameset = true;
        this.result = this.decideWinner();
        return;
      }
    }
    this.turn += 1;
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
  isValidMove(move, player) {
    return true;
  }
  
  decideWinner() {
    let falseNum = 0;
    let trueNum = 0;
    for (let i = 0; i < BOARD_SIDE; i++) {
      for (let j = 0; j < BOARD_SIDE; j++) {
        if (this.pos[i][j] === true) {
          trueNum += 1;
        } else if (this.pos[i][j] === false) {
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
      console.alert("Black wins");
    } else if (this.result == false) {
      console.alert("White wins");
    } else {
      console.alert("Tie");
    }
  }
}