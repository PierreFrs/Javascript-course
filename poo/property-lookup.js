/* 
Prototype Lookup
If child does not have ask parent
Everything in JS is an object
*/

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
  //   Takes precedent over Chase because is inside the constructor
  this.bank = "Bank of America";
}

const john = new Account("john", 200);
const bob = new Account("bob", 0);

Account.prototype.bank = "CHASE";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
console.log(john);
console.log(bob);

john.deposit(200);
bob.deposit(1000);
console.log(john.bank);
