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


const dogBreed = (breed) => {
  return `My favorite dog breed is ${breed}.`
};

console.log(dogBreed('lab'));


const fortyTwo = (number) => {
  return number + 42;
};

console.log(fortyTwo(1));
console.log(fortyTwo(42));
console.log(fortyTwo(10));

console.log('outputs break');

const oldAge = (year) => {
  return 2099 - year;
};

console.log(oldAge(1990));
console.log(oldAge(2000));
console.log(oldAge(2059));