// className
// classList

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

// const classValue = first.className;
// console.log(classValue);

second.className = "colors text";

third.classList.add("colors", "text");
third.classList.remove("colors");

let result = third.classList.contains("colors");
if (result) {
  console.log("hello world");
} else {
  console.log("bouh");
}

const classValue = third.classList;
console.log(classValue);
