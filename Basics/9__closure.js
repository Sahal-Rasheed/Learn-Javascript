/* 
 * Closure
   - Closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
   - When we return a function from another function, we are effectively returning a combination of the function defintion along with the fn's scope.
     This would let the function definition have an associated persistent memory which could hold on to live data b/w excecutions. That combination of 
     fn and scope is called closure.
   - In other words, closure gives you access to an outer function’s scope from an inner function. (nested scope). 
   - With closure, inner fn has access to variables in outer fn scope even after the outer fn finished execution.  
*/

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  // return inner();  // normal, if want closue dont return like inner() as it wont make closure.
  return inner        // closure, here we are not only returning fn definition of inner() but also its related scopes.
}
// normal:
// const fn1 = outer();    # 1
// const fn2 = outer();    # 1

// closure:
const fn = outer();
fn()    // # 1
fn()    // # 2

// Case:1 (normal)
/* If we had return inner() like this or just called inner() in outer fn, and call the outer fn twice we would get result as 1 for both the calls. This bcoz when we call
   outer twice a new temporary m/y is created with counter initialized back to 0 as default. But if it was a closure this wont happen as closure is combination of the returned
   fn and its scope so it will have a persistent memory to rely on.

*/
// Case:2 (closure)
/* But when we return the inner fn without calling it as (retrun inner), from the outer fn and when call that inner fn x 2 (returned from outer as, const fn = outer()), 
   we get result as 1 and 2 due to this clouse effect as when we return a function from another function, we are effectively returning a combination of the function 
   defintion along with the fn's scope.
*/