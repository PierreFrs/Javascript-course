const url = "./api/people.json";

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayItems(data))
    .catch((err) => console.log(err));
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
