// Rest Operator ...
// Gather/Collects the items
// must be the last element

// Arrays
const fruit = ["apple", "orange", "lemon"];
const [first, ...fruits] = fruit;
console.log(first, fruits);

// objects
const person = { name: "john", lastName: "smith", job: "developer" };
const { job, ...rest } = person;
// console.log(job, rest);

const testScores = [78, 90, 64, 83, 74, 09];

const getAverage = (name, ...scores) => {
  //   console.log(name);
  //   console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`${name} average score is ${total / scores.length}`);
};

getAverage(person.name, 78, 90, 54, 73, 49);
getAverage(person.name, ...testScores);
