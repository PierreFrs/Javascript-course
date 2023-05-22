// Callback functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function
// Higher Order functtion - accepts another function as an argument or returns another function as a result
// Callback function - passed to another function as an argument and executed inside that function

// function greetMorning(name) {
//   const myName = "john";
//   console.log(`Good morning ${name}, my name is ${myName} !`);
// }
// function greetAfternoon(name) {
//   const myName = "john";
//   console.log(`Good afternoon ${name}, my name is ${myName} !`);
// }

function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}

function greet(name, cb) {
  const myName = "john";
  console.log(`${cb(name)}, my name is ${myName} !`);
}

greet("bobo", morning);
greet("peter", afternoon);
