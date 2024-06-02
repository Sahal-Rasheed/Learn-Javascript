/* Async-Await 
   `Async` function always returns a promise.
    - When we append the async keyword to a function, it means that the function will always return a promise.
    - Even if a function actually returns a non promise value, it will be wrapped in a resolved promise.
   
    `Await` keyword pauses the execution of its surrounding async fn untill the promise is settled.
    - The await keyword can only be used inside an async function.
    - It pause the execution of the function until a promise is resolved.
    - To use `await`, we have to create a new `async` function and use the `await` keyword in it and finally we have to call the `async` function.
*/

// Async function Syntax
const launchRocket = async () => {
   return "Rocket successfully launched!";
};
 
console.log(launchRocket());         // <--- Promise { <pending> } ---> coz, promise not resolved yet

launchRocket().then(successMessage => {
   console.log(successMessage);      // <--- Promise { <resolved> 'Rocket successfully launched!' } ---> coz, we used .then to handle it
});

/* In above example,
   The `launchRocket` function is a async fn => returns a promise. We logged the promise object to the console and it's pending (bcoz promise not resolved yet).
   We used the `then` method to handle the promise object and resolved and then promise resolved, its value is passed to the callback function.
   This approach we used before to handle promises (there we create the promises), here we just to use `async` keyword to the fn and it will return a promise.
   But here still the code doesn't look good as we know this approach may lead to `chaining of promises` if we want to call `launchRocket` fn synchronously. 
   To solve this issue of promise chain we can use `await` keyword. 
   
   Note:- `await` keyword should only used in `async` fn, but `then` can be used to handle promises from any fn, including from `async` fns too.
*/


// Using `await` keyword
const assembleRocket = () =>
   new Promise((resolve, reject) => {
     setTimeout(() => {
       console.log("Assembled rocket");
       resolve();
     }, 1500);
   });
 
const fuelRocket = () =>
   new Promise((resolve, reject) => {
     setTimeout(() => {
       console.log("Fueled rocket");
       resolve();
     }, 2000);
   });
 
const launchRocket_ = () =>
   new Promise((resolve, reject) => {
     setTimeout(() => {
      const launchSuccess = true;
      if (launchSuccess) {
         resolve("Rocket launched!");
      } else {
         reject("Rocket launch failed.");
      }
     }, 2000);
   });
 
const initiateRocketLaunch = async () => {
   await assembleRocket();
   await fuelRocket();
   const launchStatus = await launchRocket();        // to get the value of the resolved promise assign it to a variable
   console.log(launchStatus);
};
initiateRocketLaunch();
// Code Output:
// Assembled rocket
// Fueled rocket
// Rocket launched!

/* In above example,
   We have created 3 different functions to simulate the rocket launch process, `assembleRocket`, `fuelRocket` and `launchRocket` fns return a promise and we want to 
   execute them one after another. We are using `await` keyword here to avoid `chaining of promises` issue we discussed before. For this we have created a new
   function called `initiateRocketLaunch` which is an async fn and we are calling the `assembleRocket`, `fuelRocket` and `launchRocket` fns inside it using `await` keyword.
   As `await` keyword can be only used inside an async fn, we had to make `initiateRocketLaunch` fn an async fn and then we use `await` keyword inside it and finally
   call the `initiateRocketLaunch` fn to execute the process.

   Note:- to get the value of the resolved promise in this approach `as we get in .then((resolved_value)) approach` we can use: `const variable = await fnName();`
*/


/* Error Handling in `async/await` - (try...catch)
   - to handle errors in `async/await` we can use `try/catch` block.
*/
const placeOrder = noOfItems =>
   new Promise((resolve, reject) => {
     setTimeout(() => {
       if (noOfItems < 5) reject("Minimum 5 items required.");
       else resolve("Order placed.");
     }, 5000);
   });
 
const showOrderStatus = () => new Promise(resolve =>
   setTimeout(() => resolve("Order is dispatched"), 1000)
);
 
const checkout = async () => {
   try {
     const message = await placeOrder(2);
     console.log(message);
     const status = await showOrderStatus();
     console.log(status);
   } catch (error) {
     console.log(error);
   }
 };
checkout();
// Code Output:
// Minimum 5 items required.

/* In above example,
   We used `try/catch` block to handle the error. Its similar like .then and .catch of promises. In promise chains the `then` handles the resolved promise and we use 
   single `catch` to handle the rejected promises. Similarly in `async/await` we use `try/catch` block, inside the `try` block we handle the resolved promises using await and in the 
   `catch (err)` block will handle the rejected promises.

   here, `placeOrder` fn returns a rejected promise as "no.ofitems < 5", since its a rejected promise we will handle in in the `catch` block and thus `showOrderStatus` fn will not execute.
   if `placeOrder` fn returns a resolved promise ("no.ofitems > 5"), then since its a resolved promise we will handle in the `then` block and the next line -> `showOrderStatus` fn will execute.
*/
