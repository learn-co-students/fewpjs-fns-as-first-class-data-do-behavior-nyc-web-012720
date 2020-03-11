/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {  //string === HH:MM time format
  let time = parseInt(timeString)
  if (time < 12) return "Good Morning"
  if (time < 17) return "Good Afternoon"
  else return "Good Evening"
}

function displayMessage(string){
    document.querySelector('#greeting').innerText = string
}


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
