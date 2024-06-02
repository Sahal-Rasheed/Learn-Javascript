/* JSON */

/* Convert Object to JSON String - JSON.stringify()
   It accepts 3 params:
   - data: The value to convert to a JSON string
   - replacer: Either an array or a function that can be used to filter the properties of the first argument and include only those properties in the JSON string
   - space:  The number of spaces or the string to be used for indentation of the JSON string.
*/
const user = {
    firstName: "Sam",
    lastName: "Smith",
    isAdmin: true,
    numberOfYears: 7,
};
// used array as filter so keys specified in it will be taken from the obj to convert to json
const userInfoJson = JSON.stringify(user, ["firstName", "lastName"]);
console.log(userInfoJson); // {"firstName":"Sam","lastName":"Smith"}

// used a fn as filter to only include nonstring values from obj to convert to json
const checkIfStringValue = (key, value) => typeof value === "string" ? undefined : value;
const nonStringPropsJson = JSON.stringify(user, checkIfStringValue, 5);
console.log(nonStringPropsJson);

/* Convert JSON String to Object - JSON.parse()
   It accepts a 2 params:
   - json: The JSON string to parse
   - reviver: A function that can be used to transform the resulting object before it is returned.
*/
const userInfoJSON = '{"firstName":"Sam","lastName":"Smith","isAdmin":true,"numberOfYears":7}';
const user_ = JSON.parse(userInfoJSON);
console.log(user_);
// {
//     firstName: 'Sam',
//     lastName: 'Smith',
//     isAdmin: true,
//     numberOfYears: 7
// }

// used a fn as reviver to transform boolean values while parsing json to obj
const toggleBooleanValues = (key, value) => typeof value === "boolean" ? !value : value;
const user__ = JSON.parse(userInfoJSON, toggleBooleanValues);
console.log(user__);
// {
//     firstName: 'Sam',
//     lastName: 'Smith',
//     isAdmin: false,
//     numberOfYears: 7
// }

/* Note:- undefined value included in obj wont be included in JSON string */