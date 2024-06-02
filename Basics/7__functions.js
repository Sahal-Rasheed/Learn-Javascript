// Functions

// Type 1

/*  function name(param1, param2) {
        code block;
    }

    name(arg1, arg2)
*/ 
function greet(name) {
    console.log(`Hello ${name}`);
}
greet('John');
// **********************************
function hello(name) {
    return `Hello ${name}`;
}
const name = hello('Jane');
console.log(name);
// **********************************
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
// **********************************

// Type 2 (Alternative Way) | Arrow Functions

/*  const name = (param1, param2) => {       | const add = (a, b) => a + b;
        code block;                          | console.log(add(1, 2));
    }                                        | n.b u can even avoid () around params in this one line case
                                             | 
    name(arg1, arg2)
*/ 
const arrowAdd = (a, b) => {
    return a + b;
}
console.log(arrowAdd(10, 20));
const sum = arrowAdd(100, 100)
console.log(sum);
// **********************************

// Type 3 Callback Functions

/*  In JavaScript, you can define a function and pass it as an argument to another function. Such a function, is called a callback function.  */
const validateSolution = (solution, statusMessage) => {
    if (solution === 11) {
      statusMessage(true);
    } else {
      statusMessage(false);
    }
  };
  
const statusMessage = (status) => {
if (status) {
    console.log("Great! Your answer is correct!");
} else {
    console.log("Oops! Your answer is incorrect. Please try again.");
}
};

const solution = 11; 
validateSolution(solution, statusMessage);
