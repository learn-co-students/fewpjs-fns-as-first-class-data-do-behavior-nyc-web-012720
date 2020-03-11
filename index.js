/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){

let hour = parseInt(timeString.split(":")[0])
let greeting = ""
  if (hour < 12) { return greeting = "Good Morning"
} if (hour >= 12 && hour < 17) {return greeting = "Good Afternoon"
} else {return greeting = "Good Evening"}

}
/* Write your implementation of displayMessage() */

function displayMessage(greeting) {
  const message = document.getElementById('greeting')
  message.innerText = greeting
}
