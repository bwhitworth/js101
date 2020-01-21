console.log('OBJECTS');

const wordLength = (word) => {
  return word.length;
};

console.log(wordLength('cat')); //3
console.log(wordLength('elephant')); //8
console.log('num of letters', wordLength( 'cat')); //num of letters 3
console.log(' ');

const ageCheck = (age) => {
  if (age >= 21) {
  console.log('party!!!!!!!');    
  } else {
    console.log('no drinks for you.');
  };
};

ageCheck(12); //no drinks for you.
ageCheck(24); //party!!!!!!!
ageCheck(); //undefined results in the 'else'

console.log(' ');