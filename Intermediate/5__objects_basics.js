/* Objects Basics */

// Defining Objects:
const person = {
  name: 'John',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  isAdult: true,
  getName: function() {
    return this.name;
  },
  getAge: () => {
    return this.age;
  }
};

// Reading or Accessing Object Properties: `for that we use (.) notation`
console.log(person.name); // John
console.log(person.age);  // 30
console.log(person.hobbies[1]);  // Cooking
console.log(person.isAdult);  // true
console.log(person.getName());  // John
console.log(person.getAge());  // undefined; bcoz we use arrow fn and arrow fn's dont have their on default this binding unlike normal fns,
                               // and look for it in the surrounding context (globally).
console.log(person["name"]);   // similar like we access value using key name in python dictionary dt.
// obj[keyName]      -->       // we use this instead of dot notation when some objects has numbers or invalid variable namings as key.

// Adding properties to Object:
person.job = 'Developer'           // using dot
person["nationality"] = 'American' // using key name
person.getJob = function() {
  return this.job;
}
console.log(person.job);         // Developer
console.log(person.nationality); // American
console.log(person.getJob());    // Developer

// Update properties of Object:
person.nationality = "Indian"
person["age"] = 20
console.log(person.nationality);  // Indian
console.log(person.age);          // 20

/*
    Note:-
    while adding, updating, reading objects,
    we use dot notation mostly, but we use obj[keyName] for this purpose is when key name contains special characters, numbers etc.
    in such cases dont use dot notation instead use -> obj[keyName]
*/