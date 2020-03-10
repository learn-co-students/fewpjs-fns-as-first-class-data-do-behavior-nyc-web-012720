/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString) {
let hour = parseInt(timeString.split(0,2))
if (hour <12) {
  return "Good Morning"
} else {
  if (hour <17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
}

function displayMessage(message) {
  const greeting = document.getElementById('greeting')
  // let textnode = document.createTextNode(message);
  greeting.innerText = message
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
