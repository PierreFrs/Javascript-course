// Closure
// Closure gives you access to an outer function's scope from an inner function
// make private variables with closures

function outer() {
  let privateVar = "secret";
  function inner() {
    console.log(`Hello there secret is : ${privateVar}`);
  }
  return inner;
  inner();
}

outer()();

const value = outer();
console.log(value);
value();

// Basic Exemple :

/* function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  return showBalance;
}

newAccount("susan", 500)();

const john = newAccount("john", 300);
const bob = newAccount("bob", 100);

john();
bob(); */

// Complete Exemple :

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hey ${name}, sorry not enough funds`);
    }
    balance -= amount;
  }
  return {
    showBalance: showBalance,
    deposit: deposit,
    withdraw: withdraw,
  };
}

const john = newAccount("john", 300);
const bob = newAccount("bob", 100);

john.showBalance();
john.deposit(400);
john.deposit(1000);
john.withdraw(4000);
john.showBalance();
bob.showBalance();
