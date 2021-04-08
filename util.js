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

function makeWhitePiece(id) {
  return (<a-entity id=eval(id) up-flip-down slide-up-down flip-emitter>
      <a-cylinder
        position="0 .05 0"
        radius="0.4"
        height="0.1"
        color="#FFFFFF"
      ></a-cylinder>
      <a-cylinder
        position="0 -.05 0"
        radius="0.4"
        height="0.1"
        color="#000000"
      ></a-cylinder>
    </a-entity>);
}