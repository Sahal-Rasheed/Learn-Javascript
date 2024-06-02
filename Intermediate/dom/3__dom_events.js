/* Browser Events */

// 1. Listening to Browser Events - addEventListener()
/* The addEventListener accepts 2 parameters:
   - Name of the event.
   - A function which will run the code that we want to execute once that particular event occurs.
*/
// copy event: case 1
<p>Please Copy This</p>
let result = document.querySelector('p');
const handleCopy = () => {
  console.log("Data Copied");
}
result.addEventListener('copy', handleCopy);

// select event: case 2
<input value="Select me"></input>
let input = document.querySelector('input');
const handleSelect = (data) => {
  console.log(data);
}
input.addEventListener('select', () => handleSelect('Data Selected'));

// click event: inline appraoch
<h2>This text was not clicked ❌</h2>
let clickStatus = document.querySelector('h2');
clickStatus.addEventListener("click", (e) => clickStatus.textContent = "This text was clicked ✅");

/* Note:-
   When we use addEventListener, we can pass an anonymous function directly as the second parameter here there are 2 cases,
   case 1: when we dont have a parameter to pass in the fn as 1st example, you can directly provide the fn name as 2nd param in addEventListener - ('copy', handleCopy);
   case 2: when we need to pass a parameter to the fn as 2nd example, we need to wrap the fn call in another anonymous fn as 2nd example to avoid issues - ('select', () => handleSelect('Data Selected'));
*/

// mouseover event: without using addEventListener()
<>
    <div>
        <p></p>
    </div>
</>
let divElement = document.querySelector('div');
let pElement = document.querySelector('p');
divElement.onmouseover = () => {
    pElement.textContent = "Hello there!";
}

// some keyboard, mouse events:
let result_ = document.querySelector('input');
displayEventType = (event) => {
  console.log(event.type);
}
result_.addEventListener('keydown', displayEventType);
result_.addEventListener('keypress', displayEventType);
result_.addEventListener('keyup', displayEventType);
result_.addEventListener('mousedown', displayEventType);
result_.addEventListener('mouseup', displayEventType);
result_.addEventListener('click', displayEventType);

// event parameter
/* 
    The event parameter that we see in our addEventListener is an event object. It is automatically passed to all event handlers. 
    It helps in passing extra information like the target to the event handler. The object that triggers our particular event is called the target.
 */
<p>This p element is where we are listening for a hover event.</p>
let pElement_ = document.querySelector('p');
pElement_.addEventListener("mouseover", (event) => {
    event.target.style.color = "orangered";
});
pElement_.addEventListener("mouseout", (event) => {
    event.target.style.color = "inherit";
});

// Preventing Multiple Events using Conditions
/* In below example, when we attach eventlistener 'click' on root element (instead of individual btn elements) to change the color of btns inside the root element,
   that event (color change) not only get triggered when we `click` on the btns inside the root but also get triggered on root element itself;
   thus changing the color of div also. To prevent this, we need to check if the event target is btn or not before changing color and only trigger the event if so,
   we can do that using `event.target.tagName` conditionally inside the event listener fn.
*/
<div id="root">
</div>
let root = document.querySelector('#root');
root.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {         // conditionally checking if target is button only then adds click event
    e.target.classList.add("sunshine");
  }
});
for (let i = 0; i < 60; i++) {
  let btn = document.createElement('button');
  btn.textContent = "Event";
  root.append(btn);
}

// Event Propagation - When we have same event for parent and child element. 
<div id="parent-div">
  <button id="button">Click me!</button>
</div>
/* When an we add a event occurs, 
   like the click of a button element, the event added to the button element gets triggered.
   additionally, the events added to the parent element of the button and the parent element of the parent element and so on are all triggered too.
   This process is called as event propagation.
*/
const parentDiv = document.getElementById('parent-div');
const button = document.getElementById('button');
const handleDivEvent = () => {
    console.log("Div clicked!");
};
const handleButtonEvent = () => {
    console.log("Button clicked!");
}
parentDiv.addEventListener('click', handleDivEvent);
button.addEventListener('click', handleButtonEvent);
/* when we click on the button above, we can see that both Button clicked! and Div clicked! are shown in the console. 
   This means that the event on the button and the event on the div were both triggered. -> eventPropgation 
   **This basically happens when we have same event for parent and child element. 
   we can prevent this by using `event.stopPropagation()` inside the event handler. ex below:
*/
// const handleButtonEvent = (event) => {
//     console.log("Button clicked!");
//     event.stopPropagation();
// }   
// we have used event.stopPropagation() on the handleButtonEvent(). This stops the event from propagating further to the div element.

// Preventing Default Behaviour - (When we want to prevent default behaviour of element like form submission) - event.preventDefault()
<input type="text" placeholder="cannot type here"></input>
let myInput = document.querySelector('input');
myInput.addEventListener("keydown", function(event) {
    event.preventDefault();
});                                 //  we block its default behaviour of input element now, no one can type anything inside it.