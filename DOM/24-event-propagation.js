// allows select dynamic elements
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log("current target", e.currentTarget);
  //   console.log("target", e.target);
  //   if (e.target.classList.contains("link")) {
  //     console.log("you clicked on the link");
  //   }
}

function stopPropagation(e) {
  console.log("You clicked on list");
  e.stopPropagation();
}

// list.addEventListener("click", showBubbling, { capture: true });
// container.addEventListener("click", showBubbling, { capture: true });
// document.addEventListener("click", showBubbling, { capture: true });
// window.addEventListener("click", showBubbling, { capture: true });

// const container = document.querySelector(".container");
// const btn = document.querySelector(".btn");
// // const heading = document.querySelector(".heading");
// // console.log(heading);

// function sayHello() {
//   console.log("hello there");
// }

// btn.addEventListener("click", function () {
//   const element = document.createElement("h1");
//   element.classList.add("heading");
//   element.textContent = `I'm inside the container`;
//   container.appendChild(element);
// });

// container.addEventListener("click", function (e) {
//   if (e.target.classList.contains("heading")) {
//     console.log("hello there");
//   }
// });

// // heading.addEventListener("click", sayHello);
