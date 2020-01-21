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

const expense = {
  dateCreated: '01/17/2020',
  location: 'Baja Burrito',
  cost: 12.57,
  isGood: true
};

// dot notation
console.log(expense.cost);

// bracket notation
console.log(expense['cost']);
console.log('');

const employee = {
  id: "asdf1234",
  startDate: '01/01/2020',
  storeNum: 2345,
  firstName: 'Zoe',
  lastName: 'Ames',
  industry: 'healthcare',
  passedDrugScreen: true,
  salary: 3000000000000,
  collegeDegree: true,
  position: 'Underwater basket weaver',
  supervisor: 'asdf7890'
};

const statusMaker = (emp) => {
  if (emp.firstName.startsWith('M')) { //.startsWith or emp.firstName[0] both work here
    emp.status = 'VIP'
  } else {
    emp.status = 'peasant'
  };
  return emp;
};

console.log(statusMaker(employee));
