/* Destructuring Objects (Basic Approach):- 
   Object destructuring allows us to copy the value of properties of objects and store them in other variables.
   syntax:- const { property-key-name-in-the-obj, .. } = obj
*/
/* In the example given below, note that: 
   - the order in which the properties are destructured { age, fullName, isAdmin } does not have to match the order in which the properties are defined.
   - the name of the variable we store as the value of a property in const {}, should be same as the key of that property.
*/
const person = {
    fullName: "Adam Smith",
    age: 37,
    isAdmin: true
};
const { age, fullName, isAdmin } = person;
console.log(`Adam's age is ${age}`);   // Adam's age is 37
console.log(fullName);                 // Adam Smith
console.log(isAdmin);                  // true


/* Renaming Destructured Property Variable Name
   - we know the name of the variable we store as the value of a property in const {}, should be same as the key of that property.
   - but we can rename variable name of destructured properties by specifying a new name using colon(:) after property name.
   - syntax:- const { propertyKey: newVariableName, .. } = obj;
*/
const fruit = {
    name: "apple",
    color: "red",
}
const animal = {
    name: "horse",
    color: "brown",
}
const { name: fruitName, color: fruitColor } = fruit;
const { name: animalName, color: animalColor } = animal;
console.log(`The ${animalColor} ${animalName} eats a ${fruitColor} ${fruitName}`);   // The brown horse eats a red apple


/* Set Default Values while Destructuring Objects
   - When there is no such property in the specified object for destructuring, we can assign default values as below:
   - syntax:- const { propertyKey = defaultValue, .. } = obj
   const { fullName, email } = person;
   console.log(`Contact ${fullName} via ${email}`);   // Contact Adam Smith via undefined
*/
// In the example above, we destructured the object person to copy the values of the properties fullName and email. 
// The variable name is assigned the value "Adam Smith". Since the user object does not have an email property, 
// the email variable is undefined. That is why we get "undefined" in the output. 
// To prevent such undesired outputs, we can assign a default value

const { fullName: f_name, email = "default@email.com" } = person;
console.log(`Contact ${f_name} via ${email}`);        // Contact Adam Smith via default@email.com

// we can have default values for variables whose names have been renamed or specified while destructuring, as shown in the example below.
const { fullName: name_, email: emailAddress = "hello@example.com" } = person;
console.log(`Contact ${name_} via ${emailAddress}`);  // Contact Adam Smith via hello@example.com


/* Destructuring Objects using Rest Operator (ES6+ Approach):- 
   The rest operator (...) collects the remaining properties and are stored in a {}.
   syntax:- const {propertyKey, ...rest} = obj
*/
/*  In the example given below, the object person has 3 properties. 
    The first property is stored in fullName. 
    The last 2 properties are stored as an object of `otherDetails` using rest operator.
    The rest operator must always come last in the {}. Otherwise, it will cause an error.
    If you are using rest operator as the first property key name in {}, don't use other property key names in it will cause error.
    We can use rest operator as the first property key name in the {} to copy an object completely; syntax: const [...otherDetails] = person;
*/
const { fullName: name__, ...otherDetails } = person;
console.log(name__);       // Adam Smith
console.log(otherDetails); // {age: 37, isAdmin: true}
// to copy an obj completely using rest operator
const { ...allInfo } = person;
console.log(allInfo);      // {fullName: "Adam Smith", age: 37, isAdmin: true}


/* Netsed Destructuring */
// type 1 - {{}}
const user = {
    name: "Adam Smith",
    contactInfo: {
      mail: "adam@example.com",
      phone: "911234567890",
    }
}
const { contactInfo: { mail } } = user;
console.log(mail);          // adam@example.com

// type 2 - {[]}
const user_ = {
    name: "Adam Smith",
    emails: [
      "primary@example.com",
      "adam@personalmail.com",
    ],
} 
const { emails: [ primaryEmail ] } = user_;
console.log(primaryEmail);  // primary@example.com

// type 3 - [{}]
const teamMembers = [
    { name: "Adam Smith", age: 32 },
    { name: "Sam Smith", age: 23 },
  ] 
const [{ name: firstPersonName }, { name: secondPersonName }] = teamMembers;
console.log(firstPersonName);   // Adam Smith
console.log(secondPersonName);  // Sam Smith

// type 4 - [[]]
const numbers = [
    [1, 3, 5, 7],
    [2, 4, 6, 8],
  ]
const [[oddNumber], [evenNumber]] = numbers;
console.log(oddNumber);         // 1
console.log(evenNumber);        // 2