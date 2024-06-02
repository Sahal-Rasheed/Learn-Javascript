/* Synchronous Code
   - The program is executed line by line.
   - Javscript is a single threaded language, meaning that only one thing can be executed at a time.
   - The program is paused and waits for the current line to finish executing before moving on to the next line.
*/
console.log("Start");
console.log("Hello");
console.log("Hi");
console.log("End");


/* Asynchronous Code
   - In asynchronous code, the program is not paused and waits for the current line to finish executing before moving on to the next line. 
   - The program continues to execute line by line, and the next line is executed as soon as the current line finishes executing. 
   - The program is said to be asynchronous because it does not wait for the current line to finish executing before moving on to the next line.  
*/
const searchOnGoogle = () => 
    setTimeout(() => console.log(`Search Results are here`), 2000);
  
searchOnGoogle();             // Asynchronous o/p as we use setTimeout() of 2 sec so we dont wi8 for it to get complete as in synchronous code, instead we execute it paralelly and move to next line.
                              // So 1st `Hello` is printed and then `Search Results are here` is printed.
console.log("Hello");