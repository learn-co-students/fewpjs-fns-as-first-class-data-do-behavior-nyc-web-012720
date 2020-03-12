/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time)
{
  let st = time.split(':')
  let sti = parseInt(st[0])
  console.log(sti)
  
  if (sti < 12) 
  {
    return `Good Morning`
  }
  else if (sti < 17) 
  {
    return `Good Afternoon`
  }
  else 
  {
    return `Good Evening`
  }

}
/* Write your implementation of displayMessage() */

function displayMessage(testContent){
  let content = document.querySelectorAll('h1')[0]
  content.innerText = `${testContent}`
}
      
