/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let timeInteger = time.replace(":", "");
  if (timeInteger < 1200) {
    return "Good Morning";
  } 
  else if (1200 <= timeInteger && timeInteger <= 1700){
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}

function displayMessage(string) {
  document.getElementById('greeting').innerText = string;
}
