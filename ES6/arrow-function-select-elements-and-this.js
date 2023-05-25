// Arrow functions or fat arrow functions
// reg function : 'this' refers parent, left of the dot
// arrow function : refers to its current surrounding scope

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  console.log(this);

  setTimeout(() => {
    this.style.color = "black";
  }, 2000);
});
