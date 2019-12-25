const button = document.querySelector(".button");
let { width, height, x: buttonX, y: buttonY } = button.getBoundingClientRect(); // gives you width, height, left-X,top-y of the button

buttonX = buttonX + width / 2; //  center point of button on x-axis
buttonY = buttonY + height / 2; //  center point of button on y-axis

/*************** Functions ***************/

let distance = width;
let mouseHasEntered = true;
let mouseIsInButtonTerritory;

function mouseMove(e) {
  const x = e.x; // current x of cursor
  const y = e.y; // current y of cursor

  const leftBorderLine = buttonX - distance;
  const rightBorderLine = buttonX + distance;
  const topBorderLine = buttonY - distance;
  const bottomBorderline = buttonY + distance;
  const xWalk = (x - buttonX) / 2; // the distance to move the button when mouse moves on X axis
  const yWalk = (y - buttonY) / 2; // the distance to move the button when mouse moves on Y axis

  mouseIsInButtonTerritory =
    x > leftBorderLine &&
    x < rightBorderLine &&
    y > topBorderLine &&
    y < bottomBorderline; // becomes true if  mouse is inside all of these border-line

  if (mouseIsInButtonTerritory) {
    if (mouseHasEntered) {
      // this must happen only once to create outside borderline
      //creating another level borderline by incresing distance;
      // while cursor is returing the button comes out of nearest border-line and return from this borderline
      distance = distance + distance;
      mouseHasEntered = false;
    }
    catchCursor(xWalk, yWalk); // call the function when mouse in in the button's territory
  } else {
    resetPositon();
  }
}

function catchCursor(xWalk, yWalk) {
  // translates the button in the direction where cursor is.
  button.style.transform = `translate(${xWalk}px, ${yWalk}px)`;
}

function resetPositon() {
  // resets the postion of the button as it was initial.
  button.style.transform = `translate(${0}px, ${0}px)`;
  mouseHasEntered = true;
  // when button is return to it's position (mouseHasEntered = true) lets to increase the initial borderline of button for the next time
}

/*************** Event-handler ***************/

window.addEventListener("mousemove", mouseMove);
window.addEventListener("mouseout", resetPositon);


