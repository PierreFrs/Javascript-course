// nested objects
// set variables as property value
// dot notation vs bracket notation

const age = 60;
let random = "random-value";
random = "age";

const person = {
  name: "john",
  age: age,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
  job: {
    title: "developper",
    company: {
      name: "coding addict",
      address: "123 main street",
    },
  },
  "random-value": "random",
};

console.log(person.job.company.name);
console.log(person["random-value"]);
console.log(person[random]);
