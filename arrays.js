console.log('ARRAYS');
console.log(' ');

const junkDrawer = ['hi', 2, true, {name: 'Zoe'}, [1,2,3,4]];
console.log(junkDrawer[2]); //true

junkDrawer.push('fluffy');  //adds fluffy to end
console.log(' ')

const valuePrinter = (arr, ind) => {
  return arr[ind];
};
 
console.log(valuePrinter([1,2,3,4,5], 2)); //3
console.log(valuePrinter(['cat', 'dog', 'bear', 'turtle', 'fish'], 3)); //turtle

