// Handling Promises

/* `then` method - .then()
   as we know, then method is used to handle a promise when it's fulfilled. It takes a callback function as a parameter. The callback function takes the resolved value as a parameter.
*/
/* In the below example:-
   The `launchSuccess` variable is set to true, so the resolve method is called. A promise is fulfilled when the resolve method is called. 
   Since the promise is fulfilled, the `then` method is called, and the resolved value is passed to the callback function. 
   In this case, the resolved value is `Rocket successfully launched!`.
*/
const rocketLaunch = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const launchSuccess = true;
        if (launchSuccess) {
          resolve("Rocket successfully launched!");
        } else {
          reject("Uh-oh, the rocket launch encountered a problem.");
        }
      }, 5000);
    });
// handling promise when it's fulfilled
rocketLaunch()
    .then(resolvedValue => {
        console.log("'then' method called");
        console.log(resolvedValue);
        console.log("Rocket launch process completed.");
    })
    // If we run the above code, the output will be:
    // 'then' method called
    // Rocket successfully launched!
    // Rocket launch process completed.


/* `catch` method - .catch()
   The `catch` method is used to handle a promise when it's rejected. It takes a callback function as a parameter. The callback function takes the rejected value as a parameter.
*/
/* In the below example:-
   The `launchSuccess` variable is set to false, so the reject method is called. A promise is rejected when the reject method is called.
   Since the promise is rejected, the `catch` method is called, and the rejected value is passed as paramter to the callback function.
   In this case, the rejected value is `Uh-oh, the rocket launch encountered a problem.`.
*/
const rocketLaunch_ = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const launchSuccess = false;
        if (launchSuccess) {
          resolve("Rocket successfully launched!");
        } else {
          reject("Uh-oh, the rocket launch encountered a problem.");
        }
      }, 5000);
    });
  
rocketLaunch_()
    .catch(rejectedValue => {
        console.log("'catch' method called");
        console.log(rejectedValue);
        console.log("Rocket launch process completed.");
    });
    // If we run the above code, the output will be:
    // 'catch' method called
    // Uh-oh, the rocket launch encountered a problem.
    // Rocket launch process completed.


/* `finally` method - .finally()
   The finally method is invoked regardless of whether the promise is fulfilled or rejected. It takes a callback function as a parameter. 
   It's typically used to perform cleanup operations or to execute code that should run regardless of the promise's outcome.
*/
rocketLaunch_()
  .then(resolvedValue => {                            
    console.log("'then' method called");              // will execute when promise is fulfilled, i.e launchSuccess is true
    console.log(resolvedValue);
  })
  .catch(rejectedValue => {
    console.log("'catch' method called");             // will execute when promise is rejected, i.e launchSuccess is false
    console.log(rejectedValue);
  })
  .finally(() => {
    console.log("Rocket launch process completed.");  // will execute regardless of the promise's outcome, i.e launchSuccess is true or false
  });


/* Chaining Promises
   - The `then` method can be chained to handle multiple promises.
   - When we chain promises, the `then` method of the first promise is called first, and the `then` method of the second promise is called only when the first promise is fulfilled.
   - Its used when, say we have some asynchronous operations that returns promises and has to be executed in a particular order or one after the other.
   - reference - https://courses.bigbinaryacademy.com/learn-javascript/promises/chaining-promises/
*/
const gatherRocketParts = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Gathered rocket parts");
        resolve();
      }, 1000);
    });
  
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
  
const performPreLaunchChecks = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Performed pre-launch checks");
        resolve();
      }, 1000);
    });
  
const launchRocket = () =>
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
  
gatherRocketParts()
    .then(() => assembleRocket())
    .then(() => fuelRocket())
    .then(() => performPreLaunchChecks())
    .then(() => launchRocket())
    .then(successMessage => {
        console.log(successMessage);
    })
    .catch(errorMessage => {
        console.log(errorMessage);
    });
    // If we run the above code, the output will be:
    // Gathered rocket parts
    // Assembled rocket
    // Fueled rocket
    // Performed pre-launch checks
    // Rocket launched!

/* Expalation of the above code:-
   - The `gatherRocketParts` function returns a promise. Once the promise is fulfilled, it will be handled by the first `then` method.
   - Within the first `then` method, the `assembleRocket` function is called. This function also returns a promise, which is handled by the second `then` method.
   - This process is continued until the launchRocket function is reached, which also returns a promise that is handled by the last then method in the chain and 
     logs the success message.
   - At any point, if any of the functions in the chain returns a rejected promise, the `catch` method is called and the error message is logged. Which prevents the code from breaking.
*/

/* With this approach, we can chain together as many promises as we want and we can handle errors in a single place. 
   This is a much cleaner approach than using callbacks and it eliminates the `callback hell problem`.
*/


/* Returning a value from `then` handler
   In the example above, each function in the then method returns a promise. However, what if a function returns a value instead of a promise?
   In that case, we can still chain the promises together. This is possible because in this scenario, the then method effectively creates 
   a resolved promise with that value and returns it. Therefore, the next then method in the chain will receive that value as an argument.   
*/

/* In this example below, 
   the `processData` function returns a string instead of a promise. However, the `then` method in the chain still receives the value returned by `processData` as an argument.
   This is because the `then` method effectively creates a resolved promise with that value and returns it.
*/
const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data fetched successfully.");
        resolve({ name: "John", age: 30 });                // returns promise
      }, 1000);
    });
  }

const processData = (data) => {
    console.log("Data processed:", data);

    return `Processed data for ${data.name}`;              // returns value instead of a promise
  }
  
fetchData()
    .then(data => processData(data))                       // we can still chain the promises together 
    .then(processedData => {
      console.log(processedData);
    });
    // Output:
    // Data fetched successfully.
    // Data processed: { name: "John", age: 30 }
    // Processed data for John