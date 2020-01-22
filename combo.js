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
const isPalindrome = (text) => {
  const cleanText = text.toLowerCase().replace(/[.,\/+ #!$%\^&\*;:{}=\-_`~()]/g,"");
  //makes lowercase and replaces spaces with nothing, then removes all punctuation
  // the /g tells it to keep checking, not just stop when it finds the first one (this is REGEX)
  // we removed .replace(' ', '') and added space into the other replace list of characters (after +)
  const opp = cleanText.split('').reverse().join(''); //takes apart, reverses, and re-joins
  if(cleanText === opp) {
    return true
  } else {
    return false
  }

// OR 
// return (cleanText === opp) instead of the if statement (booleans return true or false, inherently)
 
};


// my code: (copied from web search for palindrome)
//input_array = input.split("");
//let output = input_array.reverse().join("");
//if (input == output) {
//  return true;
//} else {
// return false;
//}

console.log(isPalindrome('mom'));
console.log(isPalindrome('bird'));
console.log(isPalindrome('Race /+car!'));
console.log(' ');


//Challenge #4
const animal = (str) => {
  if (str.toLowerCase() === 'alligator')
  return 'small'
  } else {
   return 'wide'
  }
// my code:
// if (animal === 'alligator') {
//   return 'small'
// } else {
//   return 'wide'
// }
};

console.log(animal('fish'));
console.log(animal('alligator'));
console.log(animal('AllIGator'));
