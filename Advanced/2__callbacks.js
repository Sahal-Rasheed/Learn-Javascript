/* Callbacks 
   - Callbacks are functions that are passed as arguments to other functions.
   - Callbacks are mainly used when an operation needs to be performed only after the execution of an asynchronous function.
   -- "Asynchronous operations are non-blocking, which means that the line of code following an asynchronous operation is executed immediately after the operation is initiated, 
      without waiting for the operation to complete. This can lead to unexpected results if we want to perform some operation only after the asynchronous operation is complete,
      in such cases, we we can use callback functions."
*/
// synchronous callback
const sum = (a, b) => console.log(a+b);
const add = (a, b, callback) => callback(a, b);
add(1, 2, sum);              // 3

// asynchronous callback
const searchOnGoogle = ({ keyword, callback }) =>
    setTimeout(() => {
      console.log(`Search results for ${keyword} are here`);
      callback();
    }, 2000);
  
const onSuccess = () => console.log("Search Completed");
searchOnGoogle({ keyword: "Learn JavaScript", callback: onSuccess });  // 1.Search results for Learn JavaScript are here \n 2.Search Complete
/* if we had not called callback fn inside the setTimeout(), result from onSuccess fn would have been displayed in console 1st, leading to unexpected results.
   reference - https://courses.bigbinaryacademy.com/learn-javascript/promises/callback-functions/
*/

/* Callback Hell 
   - Callback Hell is a term used to describe a situation where a function makes another function call, which in turn makes another function call, and so on.
   - Callback Hell is a common problem in asynchronous programming.
   - Callback Hell is often referred to as the pyramid of doom.
*/
const getData = (dataId, getNextData) => 
    setTimeout(() => {
        console.log(`Data is ${dataId}`)
        if (getNextData) {
            getNextData();
        }
    }, 2000);
/* here, 
   if we want to get data 1, 2 and 3 at the same time, we need to make 3 calls to getData fn.
   what if we want to get data 1 at 1st, after that data 2 at 2nd, then data 3 at 3rd (synchronously: not at same time) we need use callbacks,
   as u can see in below ex; we have to call a callback inside one fn and again in another fn and so on in a nested way, thus creating a `Callback Hell`.
   reference - https://courses.bigbinaryacademy.com/learn-javascript/promises/callback-hell/  
*/
getData(1, () => {
    getData(2, () => {
        getData(3, () => {           // callback hell
            getData(4)
        });
    });
});

/* Promises - With this we dont need to use callbacks in fn just return a promise instead - (To avoid callback hell)
   - Promises are objects that represent the eventual completion or failure of an asynchronous operation.
   - Promises are a solution to callback hell.
   - A promise can be in one of these states: pending, fulfilled or rejected.
   --- Fulfilled promise is a promise that has been fulfilled or successfull - resolve(result)
   --- Rejected promise is a promise that has been rejected or failed - reject(error)
   --- Pending promise is a promise that has not been fulfilled or rejected - undefined

   syntax: let promise = new Promise((resolve, reject) => { // do something });
           resolve(); // fulfilled promise or success  ---| ::callback
           reject();; // rejected promise or failure   ---| ::callback
    
    reference - https://courses.bigbinaryacademy.com/learn-javascript/promises/make-a-promise/
*/
// manually creating a promise
let promise = new Promise((resolve, reject) => {
    resolve("success");
    // reject("failure");  // Promise {<rejected>: "failure"}
});
console.log(promise);      // Promise {<resolved>: "success"}

/* Note:- in real case scenario's we don't create promises ourselves, instead we will get them during actions like API calls etc, they will return a promise and we just have to handle it. */

// example
const getData_ = (dataId, getNextData) => {
    return new Promise((resolve, reject) => {     
        setTimeout(() => {
            console.log(`Data is ${dataId}`)
            resolve("success");
            if (getNextData) {
                getNextData();
            }
        }, 2000);
    });
}
let promise_ = getData_(11)
console.log(promise_);         // Promise state will be {<pending>}, when we check immediately after calling getData_ fn (as setTimeout has not executed yet). 
                               // It will be {<resolved>: "success"} after 2 sec (as setTimeout has executed after 2 seconds).

/* As we mentioned we will get promises from API call etc (for us creating it is not important, what important to us is how to handle it) */
/* Handling Promises - .then() & .catch()
   syntax:
   - promise.then((result) => { // do something with result }) - for fulfilled promises only - executes when promise is fulfilled
   - promise.catch((error) => { // do something with error })  - for rejected promises only  - executes when promise is rejected
*/

// example
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Promise is called");
        resolve("success msg");
        // reject("failure msg");
    })
}
let promise__ = getPromise();
promise__.then((result) => {             // when promise is resolved, `then` fn executes and `result` is passed as argument to it from resolve.
    console.log(result);                 // success msg - result from promise
});

promise__.catch((error) => {             // when promise is rejected, `catch` fn executes and `error` is passed as argument to it from reject.
    console.log(error);                  // failure msg - error from promise
});

// ==>