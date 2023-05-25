// spread operator ...
// Allows an iterable to spread/expand individually inside receiver
// split into single items and copy them

const headings = document.querySelectorAll("h1");
const result = document.getElementById("result");

const text = [...headings]
  .map((item) => `<span>${item.textContent}</span>`)
  .join("");
result.innerHTML = text;
console.log(text);
