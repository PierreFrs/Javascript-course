// Set object - stores a collection of unique values of any type

// new Set()
// add(values)
// delete(value)
// clear()
// has(value)

// iterators
// entries(), keys(), values(), forEach()

const unique = new Set();

const random = "third";

unique.add("first");
unique.add("second");
unique.add(random);
unique.add("fourth");
unique.add(5);

// const result = unique.delete("third");
// console.log(result);

const result = unique.delete("five");
console.log(result);

// const noResult = unique.clear();
// console.log(noResult);

const isValue = unique.has(4);
console.log(isValue);

console.log(unique);
