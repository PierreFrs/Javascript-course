// spread operator ...
// Allows an iterable to spread/expand individually inside receiver
// split into single items and copy them
// ES2018 - ES8

const person = { name: "john", job: "developer" };
const newPerson = { ...person, city: "Chicago", name: "peter" };
console.log(person);
console.log(newPerson);
