// var, let, const
// define, update, redefine
// const cannot mutate primitive type

// define
var number = 100;
// console.log(number);
// update
number = 200;
// console.log(number);
// redefine
var number = "orange";
// console.log(number);

// define
let amount = 100;
// console.log(amount);
// update
amount = 200;
// console.log(amount);
// !redefine
// let amount = "orange";
// console.log(amount);

// define
const price = 100;
// console.log(price);
// !update
// price = 200;
// console.log(price);
// !redefine
// const price = "orange";
// console.log(price);

// possible to apdate a value inside an object though
const person = { name: "bob" };
person.name = "john";
console.log(person.name);
