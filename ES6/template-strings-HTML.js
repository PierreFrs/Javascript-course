// Template strings/literals

const person = {
  name: "Kyle",
  job: "developer",
  hobbies: ["surf", "music", "being an annoying dude"],
};

const result = document.getElementById("result");

result.innerHTML = `
<h2>${person.name}</h2>
<p>${person.job}</p>
<ul>${person.hobbies
  .map((item) => {
    return `<li>${item}</li>`;
  })
  .join("")}</ul>
`;
