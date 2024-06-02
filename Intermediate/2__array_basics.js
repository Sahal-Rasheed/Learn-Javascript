/* Array Basics */

// Defining Array:
const myArray = new Array(1,2,3,4,5);
console.log(myArray);
const mixedArray = [1, "hello", true, null, undefined];
console.log(mixedArray);

// Reading from Array:
console.log(mixedArray[0]);
console.log(mixedArray[1]);

// Adding to Array:
mixedArray[3] = 3;          // add to the specific index or update value of that index
mixedArray.push(2);         // add to the end
console.log(mixedArray);

// Array Index:
// In the example given below, the array  initially had elements in the indexes 0, 1, and 2 to 5
// Then we add another element to index 10, although ideally, we should only be storing the next element in the index 6. 
// When we use console.log to display the array, we can see that the elements are indeed stored in the indexes 0, 1, 2 to 5 and 10. 
// The indexes from 6 to 9, are all undefined.
mixedArray[10] = 10;        // [ 1, 'hello', true, 3, undefined, 2, <4 empty items>, 10 ]
console.log(mixedArray);


