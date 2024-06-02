/* Destructuring Arrays (Basic Approach):- 
   Destructuring allows us to copy array elements into variables without modifying the array.
   syntax:- const [varName1, varName2 ...] = array
   The list of variables to which the value of the elements should be assigned goes inside the [] brackets on the left side of =.
   The name of the array being destructured should be on the right side of =.
*/
const fruits = ["Apple", "Orange", "Banana"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);


/* Destructuring Arrays using Rest Operator (ES6+ Approach):- 
   The rest operator (...) collects the remaining elements into an array.
   syntax:- const [varName1, varName2, ...rest] = array
*/
/*  In the example given below, the array fruits_ has five elements. 
    The first and second elements of fruits are stored in firsttFruit and seconddFruit respectively. 
    The last three elements are stored as an array otherFruits using rest operator.
    The rest operator must always come last in the list of variables. Otherwise, it will cause an error.
    If you are using rest operator as the first variable, don't use other variables in it will cause error.
    We can use rest operator as the first variable in the arr to copy an array; syntax: const [...otherFruits] = fruits_;
*/
const fruits_ = ["Apple", "Orange", "Mango", "Banana", "Grape"];
const [firsttFruit, seconddFruit, ...otherFruits] = fruits_;
console.log(firsttFruit);
console.log(seconddFruit);
console.log(otherFruits);   // [ 'Mango', 'Banana', 'Grape' ]


/* Default Values while Destructuring Arrays
   When there is no such element in the specified for desctructuring, we can assign default values as below:
   syntax:- const [varName1 = defaultValue1, varName2 = defaultValue2] = array
*/
/*  In the example given below, we have an array numbers with only one element.
    We attempt to destructure the array and store the first two elements in firstNumber and secondNumber, respectively.
    firstNumber assigned the value 24. Since there is no second element in the numbers array, secondNumber is assigned undefined.
    Hence firstNumber + secondNumber produces NaN.
    We can prevent such undesired outputs by providing default values for the variables firstNumber and secondNumber:
*/
const numbers = [24];
const [firstNumber = 0, secondNumber = 0] = numbers;
console.log(firstNumber + secondNumber);