// this
// points to the left of the dot

const john = {
  firstName: "John",
  lastName: "Anderson",
  fullName: function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

const bob = {
  firstName: "Bob",
  lastName: "Sanders",
  fullName: function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

john.fullName();
bob.fullName();

/* In Reg functions (not arrow) "this" determined by "HOW"!!! a function is invoked (left of .)

default to global - window
arrow functions - pump the breaks
*/

function showThis() {
  console.log(this);
}

showThis();

const johnny = {
  name: "johnny",
  showThis: showThis,
};

const bobby = {
  name: "bobby",
  showThis: showThis,
};

johnny.showThis();
bobby.showThis();
