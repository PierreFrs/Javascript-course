// All objects in JS have access to constructor property that returns a constructor function that created it
// built in constructor functions
// arrays and functions are objects in JS

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love React`
    );
  };
  console.log(this);
}
const john = new Person("john", "anderson");
console.log(john.constructor);

const bob = {};
console.log(bob.constructor);
const list = [];
console.log(list.constructor);
const sayHi = function () {};
console.log(sayHi.constructor);

const susy = new john.constructor("susy", "carpenter");
susy.fullName();
