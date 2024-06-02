/*
 * Scopes
   - Scopes basically determine the accessibility or visibility of variables.
   - Types of Scopes
     - 1. Block Scope
     - 2. Function or Local Scope
     - 3. Global Scope
*/

/* 
 1. Block Scope
    - Block Scope means variables declare within a {} block cannot be accessed outside the block.
    - let and const declared vars can be only accessed in the block there are declared in. 
*/
if (true) {
    const myName = 'John';
    console.log(myName);  // No Error
}
console.log(myName);      // ReferenceError: myName is not defined - Wont Work


/* 
 2. Function or Local Scope
    - Function Scope means variables declare inside a function cannot be accessed from outside the function.
*/
function name() {
    const myName = 'Jhon'
    console.log(myName);  // No Error
}
console.log(myName);      // ReferenceError: myName is not defined - Wont Work


/* 
 3. Global Scope
    - Global Scope means scope outside a {} block or function.
    - Global scoped variable is accessible both inside a block or function.
    - Globally declared variable will not override the block or fn (local) scoped var.
*/
const num = 100                // this var will be accessible inside both {} and fn below as its global scope.   
const myName = 'Jhane'         // this global var wont affect the local var myName in below {} or fn, wont override

if (true) {
    const myName = 'John';
    console.log(myName);
    console.log(num);
}
function name() {
    const myName = 'Jhon'
    console.log(myName);
    console.log(num);
}
name()


/*
 4. Nested Scope
    - Nested Scope means scope inside another scope.
    - Nested scope can access the parent scope variables.
    - Nested scope can also access the global scope variables.
    - Nested scope can override the parent scope variables.
*/
let a = 10                  // its global scope.
function outer() {
    let b = 20              // its local scope of outer fn, (parent scope for inner fn).
    let x = 20
    function inner() {
        const c = 30        // its local scope of inner fn.
        console.log(a);     // 10 -- can access global scope var
        console.log(b);     // 20 -- can access parent scope var
        console.log(c);     // 30 -- can access its own local scope var
        // ---------------
        x = 40
        console.log(x);     // 40 -- can override parent scope var
    }
    inner();
    console.log(b);         // 20 -- can access its own local scope var from parent scope (as normal)
    console.log(x);         // 40 -- output will be 40 not 20 as its overrided by inner fn.
    console.log(c);         // ReferenceError: c is not defined -- can't access local scope var of inner fn from parent scope.
}
outer();


// (object:8, 15(last), 39, 51)   (dom: 20, 21, 22, 23, 25)