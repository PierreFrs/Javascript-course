/* 
ES6 Classes - Syntactic sugar
Prototypal Inheritance
*/

class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  bank = "Chase";
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

const john = new Account("john", 0);
console.log(john);
console.log(john.name);
john.deposit(500);

const bob = new Account("bob", 100);
console.log(bob);
console.log(bob.name);
bob.deposit(300);
