/* DOM */

/* 
    <html>
    <head>
        <title>Space Race!</title>
    </head>
    <body>
        <h1>First Space mission</h1>
        <p>
        On Oct. 4, 1957, the U.S.S.R launched the first artificial satellite, <span style="font-weight: 700">Sputnik 1</span>, into space.
        </p>

        <h1>Second Space mission</h1>
        <p>
        On April 12, 1961, the Russian <span style="font-weight: 700">Lt. Yuri Gagarin</span> became the first human to orbit Earth in Vostok 1.
        </p>
    </body>
    </html>
    --------------------------------------------------------------------------------------------------------------------------------------------
                                                                    DOM TREE
    --------------------------------------------------------------------------------------------------------------------------------------------
                 <html>
                   |
           +-------+-------+
           |               |
         <head>          <body>
           |               |
        <title>         +--+--+
                        |     |
                       <h1>  <p>
                              |
                            <span>
                             
*/

/* DOM Selectors */
// Using Id: -> getElementById
<p class="textual-details" id="work-inspiration">Win!</p>
let currentInspiration = document.getElementById('win-inspiration');
currentInspiration.style.fontSize = '32px';
console.log(currentInspiration);            // <p class="textual-details" id="win-inspiration" style="font-size: 32px;">Win!</p>

// Using Tag Name: -> getElementsByTagName
/* getElementsByTagName will select all the HTML elements which match the provided tag name.
   The method returns an array-like list of elements. So, we can access a specific element using the bracket notation, []. 
   But, none of the array methods will work though. If you want to use the array methods, you can convert the list to an array using the Array.from() method.
*/
<>
    <p>A paragraph that states nothing new.</p>
    <p>A paragraph that states nothing new.</p>
    <p>A paragraph that could have been interesting.</p>
    <p>This paragraph doesn't inspire.</p>
</>
let allParagraphs = document.getElementsByTagName('p');
for(let para of allParagraphs) {
  para.style.fontSize = "24px";
}

// Using Class Name: -> getElementsByClassName
/* getElementsByClassName will select all the HTML elements which match the provided class name.
   The method returns an array-like list of elements. So, we can access a specific element using the bracket notation, []. 
   But, none of the array methods will work though. If you want to use the array methods, you can convert the list to an array using the Array.from() method.
*/
<>
    <h2 class="heading">The most inspiring words</h2>
    <p class="inspirational-words">Win!</p>
    <p class="inspirational-words">You are the one!</p>
    <p>Deadline!</p>
</>
let inspirationalWords = document.getElementsByClassName('inspirational-words');
for(let inspiration of inspirationalWords) {
  inspiration.style.fontWeight = "700";
  inspiration.style.textTransform = "uppercase";
}

// Using querySelector: -> querySelector *
/* querySelector will select the first HTML element which matches the provided query and ignore the rest.
   This is a versatile selector and can match using any of the CSS selectors. It can use class name, tag name, id name or any complex selector too.
*/
<>
  <h2>Interesting Choice of Words</h2>
  <p>A paragraph that states nothing new.</p>
  <p class="interesting-paragraph">A paragraph that could have been interesting.</p>
  <p id="brutal-paragraph">This paragraph <span>doesn't</span> inspire.</p>
</>
let firstParagraph = document.querySelector('p');                                 // tag name
let secondParagraph = document.querySelector('.interesting-paragraph');           // class name (.)
let thirdParagraph = document.querySelector('#brutal-paragraph');                 // id (#)
let inspirationConfirmation = document.querySelector('#brutal-paragraph>span');   // complex selector (like we use in css)

// Using querySelectorAll: -> querySelectorAll *
/* querySelectorAll will select all the HTML elements which match the provided query. 
   This is a versatile selector and can match elements using any of the CSS selectors, including class names, tag names, id names or any complex selectors too.
   The method returns an array-like list of all the matched DOM elements. You can iterate over it using loops, or you can convert it to an array using Array.from().
*/
let allParagraphs_ = document.querySelectorAll('p');
allParagraphs_.forEach(para => {
  para.style.border = "3px solid crimson";
});
console.log(allParagraphs_.length)

// Selecting Parent Element: -> parentElement
/* parentElement property will return the parent element of the selected element. */
/*  <section>
      <p>Nothing to note here.</p>
    </section> 
*/
let section = document.querySelector('section');
let p = document.querySelector('p');
let parentOfP = p.parentElement;       // getting parentElement of p
console.log(
  `The '${p.parentElement.nodeName.toLowerCase()}' element is the parent of the '${p.nodeName.toLowerCase()}' element.`
);                                     // The 'section' element is the parent of the 'p' element.

// Selecting Sibling Element: -> nextElementSibling & previousElementSibling
/* Sibling elements share the same parent. To find a sibling element immediately before or immediately after an element,
   we use the nextElementSibling or previousElementSibling property.
*/
<>
  <div>
    <a href="#">A link to nowhere.</a>
    <h1> Nothing to note here.</h1>
    <strong> Absolutely nothing of value in this div.</strong>
  </div>
</>
let h1 = document.querySelector('h1');
let nextElementSiblingOfh1 = h1.nextElementSibling;        // Next Sibling of the h1 element: strong 
let prevElementSiblingOfh1 = h1.previousElementSibling;    // Previous Sibling of the h1 element: a 

// Selecting Child Elements: -> children
/* To select all the child elements of a particular element, we can use the children property.
   `children` property returns a list of all child elements of an element and we can access each one of them using either brackets [] or by looping over the list.
   Array methods wont work. If you want to use the array methods, you can convert the list to an array using the Array.from() method.
*/
<>
  <section>
    <a href="#">A link to nowhere.</a><span> Nothing to note here.</span><strong> Absolutely nothing of value in this div.</strong>
  </section>
</>
let section_ = document.querySelector('section');
let children = section_.children;
for(let child of children) {
  console.log(child.nodeName.toLowerCase());    // a span strong
}

// Selecting Dataset Attributes: -> element.dataset.keyName
/* The dataset attributes of element can be selected using JavaScript. To do this, we have to convert their values into camel case.
   For example, 
   - if we have a data-name attribute, we can access it using the dataset.name property.
   - if we have data-user-name attribute, we can access it using the dataset.userName property.
*/
<>
  <div
    id="user"
    data-test="1034"
    data-user-name="Willy Wonka"
  >
    Willy Wonka
  </div>
</>
const divElement = document.querySelector('#user');
const userName = divElement.dataset.userName;
const test = divElement.dataset.test;
console.log(userName);                // Willy Wonka 
console.log(test);                    // 1034

/* Note:-
   HTMLCollection returned by getElementsByTagName() and getElementsByClassName() methods and nodeList returned by querySelectorAll() method,
   here both of them are not real arrays, so we can't use any array methods on them without converting them in to Array using Array.from() method.
   We can iterate over them using loop and can access them using []s. For convinience forEach method is available on both by default no other array methods
   are available by default.
*/
/* Converting HTMLCollection | NodeList to Array: */
const Divs_ = document.getElementsByClassName('div');
const divArray_ = Array.from(Divs_);
// |
const Divs = document.querySelectorAll('div');
const divArray = Array.from(Divs);

// more - https://www.w3schools.com/jsref/dom_obj_all.asp