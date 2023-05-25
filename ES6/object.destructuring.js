// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// arrays

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

const {
  first: firstName,
  last: lastName,
  city,
  zip,
  siblings: { sister },
} = bob;
console.log(firstName, lastName, city, zip, sister);

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;
