/* Manipulating DOM Elements */

// 1. Updating Text Inside an Element - textContent | innerText, also use innerHTML but its not meant for this.
<>
    <p id="message">Congratulations</p>
</>
let message = document.querySelector('#message');
message.textContent = "Better greetings";          // Better greetings
message.innerHTML = "Better greetings";
/* Note:- textContent vs innerText
   The innerText property returns the visible text inside the element. Whereas textContent returns the complete text, whether if its hidden from view or not.
*/

// 2. Updating HTML Inside an Element - innerHTML
/* We can get access to all the HTML code nested inside an HTML element using its innerHTML property. */
<>
    <p>
        Our Friends
        <span>in </span>
        <span>this </span>
        <span>ecosystem</span>
    </p>
</>
let Info = document.querySelector('p');
console.log(Info.innerHTML);              // In the console, we get all the HTML & Content nested inside the p element.
Info.innerHTML = "Hello World";           // Now all the HTML & Content is replaced with "Hello World" text

/* We can get access to the HTML element and all the HTML code nested inside that HTML element using its outerHTML property. */
console.log(Info.outerHTML);              // In the console, we get a string representing the p element and all the nested elements inside it.

/* Note:- InnerHTML vs OuterHTML
   The innerHTML property will return to us all the HTML that is nested inside the element. 
   The outerHTML property, on the other hand, will return to us not only the HTML that is nested inside the element, but also the element itself.
*/

// 3. Adding Class to an Element - .classList.add("class_name"), .classList to get all classes of an element.
/* We can add class values to an element using the classList property.
   The classList property returns a list of all the class attributes of an element. 
*/
<>
    <h1 class="highlight">Our app will take you places!</h1>
</>
/* - css -  
.highlight {
    color: orangered;
}

.complete {
    text-decoration: line-through;
}
*/
let appHeading = document.querySelector('h1');
console.log(appHeading.classList);        // In the console, we get a list of all the class attributes of the h1 element.

appHeading.classList.add('complete');     // Adding a class name `complete` which we define in the css above to the existing classes of h1 element.
console.log(appHeading.classList);        // The `highlight` and the `complete` classes are now present on the h1 element.
/* Note:- to add multiple classes at same time - myElement.classList.add('primary', 'background', ...) */

// 4. Removing Class from an Element - .classList.remove("class_name", ...), same like add shown above.

// 5. Creating Elements using document.createElement()
const newPElement = document.createElement('p');
newPElement.textContent = "Hi, there!";
console.log(newPElement);

// 6. Append HTML Element - .appendChild()
const container = document.querySelector('body');
const newDiv = document.createElement('div');
container.appendChild(newDiv);            // Appending the newly created div element to the body element

// 7. Insert HTML Element Before Another - .insertBefore()
/*    The insertBefore method is called on the parent element and takes two arguments:
      The element that has to be inserted.
      The element before which we want to place the newly positioned element or position. 
*/
let container_ = document.querySelector('section');
let allInputs = document.querySelectorAll('input');
let newButton = document.createElement('button');
container_.insertBefore(newButton, allInputs[1]);

// 8. Remove HTML Element - remove()
<>
    <p>This paragraph will be removed.</p>
    <p>This paragraph will not be removed.</p>
</>
let allParagraphs = document.querySelectorAll('p');
allParagraphs[0].remove();

// 9. Style Property (for styling elements) - element.style
let squareDiv = document.querySelector('div');
squareDiv.style.width = '250px';
squareDiv.style.fontSize = '64px';
/* To set multiple style properties at once like inline css we can use `style.cssText` */
squareDiv.style.cssText = 'width: 250px; font-weight: 700';

// 10. Get Attributes for an Element
/* <form id="user-info">
    <input type="text" class="user-input" value="Name">
    <input type="text" class="user-input" value="Email">
    <input type="text" class="user-input" value="Address">
    <input type="submit" value="submit">
</form> 
*/
let allUserInputs = document.getElementsByClassName('user-input');
allUserInputs[0].type       // text
allUserInputs[0].className  // user-input
allUserInputs[0].value      // Name

// 11. Set Attributes for an Element - element.setAttribute()
/* we are setting the src attribute for the img element below. When using setAttribute, we need to provide the property name and the value of the property.
<div>
  <img>
</div> 
*/
let imgElement = document.querySelector('img');
imgElement.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/6/65/The_station_pictured_from_the_SpaceX_Crew_Dragon_1.jpg");

// more -> https://www.w3schools.com/jsref/dom_obj_all.asp