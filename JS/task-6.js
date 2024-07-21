// Завдання 6
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази
// */

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

const innerCircle = document.getElementById("circle");

// Boolean flag to track whether circle is following mouse
let isFollowing = false;
let initialX = 0;
let initialY = 0;

// Event listener for mousemove on the document
document.addEventListener("mousemove", function (event) {
  if (isFollowing) {
    // Update circle position to follow the cursor
    innerCircle.style.left = event.pageX + "px";
    innerCircle.style.top = event.pageY + "px";
  }
});

// Event listener for mousedown on the circle
innerCircle.addEventListener("mousedown", function (event) {
  // Prevent default behavior to avoid text selection
  event.preventDefault();

  if (!isFollowing) {
    // If circle is not following, start following
    isFollowing = true;
    // Save initial mouse position relative to circle
    initialX = event.clientX - innerCircle.offsetLeft;
    initialY = event.clientY - innerCircle.offsetTop;
  } else {
    // If circle is currently following, stop following
    isFollowing = false;
  }
});

// Event listener for mouseup on the document
document.addEventListener("mouseup", function () {
  // If circle was following and mouse is released, reset to initial position
  if (isFollowing) {
    innerCircle.style.left = "50%";
    innerCircle.style.top = "50%";
    isFollowing = false;
  }
});
