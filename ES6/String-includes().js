// String includes() - checks if a string iincludes another string

const products = [
  {
    title: "Modern Poster",
  },

  {
    title: "Bar Stool",
  },
  {
    title: "Armchair",
  },
  {
    title: "Leather Chair",
  },
];

const text = "ad";

const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(text)
);
console.log(filteredProducts);

// const firstName = "john";
// // const result = firstName.includes("jo");

// const product = {
//   title: "Leather Chair",
// };

// const result = product.title.includes("Leather Chair");

// console.log(result);
