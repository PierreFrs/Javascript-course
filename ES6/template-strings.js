// Template strings/literals
// `` backticks above tab key of 1 key

const name = "bob";
const lastName = "sanders";
const age = 25;

const phrase =
  "my full name is " +
  name +
  " " +
  lastName +
  " and I am " +
  age +
  " years old";

const phrase2 = `my full name is ${name} ${lastName} and I am ${age} years old`;

console.log(phrase);
console.log(phrase2);
