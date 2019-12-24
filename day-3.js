const button = document.querySelector(".button");
let { width, height, x: buttonX, y: buttonY } = button.getBoundingClientRect();

buttonX = buttonX + width / 2; // horizontal x of
buttonY = buttonY + height / 2;

/*************** Functions ***************/

let distance = width;
let mouseEntered = true;

function mouseMove(e) {
  const x = e.x; // current x of cursor
  const y = e.y; // current y of cursor
  const xLeft = buttonX - distance;
  const xRight = buttonX + distance;
  const yTop = buttonY - distance;
  const yBottom = buttonY + distance;

  const mouseIsInButtonTerritory =
    x > xLeft && x < xRight && y > yTop && y < yBottom;

  const xWalk = (x - buttonX) / 2;
  const yWalk = (y - buttonY) / 2;

  if (mouseIsInButtonTerritory) {
    if (mouseEntered === true) {
      distance = distance + distance;
      mouseEntered = false;
    }
    catchCursor(xWalk, yWalk);
  } else {
    resetPositon();
  }
}

function catchCursor(xWalk, yWalk) {
  button.style.transform = `translate(${xWalk}px, ${yWalk}px)`;
}

function resetPositon() {
  button.style.transform = `translate(${0}px, ${0}px)`;
  mouseEntered = true;
}

/*************** Event-handler ***************/

window.addEventListener("mousemove", mouseMove);
window.addEventListener("mouseout", resetPositon);
