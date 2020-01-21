console.log("functions test");

// this is ES6, use const or let to name functions
// "var is dead to us"
// use const until it tells you otherwise (3 weeks?)
// use the `` (template literals) format instead of
  //concatenated strings with + sign
const nuggetizer = (animal) => {
  const output = `processed ${animal}`;
  return output;
};
// this is called an arrow function or fat arrow
// works on probably 90% of the things we will do

console.log(nuggetizer ('chicken'));
console.log(nuggetizer ('cow'));
console.log(nuggetizer ('pig'));
console.log(nuggetizer ('fish'));
console.log(nuggetizer ('tire'));
