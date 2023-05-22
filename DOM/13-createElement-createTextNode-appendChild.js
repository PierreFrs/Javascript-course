// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

const result = document.querySelector("#result");

// create empty element

const bodyDiv = document.createElement("div");
// create text node
const text = document.createTextNode("a simple body div");
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

const heading = document.createElement("h2");
const headingText = document.createTextNode("dynamic heading");
heading.classList.add("red");
heading.appendChild(headingText);

document.body.appendChild(heading);

console.log(result.children);
