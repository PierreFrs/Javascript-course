// Global scope vs local scope

// any variable outside code block {} is said to be in Global Scope
// can be access anywhere in the program
// Gotchas : name collisions, modify by mistake

let name = "bobo";
name = "peter";

function calculate() {
  // some other code...
  console.log(name);
  name = "orange";
  function inner() {
    name = "inner name value";
    console.log(`this is from inner function ${name}`);
  }
  inner();
}
calculate();

if (true) {
  // some other code
  console.log(name);
  name = "pants";
}

console.log(`my name is ${name} and I am awesome`);

// Local Scope cannot be accessed from outside code blocks
// if - NOT VAR

function calculateBis() {
  const name = "john";
  const age = 25;
  // code goes here
  becomesGlobal = "global variable";
}

calculateBis();
console.log(becomesGlobal);

{
  const name = "john";
  const special = "special";
}

console.log(special);

// Variable Lookup
// {} - code block

const globalNumber = 5;

function add(num1, num2) {
  const globalNumber = 6;
  const result = num1 + num2 + globalNumber;

  function multiply() {
    // const globalNumber = 100;
    multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  multiply();
  return result;
}

console.log(add(3, 4));
