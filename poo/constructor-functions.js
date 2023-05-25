// Blue print
// Factory Functions and Constructor Functions
// Consctructor Functions
// new - creates new object, points to it, omit return

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
john.fullName();
const bob = new Person("bob", "jordan");
bob.fullName();
