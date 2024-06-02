/* Spread Operator
   The spread operator (...) allows an iterable (array, string, obj) to be expanded into single elements.
   syntax:- ...iterable
*/
const numbers = [1, 2, 3, 50, 12]
const maxNum = Math.max(...numbers);
console.log(...numbers);   // 1 2 3 50 12  - expanded to single elements
console.log(maxNum);       // 50


/* Spread Operator on Strings */
// spread operator when used on strings split it into a array of characters.
const text = "Hello";
const textArr = [...text];
console.log(textArr);      // [ 'H', 'e', 'l', 'l', 'o' ]


/* Spread Operator on Arrays */
// Copying an array:
const studentMarks = [72, 84, 96];
const studentMarksCopy = [...studentMarks];
console.log(studentMarksCopy);     // [ 72, 84, 96 ]

// Adding elements to an array:
const student_Marks = [72, 84, 96];
const updatedStudentMarks = [100, ...student_Marks, 90, 78];
console.log(updatedStudentMarks);  // [ 100, 72, 84, 96, 90, 78 ]

// Combining elements from multiple arrays to a new array: (like concat in js or extend in py)
const studentMarksSem1 = [72, 84, 96];
const studentMarksSem2 = [100, 90, 78];
const allStudentMarks = [...studentMarksSem1, ...studentMarksSem2];
console.log(allStudentMarks);      // [ 72, 84, 96, 100, 90, 78 ]


/* Spread Operator on Objects */
// Copying an object:
const cat = {
    numberOfLegs: 4,
    canFly: false,
};
const dog = { ...cat };
console.log(dog);                  // { numberOfLegs: 4, canFly: false }

// Add or Insert Property (key-value pairs) to an object:
const cat_ = {
    numberOfLegs: 4,
    canFly: false,
};
const dog_ = {
    ...cat_,
    height: 30,
};  
console.log(dog_);                 // { numberOfLegs: 4, canFly: false, height: 30 }

// Combining multiple objects to a new obj:
const basicInfo = {
    name: "Oliver Smith",
    email: "oliver@example.com",
};
const workInfo = {
    yearsOfExperience: 4,
    isGraduate: true,
};
const userDetails = { ...basicInfo, ...workInfo };
console.log(userDetails);          // {name: "Oliver Smith", email: "oliver@example.com", yearsOfExperience: 4, isGraduate: true}


/* Rest Parameter
   - The rest parameter syntax (...) allows a function to accept an indefinite number of arguments as an `array`.
   - The rest parameter must be the last parameter in a function definition.
   - It collects all remaining elements into an array.
   - syntax:- function funcName(...rest) {}          -  like *args in python
*/
// Example 1: passing multiple arguments to a function using rest parameter
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
const result = sum(1, 2, 3, 4);
const result_ = sum(1, 2, 3, 4, 5, 6, 7);
console.log(result);      // 10
console.log(result_);     // 28

// Example 2: 
const printHighestScore = (name, ...scores) => {
    const highestScore = Math.max(...scores);
    console.log(`${name}'s highest score is ${highestScore}`);
} 
printHighestScore("Sam", 78, 90);            // Sam's highest score is 90
printHighestScore("Oliver", 72, 65, 98);     // Oliver's highest score is 98
printHighestScore("Steve", 84, 69, 43, 97);  // Steve's highest score is 97