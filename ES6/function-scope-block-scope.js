// var, let, const
// let, const - blocked scope {} - anything within {}
// var - function scope

// global scope

var amount = 100;

function greet() {
  var random = "random value";
  console.log("Hello there");
}
// console.log(random);

// greet();

let total = 1000;
let test = true;

if (test) {
  let total = "oranges and onions";
  let value = "some random value";
  console.log("hello there");
}

{
  let total = 100;
  console.log(total);
}

{
  let total = 200;
  console.log(total);
}

// console.log(value);

console.log(total);
