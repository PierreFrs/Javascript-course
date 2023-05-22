// Objects Basics

/* Objects are collections of key (property) value pairs
Property values can be strings, numbers, booleans, arrays and functions however if the property value is a function it's called a method */

// Object literal syntax, {}
// dot notation

const person = {
  name: "john",
  age: 25,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
};

console.log(person);
console.log(person.name);

const name = person.name;
console.log(name);

person.age = 60;
person.city = "Chicago";
console.log(person);

// delete property
const siblings = delete person.siblings;
console.log(siblings);

console.log(person);
