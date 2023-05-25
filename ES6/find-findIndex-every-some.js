// find - gets specific item
// findIndex - gets index of the item
// every - every item in the array
// some - at least one item

const people = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "anna" },
];

// const anna = people.filter(person => person.name === 'anna');
// console.log(anna);
// console.log(anna[0].name);
// console.log(anna[0].id);

// find
// const anna = people.find((person) => person.name === "anna");
// console.log(anna);

// findIndex
// const person = people.findIndex((item) => item.id === 3);
// console.log(person);
// const newPeople = people.slice(0, person);
// console.log(newPeople);

// every, some
const grades = ["A", "B", "A", "B", "C"];
const goodGrades = ["A", "B", "A", "B"];
const allGoodGrades = goodGrades.every((grade) => grade !== "C");
console.log(allGoodGrades);
const oneBadGrade = grades.some((grade) => grade === "C");
console.log(oneBadGrade);
