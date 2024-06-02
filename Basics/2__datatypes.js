// Primitive

// 1. String
const name = "Josh";
console.log(name);

// 2. Number
const age = 25;
console.log(age);

// 3. Boolean
const isCool = true;
const isNotCool = false;
console.log(isCool);
console.log(isNotCool);

// 4. Undefined - Value not known
let result;
const res = undefined;
console.log(result);
console.log(res);

// 5. Null
const data = null
console.log(data);


// Non Primitive

// 1. Objects - Dict in python
const person = {
    name: "Josh",              // keys can be in quotes or not no probs
    age: 25,
    isCool: true,
    result: undefined,
    data: null,
    getName: (name) => `Name is ${name}`   // fn as a property of an object
}
console.log(person.name);
console.log(person.getName(person.name));

// 2. Arrays - List in python
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);


/* Js is dynamically typed like python no need to explicity declare type */