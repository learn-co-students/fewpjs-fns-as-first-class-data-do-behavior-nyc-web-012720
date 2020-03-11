/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet (time) {
  let hr = parseInt(time)
  if ( hr < 12) return "Good Morning"
  if ( hr > 17) return "Good Evening"
  return "Good Afternoon"
}

/* Write your implementation of displayMessage() */
function displayMessage(string) { 
  const poop = document.getElementById('greeting')
  poop.innerText = `${string}`
}