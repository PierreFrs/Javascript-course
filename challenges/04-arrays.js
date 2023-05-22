let fruits = ["banana", "apple", "orange", "mango", "pear"];
fruits[4] = 7;
const firstFruit = fruits[0];
fruits[4] = "pear";
console.log(firstFruit, fruits);

// Properties & Methods

let names = ["john", "bobo", "barry", "olga", "ben"];

// length
console.log(names.length);
console.log(names[names.length - 1]);

// concat
const lastNames = ["pepper", "onion", "banana"];
const allNames = names.concat(lastNames);
console.log(allNames);

// reverse
console.log(allNames.reverse());

// unshift
allNames.unshift("susy");
console.log(allNames);

// shift
allNames.shift("susy");
console.log(allNames);

// push
allNames.push("popo");
console.log(allNames);

// pop
allNames.pop();
console.log(allNames);

// splice - mutates original array
const specificNames = allNames.splice(1, 3); /* index and number of values */
console.log(specificNames);
console.log(allNames);
