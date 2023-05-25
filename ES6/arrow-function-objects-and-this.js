// Arrow functions or fat arrow functions
// reg function : 'this' refers parent, left of the dot
// arrow function : refers to its current surrounding scope

const bob = {
  firstName: "bob",
  lastName: "Smith",
  sayName: function () {
    console.log(this);
    setTimeout(() => {
      console.log(this);
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};
const anna = {
  firstName: "anna",
  lastName: "Sanders",
  sayName: () => {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

bob.sayName();
// anna.sayName();
