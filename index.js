/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
// take the time in string format, ex: 8:40 or 19:00
// convert it into an int. The minutes get dropped automatically
function greet(str){
  str = parseInt(str);
  if (str<12){
    return "Good Morning"
  }
  if (str>12 && str<17){
    return "Good Afternoon"
  }
  if (str>17){
    return "Good Evening"
  }
}


/* Write your implementation of displayMessage() */
function displayMessage(str){
  document.getElementById('greeting').innerText = str;
}