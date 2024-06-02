/* Object Methods*/

const person = {
    fullName: "Adam Smith",
    age: 37,
    isAdmin: true
};

// Object.Keys() - We can get all the keys of an object using Object.keys(). It returns the keys as an array of strings.
console.log(Object.keys(person));     // [ 'fullName', 'age', 'isAdmin' ]

// Object.values() - We can get all the values of an object using Object.values(). It returns the values as an array.
console.log(Object.values(person));   // [ 'Adam Smith', 37, true ]

// Object.entries() - We can get key-value pairs of an object using Object.entries(). It returns an array of arrays, where each subarray contains [key, value].
console.log(Object.entries(person));  // [ [ 'fullName', 'Adam Smith' ], [ 'age', 37 ], [ 'isAdmin', true ] ]

// delete - To delete a property from an object, we use delete
delete person.age;
console.log(person);