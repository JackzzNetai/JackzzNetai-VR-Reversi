// pre: -4 < x < 4 and -4 < z < 4
function findNearestGridCenter(x, z) {
  return [findClosestHalfs(x), findClosestHalfs(z)];
}

// pre: -4 < x < 4
function findClosestHalfs(x) {
  if (x < -3.5) {
    x = -3.5;
    return x;
  } else if (x > 3.5) {
    x = 3.5;
    return x;
  }
  
  let closestInt = round(x);
  let smallerCandidate = closestInt - 0.5;
  let largerCandidate = closestInt + 0.5;
  
  if (x - smallerCandidate < largerCandidate - x) {
    return smallerCandidate;
  }
  return largerCandidate;
}