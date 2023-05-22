// Select the element or group of element that we want
// Decide the effect that we want to to apply to the selection

// querySelector('any css') - selects one
// querySelectorAll('any css') - selects all

const result = document.querySelector("#result");
result.style.backgroundColor = "blue";

const item = document.querySelector(".special");
console.log(item);

const lastItem = document.querySelector("li:last-child");
console.log(lastItem);

const listItems = document.querySelectorAll(".special");
console.log(listItems);

listItems.forEach(function (item) {
  console.log(item);
  item.style.color = "yellow";
});
