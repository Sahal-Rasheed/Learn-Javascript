/* Array Methods */
const vegetables = ["corn", "carrot", "potato"];

// unshift - add element to start of array. ::returns:- new length of the array.
vegetables.unshift("beetroot");
console.log(vegetables);

// shift - remove element from start of array. ::returns:- returns that ele.
vegetables.shift();
console.log(vegetables);

// pop - removes the last element of an array. ::returns:- returns that ele.
vegetables.pop();
console.log(vegetables);

// length - returns the length of the array |  to get the number of elements in an array.
console.log(vegetables.length);

// forEach - iterate over the array and allows us to perform a specific action on every element without changing the original array. ::returns:- doesnot returns anything.
/* forEach() can receive three helpful parameters:
    element: This is the current element of the array that we're visiting.
    index: This is the index position of the current element in the array.
    array: This is the entire array itself. 
*/
const fruits = ["apple", "banana", "mango", "orange"];
fruits.forEach((fruit, index, array) => {
    console.log(`${fruit} is a fruit. It is at index ${index} in the array: ${array}`);
})
// or
const displayFruit = fruit => {
  console.log(`${fruit} is a fruit.`);
};
fruits.forEach(fruit => displayFruit(fruit));

// map - helps us change the values in an array without changing the original array. It allows us to create a new array with modified elements easily.
         // ::returns:- returns a array.
const evenNumbers = [2, 4, 6];
const oddNumbers = evenNumbers.map((number) => number + 1);
console.log(oddNumbers);

/* Note:-
   The forEach() method is used to loop through array elements. It runs the same function on each element. It doesn't change the given array and returns undefined.
   The map() method also iterates through array elements. It applies a function to each element. It creates a new array with the modified elements, and returns the new array
*/

// filter - helps us filter out the values in an array without changing the original array. It allows us to create a new array with filtered elements easily.
         // filter() accepts a function as an argument. It invokes that function on each element of an array.
         // ::returns:- returns a array.
const numbers = [1, 2, 3, 4, 5, 6];
const evenNum = numbers.filter(number => number % 2 === 0);
console.log(evenNum);

/* Note:-
    forEach(), map(), filter() can receive three helpful parameters:
    element: This is the current element of the array that we're visiting.
    index: This is the index position of the current element in the array.
    array: This is the entire array itself. 
*/

// Array.from() - creates a new array from an array-like or iterable object. syntax: Array.from(value, mapFunction)
                // - object: The value to be converted into an array.
                // - mapFunction (optional): A mapping function that allows you to modify each element in the array during the creation process.
                // ::returns:- returns a array.
// Converting String to Array
const string = 'hello';
const newArray = Array.from(string);
console.log(newArray);  // Output: ['h', 'e', 'l', 'l', 'o']

// Using mapping function
const numberArray = "1234";
const doubled = Array.from(numberArray, num => Number(num) * 2);
console.log(doubled);  // Output: [2, 4, 6, 8]

// isArray() - checks if the given value is an array. syntax: Array.isArray(value) 
            // ::returns:- true or false
console.log(Array.isArray([1, 2, 3]));                     // true
console.log(Array.isArray({}));                            // false
console.log(Array.isArray("hello"));                       // false
console.log(Array.isArray(new Array("a", "b", "c", "d"))); // true

// indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present. syntax: arr_name.indexOf(element, fromIndex)

// includes() - determines whether an array contains a certain element, if the element is present in the array: it returns true. syntax: arr_name.includes(element, fromIndex)

// slice() - extracts a section of an array and returns a new array. syntax: arr_name.slice(start, end) (wont include end index)
            // If we call slice() without any arguments, it creates a copy of the whole array.
            // If the first argument is greater than the length of the array, slice() returns an empty array.
const fruitsSubArray = fruits.slice(1, 4)
const copy_fruits_array = fruits.slice()
console.log(fruits);
console.log(fruitsSubArray);   // [ 'banana', 'mango', 'orange' ]

// splice() -  can modify exisiting array by adding/removing elements. It returns an array of the removed elements. syntax: arr_name.splice(start_index, deleteCount, item1, item2,..)
               // deleteCount - 0 ntng will be deleted (used for adding smtng to array etc), else specified no.of items will be del from the arr. starting from mentioned start index.
console.log(numbers);          // [ 1, 2, 3, 4, 5, 6 ]
const removedNumbers = numbers.splice(1, 3);
console.log(numbers);          // [ 1, 5, 6 ]
console.log(removedNumbers);   // [ 2, 3, 4 ]

// : deletion example
// In the example given below, it removes the element "mango" at index 2 and inserts the element "kiwi" in its place.
const fruits_ = ["apple", "banana", "mango", "orange"];
fruits_.splice(2, 1, "kiwi");
console.log(fruits_);          // [ 'apple', 'banana', 'kiwi', 'orange' ]

