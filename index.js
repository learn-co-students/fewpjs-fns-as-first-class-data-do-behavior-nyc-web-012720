/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet(timeString){
  let splitString = timeString.split(":");

    if( Number(splitString[0]) < 12){
      return "Good Morning";
    }else if(Number(splitString[0]) > 17){
      return "Good Evening";
    }else {
      return "Good Afternoon";
    }
}

function displayMessage(testContent){
  let hiTag = document.querySelector("h1");

  hiTag.innerText = testContent;

  // inputTag.addEventListener('submit',inputTag, testContent);
}