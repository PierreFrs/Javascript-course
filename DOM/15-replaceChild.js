// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// insertBefore('element', 'location')

const result = document.querySelector("#result");
const first = document.querySelector(".red");

// create empty element

const bodyDiv = document.createElement("div");
// create text node
const text = document.createTextNode("a simple body div");
bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv, result);

// result element
const heading = document.createElement("h2");
const headingText = document.createTextNode("dynamic heading");
heading.appendChild(headingText);
heading.classList.add("red");

result.insertBefore(heading, first);

const smallHeading = document.createElement("h6");
const smallText = document.createTextNode("I am small heading text");
smallHeading.classList.add("red");
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);

console.log(result.children);
