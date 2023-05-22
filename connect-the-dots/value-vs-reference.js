// Reference vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null
// Arrays, Functions, Objects = objects
// typeof

// when assigning non-primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

const number = 1;
let number2 = number;
number2 = 7;
console.log(`The first value is ${number}`);
console.log(`The second value is ${number2}`);

let person = { name: "bob" };
let person2 = {
  ...person,
}; /* usage of the spread operator to make a copy of the original object */
person2.name = "susy";
console.log(`The name of the first person is ${person.name}`);
console.log(`The name of the second person is ${person2.name}`);
