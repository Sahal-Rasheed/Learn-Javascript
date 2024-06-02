/* setTimeout()
   setTimeout() can be used to run a function after a certain time delay. It sets a timer and executes a function once that timer is complete.
   setTimeout() method takes two parameters:
   - The first parameter is the function to be executed.
   - The second parameter is the time delay in milliseconds.
*/
// if no params - just pass the fn name - (as we do in addEventListener)
const displayGreetings = () => console.log("Hello, World!");
setTimeout(displayGreetings, 2000);
console.log("Timer started...");           // prints Hello, World! onto the console after a delay of 2 seconds.

// if params - pass the fn name and the params in a callback - () => fnName(param, ...) - (as we do in addEventListener)
const displayGreeting = (x) => console.log(x);
setTimeout(() => displayGreeting("Hi, World!"), 2000);
console.log("Timer started...");

/* clearTimeout() can be used to cancel a timer created using the setTimeout() method.
   The setTimeout() method returns a number value or it's identifier value. The clearTimeout() method accepts only that value as argument.
*/

/* setInterval() 
   setInterval() can be used to run a function repeatedly at regular intervals. It sets a timer and executes a function repeatedly at every given time interval.
   setInterval() method takes two parameters:
   - The first parameter is the function to be executed.
   - The second parameter is the time delay in milliseconds.
*/
const displayGreeting_ = () => console.log("Hello, World!");
setInterval(displayGreeting_, 5000);      // prints "Hello, World!" every 5 seconds

/* Note:-
   The setInterval method is very similar to the setTimeout method, the only difference being that setTimeout runs the function only once after the time delay, 
   while setInterval runs the function repeatedly after specified time interval.
*/

/* clearInterval() can be used to cancel a timer created using the setInterval() method.
   The function specified in the setInterval method keeps on running in a loop, unless we stop it. We can do this with the help of the clearInterval method. 
   The setInterval method returns a number value that can be used to identify the timer set by the method. The clearInterval method takes only one parameter, 
   the identifier value returned by the setInterval call that set the timer to be cancelled.
*/
const displayGreeting__ = () => console.log("Hello, World!");
const timerID = setInterval(displayGreeting__, 3000);
clearInterval(timerID);