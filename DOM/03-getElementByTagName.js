// Select an element or group of elements
// Decide the effect that we want to apply to the selection

// getElementByTagName("tagname");
// HTMLCollection = array-like object
// index, length property but not array methods (forEach)

// querySelectorAll() in most cases
// NodeList - objects are collections of nodes
// Can run forEach
// turn them into array - spread operator [...]
// after that can use any array properties

const headings = document.getElementsByTagName("h2");
headings[0].style.color = "red";
console.log(headings.length);

const items = document.querySelectorAll("li");

const betterItems = [...items];

betterItems.forEach(function (item) {
  console.log(item);
  item.style.color = "blue";
});

items[2].style.color = "orange";
