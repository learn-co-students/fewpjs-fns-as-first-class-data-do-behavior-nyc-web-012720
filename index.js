/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
const greet = function(string){
  // let time = string.slice(0,2)
  const parsed = parseInt(string);
  if (parsed < 12 ) 
    return "Good Morning"
  if (parsed > 17 ) 
    return "Good Evening"
  else
    return "Good Afternoon"

}


const displayMessage = function(text){
  document.getElementById("greeting").innerText = text


}