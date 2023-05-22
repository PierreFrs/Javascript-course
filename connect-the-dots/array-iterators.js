// Powerfull Array Methods
// forEach, map, filter, find, reduce
// iterate over array - no for loop required
// Accept CALLBACK function as an argument, calls callback against each items in an array. Reference item in the callback parameter

// show all numbers

const numbers = [0, 1, 2, 3, 4];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
    id: 1,
    salary: 200,
  },
  {
    name: "peter",
    age: 25,
    position: "designer",
    id: 2,
    salary: 300,
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
    id: 3,
    salary: 500,
  },
];

// forEach
// Does not return a new array

function showPerson(person) {
  console.log(person.position.toUpperCase());
}
// people.forEach(showPerson);

people.forEach(function (person) {
  console.log(person.position.toUpperCase());
});

// map
// does return a new array
// does not change size of original array
// uses values from original array when making new one

const ages = people.map(function (person) {
  return person.age + 20;
});

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join("");

console.log(names);

// filter
// does not return a new array
// can manipulate the size of the new array
// returns based on condition

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});

const developers = people.filter(function (person) {
  return person.position === "developer";
});

console.log(developers);

// find
// returns single instance - (in this case object)
// returns first match, if no match undefined
// great for getting unique value

const patronyme = ["bob", "peter", "susy"];
const person = people.find(function (person) {
  return person.id === 3;
});

console.log(
  patronyme.find(function (name) {
    return name === "bob";
  })
);

console.log(person);

// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

const total = people.reduce(function (acc, currItem) {
  console.log(`total ${acc}`);
  console.log(`current money : ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 0);

console.log(total);
