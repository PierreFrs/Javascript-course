// Template strings/literals
// tagged template literals

const author = "some author";
const statement = "Some Statement";

const quote = highlight`Here is the ${statement} by ${author} and it could not be more true.`;
console.log(quote);

const result = document.getElementById("result");
result.innerHTML = quote;

function highlight(text, ...vars) {
  const awesomeText = text.map((item, index) => {
    return `${item} <strong xlass="blue">${vars[index] || ""}</strong>`;
  });
  return awesomeText.join("");
}
