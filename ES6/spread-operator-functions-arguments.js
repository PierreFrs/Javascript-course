// spread operator ...
// Allows an iterable to spread/expand individually inside receiver
// split into single items and copy them

const numbers = [23, 45, 66, 88, 3938364];
console.log(Math.max(...numbers));

const john = ["john", "sanders"];

const sayHello = (name, lastName) => {
  console.log(`Hello ${name} ${lastName}`);
};

sayHello(...john);
