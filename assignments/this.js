/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global/Window- When no other scope is defined for ".this", it defaults back to the global or window scope. this is basicaly the javascript language writen out in its entirety as an object.
 *      -"use strict"; - prevents accidental window binding 
 * 
 * 2. Implicit Binding- Use implicit binding of ".this" for objects and methods. whenever a function is calld by a preceding dot, the object befor ethe dot is "this"
 * 3. New binding- when  constructor function is used to create and return a new object the specific instance of the new object is ".this". 
 *      Use the constructor object with the keyword "new" preceding it to invoke constructor and create the new object. 
 *      You can assign a const variable before the 'new constructor function' call. const jimbo = new Person(){...} or 'const jimbo= new Person();'  
 * 4. Explicit binding- Use explicit binding of this for functions. when the .call .bind or .apply methods are used 'this' is explicitly defined. 
 *          * .call=Calls a method of an object, substituting another object for the current object.
 * .apply=Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
 * .bind= stores '.this'  in a variable to be recalled later syntactically similar to the method '.call'
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
}
// sayName("D'Artagnan"); <--left it commented out 


// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this, '<-- (this)');
        console.log(myObj.greeting, `'<-- (console.log(myObj.greeting))'`);
        console.log(myObj, '<-- (myObj)');
    }
};
myObj.sayHello('Ryan');
console.log(`------------example2----------`);
const sayNameFunc = obj => {
    obj.sayName = function() {
        console.log(`Hello my name is ${this.name}`);
        console.log(this, '<-- (console.log(this))');
        console.log(obj, '<-- (console.log(obj)');
    };
};
const me = { name: 'Tucker' };
const you = { name: 'Freddy' };
sayNameFunc(me);
sayNameFunc(you);

// Invoke Methods on our objects
me.sayName();
you.sayName();

// Principle 3

// code example for New Binding
function Parent(attributes) {
    this.age = attributes;
    this.name = attributes;
}
const mickey = new Parent({
    age: 23,
    name: "Mickey"
});
// Principle 4

// code example for Explicit Binding


function Child(childattributes) {
    Parent.call(this, childattributes);
    this.toy = childattributes.toy;
}