// hoisting
// function and var declarations are hoisted
// safer to access only after initialized

display();
console.log(display);
// console.log(firstName);
// console.log(lastName);
// console.log(random);
moreComplex();

const firstName = "john";
let lastName = "jordan";
var random = "random";

function display() {
  console.log("Hello World");
}

function moreComplex() {
  console.log(`${firstName} ${lastName} ${random}`);
}
