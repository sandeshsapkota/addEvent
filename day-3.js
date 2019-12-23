const button = document.querySelector(".button");
const {
  x: buttonX,
  y: buttonY,
  width,
  height
} = button.getBoundingClientRect();

/*************** Functions ***************/

let xLeft, xRight, yTop, yBottom, mouseIsInButtonTerritory;

function mouseMove(e) {
  const x = e.x;
  const y = e.y;
   xLeft = buttonX - width;
   xRight = buttonX + width + width;
   yTop = buttonY - height;
   yBottom = buttonY + height + height;

  mouseIsInButtonTerritory = x > xLeft && x < xRight && y > yTop && y < yBottom;

  const xWalk = (x - buttonX) / 2;
  const yWalk = (y - buttonY) / 2;

  if (mouseIsInButtonTerritory) {
    console.log(xLeft)

    xLeft = xLeft - 40;
    xRight = xRight + 40;
    yTop = yTop - 40;
    yBottom = yBottom + 40;
    console.log(xLeft)
    catchCursor(xWalk, yWalk);
  mouseIsInButtonTerritory = x > xLeft && x < xRight && y > yTop && y < yBottom;

  } else {
    resetPositon();
  }
}

function catchCursor(xWalk, yWalk) {
  button.style.transform = `translate(${xWalk}px, ${yWalk}px)`;
}

function resetPositon() {
  button.style.transform = `translate(${0}px, ${0}px)`;
}

/*************** Event-handler ***************/

window.addEventListener("mousemove", mouseMove);
window.addEventListener("mouseout", resetPositon);
