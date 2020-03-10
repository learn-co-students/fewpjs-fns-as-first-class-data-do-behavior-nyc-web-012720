/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(time){ 
  const beforeHour = time.split(":")[0]
    let hours = parseInt(beforeHour, 10);
    if (hours < 12){
      return "Good Morning"
    }
    if (hours > 17) {
      return "Good Evening"
    } else {
      return "Good Afternoon"
    }
}
/* Write your implementation of displayMessage() */
 function displayMessage(msg) {
    document.getElementById("greeting").innerText = msg;
  }
  
