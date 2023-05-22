// Blue print
// Factory Functions and Constructor Functions
// Factory Functions

// const john = {
//   firstName: "John",
//   lastName: "Anderson",
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

// const bob = {
//   firstName: "Bob",
//   lastName: "Sanders",
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I love JS`
      );
    },
  };
}

const john = createPerson("John", "Sanders");
john.fullName();
const susy = createPerson("Susy", "Apple");
susy.fullName();
const bob = createPerson("Bob", "Jordan");
bob.fullName();
