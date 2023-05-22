// getAttribute()
// setAttribute()

const first = document.querySelector(".first");
const classValue = first.getAttribute("class");
// console.log(classValue);

const link = document.getElementById("link");
const showLink = link.getAttribute("href");
console.log(showLink);

const last = link.nextElementSibling;
last.setAttribute("class", "first");
last.textContent = "I also have a class of first";
console.log(last);

const links = document.querySelectorAll(".first");
console.log(links);