// : insertion example
// In the example given below, it adds the element "kiwi" at index 2 without removing any element.
const fruits__ = ["apple", "banana", "mango", "orange"];
fruits__.splice(2, 0, "kiwi");
console.log(fruits__);          // [ 'apple', 'banana', 'kiwi', 'orange' ]

// concat() - combines two or more arrays, returns a new array without modifying the existing arrays. ::returns:- new array, syntax: arr_name.concat(arr, items..)
             // The concat() method creates a new array that contains elements from the array on which concat is invoked followed by the arguments passed.
const even = [2, 4, 6];
const odd = [1, 3, 5];
const num = even.concat(odd);
console.log(num);          // [ 2, 4, 6, 1, 3, 5 ]
const num_ = num.concat([7, 8, 9], "a", "b", true);
console.log(num_);         // [ 2, 4, 6, 1, 3, 5, 7, 8, 9, 'a', 'b', true ]

// join() - joins all elements of an array into a string. syntax: arr_name.join(separator)
         // If an array contains - undefined, null or [] (empty array), the join method inserts empty strings "" instead of them.
const fts = ["apple", "banana", "mango", "orange"];
fts_string = fts.join(",");
console.log(fts_string);    // apple,banana,mango,orange

// find() - returns the value of the first element in the array that satisfies the provided testing function. syntax: arr_name.find(test_fn: callback_fn)
const people = [
    {name:"sam", age: 17},
    {name:"Adam", age: 19},
    {name:"Smith", age: 21}
  ];
  const isAdult = people.find(person => person.age >= 18);
  console.log(isAdult);     // {name: "Adam", age: 19}

// every - every() method allows us to check if all elements in an array satisfy a given condition. ::returns:- true or false,
         /* syntax: array_name.every(callback(currentValue, index, array), thisValue);
            array_name: The array to iterate over.
            callback: A function to test each element of the array.
            currentValue: The current element being processed in the array.
            index (Optional): The index of the current element being processed.
            array (Optional): The array every() was called upon.
            thisValue (Optional): Value to use as this when executing callback.
         */
// - Checking if all elements are even numbers
const e_numbers = [2, 4, 6, 8, 10];
const allEven = e_numbers.every(num => num % 2 === 0);
console.log(allEven);      // true

// - Checking if all elements are of the same type
const mixedData = [1, "hello", true, { name: "John" }];
const allSameType = mixedData.every((value, index, array) => typeof value === typeof array[0]);
console.log(allSameType);  // false

/* - create a function named validateStudents that checks if all students in an array meet the following criteria :-
   Name Validity: Every student must have a name property that is a non-empty string.
   Age Validity: Every student must have an age property that is an integer between 5 and 18 (inclusive).
   Grades Validity: Every student must have a grades property that is an array of numbers between 0 and 100 (inclusive), 
                  and this array must contain at least one grade (it can't be empty).
*/
const studentsArray =[
    { name: "Alice", age: 15, grades: [90, 80, 85] },
    { name: "", age: 19, grades: [90, 80, 85] },
    { name: "Bob", age: 17, grades: [75, 85, 92] },
    { name: "Dan", age: 14, grades: [] },
    { name: "Charlie", age: 16, grades: [100, 90] }
  ];

const validateStudents = (students) => {
    return students.every(student =>
      typeof student.name === 'string' && student.name.trim() !== '' &&
      Number.isInteger(student.age) && student.age >= 5 && student.age <= 18 &&
      Array.isArray(student.grades) && student.grades.length > 0 &&
      student.grades.every(grade => typeof grade === 'number' && grade >= 0 && grade <= 100)
    );
  };
console.log(validateStudents(studentsArray));   // false

// note:- below methods are used for type checking
Array.isArray(studentsArray); // is array ?
Number.isInteger(studentsArray.length); // is integer ?
typeof studentsArray.age === 'number' // is number ?
typeof studentsArray.name === 'string' // is string ?
// endof every()

// some - some() method checks if at least one element in the array passes a test. ::returns:- true or false, syntax: arr_name.some(callback(currentValue, index, array))
         // its similar to every() but it returns true if at least one element passes the test.

// reduce - reduces the given array to a single value and return the value (it wont modify the array). 
         /* syntax: arr_name.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
            accumulator: stores the value returned from the previous function call.
            currentValue: the value of the current element in the array.
            currentIndex (Optional): the index of the current element in the array.
            array (Optional): the array reduce is invoked on.
            initialValue (Optional): The value that is used as the first argument to the first call of the callback. If no initialValue is provided, the first element in the array will be used.
         */
// - sum of numbers
const nums = [1, 2, 3, 4, 5];
const calculateSum = (accumulator, currentValue) => accumulator + currentValue;
const sum = nums.reduce(calculateSum, 0);
console.log(sum);            // 15

// - find larget number from given array
const numss = [5, 2, 11, 7, 13, 3];
const findLargest = (maxValue, currentValue) => currentValue > maxValue ? currentValue : maxValue
const largestNumber = numss.reduce(findLargest);
console.log(largestNumber);  // 13
// endof reduce

