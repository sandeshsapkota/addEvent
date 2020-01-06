const button = document.querySelector(".button__like-text");
const cCircle = document.querySelector(".c-circle");
let {
  width,
  height,
  x: centerPointX,
  y: centerPointY
} = button.getBoundingClientRect(); // gives you width, height, left-X,top-y of the button

centerPointX = centerPointX + width / 2; //  center point of button on x-axis
centerPointY = centerPointY + height / 2; //  center point of button on y-axis

/*************** Functions ***************/

let distance = 90;
let mouseHasEntered = true;
let mouseIsInButtonTerritory;

function mouseMove(e) {
  const x = e.x; // current x of cursor
  const y = e.y; // current y of cursor
  const leftBorderLine = centerPointX - distance;
  const rightBorderLine = centerPointX + distance;
  const topBorderLine = centerPointY - distance;
  const bottomBorderline = centerPointY + distance;
  const xWalk = (x - centerPointX) / 2; // the distance to move the button when mouse moves on X axis
  const yWalk = (y - centerPointY) / 2; // the distance to move the button when mouse moves on Y axis

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
      distance = 160;
      mouseHasEntered = false;
      // cCircle.classList.add("c-circle--big");
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
  if (!mouseHasEntered) distance = 80;
  mouseHasEntered = true;
  // when button is return to it's position (mouseHasEntered = true) lets to increase the initial borderline of button for the next time
  // cCircle.classList.remove("c-circle--big");
}

function positionTheCircle(e) {
  cCircle.style.left = `${e.x}px`;
  cCircle.style.top = `${e.y}px`;
  if (mouseIsInButtonTerritory || e.target.classList.contains("nav__link")) {
    console.log("hi");
    cCircle.classList.add("c-circle--big");
  } else {
    cCircle.classList.remove("c-circle--big");
  }
}

/*************** Event-handler ***************/

window.addEventListener("mousemove", function(e) {
  positionTheCircle(e);
  mouseMove(e);
});
window.addEventListener("mouseout", resetPositon);
