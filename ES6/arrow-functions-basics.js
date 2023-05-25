// Arrow functions or fat arrow functions
// no name, always expression, assign to variable
// no function keyword
// 'this

/* function sayHi() {
  console.log("Hello");
}
sayHi();

const hello = function (name) {
  console.log(`Hello ${name}`);
};
hello("bob");

function triple(value2, value2) {
  return value1 * value2 * 3;
} */

const sayHi = () => console.log("Hello");
sayHi();

const double = (value) => value * 2;
const num = double(4);
console.log(num);

// two parameters and more than one line
const multiply = (num1, num2) => {
  const result = num1 * num2;
  // more code here
  return result;
};

const total = multiply(7, 4);
console.log(total);

// return object
const object = () => ({ name: "john", age: 25 });
const person = object();
console.log(person);

// arrow functions as callback functions
const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter((number) => number > 3);
console.log(big);

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => console.log("you clicked me"));
