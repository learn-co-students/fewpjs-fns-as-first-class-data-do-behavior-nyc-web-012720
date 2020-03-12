/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
};

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {

  let timeSplit = timeString.split(":");
  let parsedHour = parseInt(timeSplit[0]);

  if (parsedHour < 12) {
    return "Good Morning"
  } if (parsedHour > 17) {
    return 'Good Evening'
  } 
  return 'Good Afternoon'
};

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.getElementById('greeting').innerText = string
};