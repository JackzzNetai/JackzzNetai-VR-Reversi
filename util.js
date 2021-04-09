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
  
  let closestInt = Math.round(x);
  let smallerCandidate = closestInt - 0.5;
  let largerCandidate = closestInt + 0.5;
  
  if (x - smallerCandidate < largerCandidate - x) {
    return smallerCandidate;
  }
  return largerCandidate;
}

// coefficient = [a, b, c]
// origin = [x0, y0, z0]
// direction = [xd, yd, zd]
// This function find the intersection of
// plane: ax+by+cz=d with ray [x0 y0 z0]^T + l * [xd yd zd]^T 
function findIntersection(coefficient, d, origin, direction) {
  let l = (d - dotP(coefficient, origin)) / dotP(coefficient, direction);
  
}

// calculate the dot product of v1 and v2
// pre: v1 and v2 are array of same length
function dotP(v1, v2) {
  let sum = 0;
  for (let i = 0; i < v1.length; i++) {
    sum += v1[i] * v2[i];
  }
  return sum;
}

// return origin + l * direction
// pre: origin and direction are array of same length
function coordinateOnRayAtLength(origin, direction, l) {
  let result = 
}

// TODO: Possible to define board, turn_indicator, as "undeletable"?