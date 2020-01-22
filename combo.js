console.log('COMBO');

//Challenge #1
const evenOdd = (num) => {
  if (num % 2 === 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
};

console.log(evenOdd(1));
console.log(evenOdd(66));
console.log('');

//Challenge #2
const opposite = (num) => {
  return 0-num
};

console.log(opposite(9));
console.log(opposite(57));
console.log('');

//Challenge #3
const isPalindrome = (input) => {
  input_array = input.split("");
  let output = input_array.reverse().join("");
  if (input == output) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome('mom'));
console.log(isPalindrome('bird'));
console.log('');


//Challenge #4
const mouth = (animal) => {
if (animal === 'alligator') {
  return 'small'
} else {
  return 'wide'
}
};

console.log(mouth('horse'));
console.log(mouth('alligator'));
