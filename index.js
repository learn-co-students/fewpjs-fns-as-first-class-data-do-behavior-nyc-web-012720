/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let hours = parseInt(time.split(":")[0])
  if (hours < 12){
    return "Good Morning"
  } if (hours >=12 && hours < 17){
    return "Good Afternoon"
  } if (hours >=17){
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  let greeting = document.getElementById("greeting")
  greeting.innerText = message
}
