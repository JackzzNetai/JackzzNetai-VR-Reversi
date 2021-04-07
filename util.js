function findNearestGridCenter(x, y) {
  if (x <= -4 || x => 4 || y <= -4 || y >= 4) { // in case of edge of the board
    return null;
  }
  
  if (round(x) === x || round(y) === y) { // right in the middle of two grid (extremely rare case)
    return null;
  }
  
  if (x < -3.5) {
    x = 3.5
  }
   else if (x > 3.5)
}