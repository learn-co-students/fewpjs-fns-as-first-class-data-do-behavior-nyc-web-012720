/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet (timeStr) {
  const time = parseInt(timeStr, 10)

  if (time < 12) return "Good Morning";
  if (time < 17) return "Good Afternoon";
  if (time >= 18) return "Good Evening"
}

function displayMessage(Str) {
  document.getElementById("greeting").innerText = Str
}