// JSON.stringify(), JSON.parse()

const friends = ["john", "peter", "bobby"];

localStorage.setItem("friends", JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem("friends"));
console.log(values[0]);

let fruits;

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}

console.log(fruits);

fruits.push("orange");
localStorage.setItem("fruits", JSON.stringify(fruits));
