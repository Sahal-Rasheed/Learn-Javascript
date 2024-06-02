/*
 * this keyword on objs or normal fns
   - this keyword used in a normal fn, refers to the object it belongs to.
   - it makes fn's reusable by letting you decide the object value.
   - `this` value is determined entirely by how a fn is called.
   - this is also used in class which refers to instacne of it, just like self in python.
*/
/*
 * how to determine value of `this` keyword 
   - implicit binding
   - explicit binding
   - new binding
   - default binding
*/

/* Implicit binding
   - fn is called with the dot notation
   - the object to the left of the dot is what the this keyword is refering
*/ 
const person = {
    name: "Sahal",
    sayMyName: function () {
        console.log(`My name is ${this.name}`);
    }
}
person.sayMyName()     // My name is Sahal


/* Explicit binding
   - we have to explicitly specify the context of the fn is called for that we use `call` method (apply, bind can also be used)
   - call method allows us to specify the context with which fn should invoked.
   - below we are invoking fn sayMyName with context person obj. and thus this keyword now will be referencing to person obj.
*/ 
function sayMyName () {
    console.log(`My name is ${this.name}`);
}
sayMyName.call(person) // My name is Sahal

// We can pass arguments to the function invoked by the call() method, after the first argument of the call() method.
const user = { name: "Oliver Smith" };
const project = { name: "BB Academy" };
const displayGreeting = function (projectName) {
  console.log(`Hi, I am ${this.name}. I am working on ${projectName}`);
}
displayGreeting.call(user, project.name);


/* New binding
   - we can invoke a fn using `new` keyword.
   - In such scenario a fn is invoked with this keyword referencing an empty obj.
   - when fn is invoked with new keyword, it automatically create a new empty obj that `this` keyword will reference.
*/ 
function Person (name) {
    // this = {} - automatically create a new empty obj
    this.name = name
}
const p1 = new Person("Sahal")  // This Person fn is known as an constructor function which may be converted to a class declaration.
const p2 = new Person("Rishal")
console.log(p1.name, p2.name);  // Sahal Rishal

/* Default binding
   - fallback binding when none of the other 3 bindings are matched.
   - so none of the other 3 bindings are there, js will default to the global scope and set `this` keyword to the global obj. 
                                (in the global scope js will try to find var called name `below ex`) since it dont find it `this.name` is undefined.
                                (if we have to define a var called name in global scope it will work)
*/ 
// globalThis.name = "John"; or window.name = "John"; - if its browser or node to set global.
// const name = "Jhon";                               - else use this.
function myName () {
    console.log(`My name is ${this.name}`);
}
myName()   // My name is undefined

/*
 * this keyword on arrow fns
   - when `this` keyword is used in arrow fns its behaviour is different, as it dont behave like we normally see in normal fn. 
   - This is because, arrow functions do not have their own this binding and capture the this value from the surrounding context. 
*/
/*
 * Case 1:
   - implicit binding
   - here below example we are using implicit binding and since we use dot notation to call the fn, so `this` keyword will be referencing to the object to the left of the dot. (admin)
   - here `this` keyword should be referencing to admin obj since we use implicit binding, but since we used arrow fn this wont happen unlike in normal fn.
   - arrow fns do not have their own this binding, so `this` keyword will be referencing to the global obj in the case of arrow fn (default binding case).
*/
// globalThis.name = "John"; or window.name = "John"; - if its browser or node to set global (default binding case).
const admin = {
    fullName: "Adam Smith",
    age: 45,
    displayGreeting: () => console.log(`Hello, I'm ${this.fullName}`),
}
admin.displayGreeting();    // Hello, I'm undefined

/*
 * Case 2:
   - implicit binding
   - In the below example, we created an arrow function inside another arrow function. Then we try to log to the console, the value of this.fullName. 
     It doesn't have a this value, so it looks outside in its surrounding context. This leads it to the outer arrow function, where again we don't have a this value. 
     It goes even further and looks in the global scope or context (to the window object). There, it finds a this object and a fullName key on it.
*/
// window.fullName = "Sam Smith"; - (window - browser global obj).
const admin_ = {
  fullName: "Adam Smith",
  age: 45,
  displayGreeting: () => {
    const user = {
      fullName: "Oliver Smith",
      displayAdminGreeting: () => console.log(`Hello, I'm ${this.fullName}`),
    }
    user.displayAdminGreeting();
  },
}
admin_.displayGreeting();         // Hello, I'm Sam Smith

// if the arrow fn was inside a normal fn then the value of this.fullName will be `Hello, I'm Adam Smith`, bcoz, as we are invoking a normal fn inside displayGreeting
// inside admin obj as admin_.displayGreeting() its implicit binding rule.
// as arrow functions do not have their own `this` binding, so they look up to the closest surrounding context, which in this case is the displayGreeting method 
// which is a normal fn and since its a implicit binding, `this` keyword will be referencing to the object to the left of the dot. unlike in arrow fn.

// https://courses.bigbinaryacademy.com/learn-javascript/this-on-objects/arrow-function-and-this-3/