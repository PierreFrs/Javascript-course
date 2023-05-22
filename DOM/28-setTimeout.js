/* 
setTimeout - runs function once after specific time

    - pass function reference
    - duration in ms (1000ms = 1s)
    - default 0, will cover more extensively in async/await section
    - returns unique identifier
    - clearTimeout to cancel
    - on window object
 */

function sayHello() {
  console.log("hello john");
}

setTimeout(sayHello, 1000);

// will not work :
// setTimeout(sayHello(), 1000);

// alternative approach, ES6 arrow functions

setTimeout(function () {
  console.log("hello john");
}, 2000);

// pass arguments

function showScore(name, score) {
  console.log(`Hello ${name}, your score is ${score}`);
}

// setTimeout(showScore, 1000, "john", 100);

const firstID = setTimeout(showScore, 1000, "john", 100);
const secondID = setTimeout(showScore, 1000, "peter", 43);

console.log(firstID);
console.log(secondID);

clearTimeout(firstID);
