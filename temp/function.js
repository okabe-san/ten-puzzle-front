// a, b, c, d
function base(num, operators) {
  if (num.length === 1) {
    return num[0];
  } else {
    let result = num[0];
    let i = 0;
    while (i < operators.length) {
      switch(operators[i]) {
        case '+':
          result += parseInt(num[i+1]);
          break;
        case '-':
          result -= parseInt(num[i+1]);
          break;
        case '*':
          result *= parseInt(num[i+1]);
          break;
        case '/':
          result /= parseInt(num[i+1]);
          break;
      }
      i++;
    }
    return result;
  }
}

// a, b, (c, d) >>> only one divider
// input "d" >>> divider
function typeOne(num, operators) {
  let result = 0;
  let first = 0;
  let secont = 0;
  let index = num.indexOf('d');

  // new number arrays
  let numOne = num.slice(0, index);
  let numTwo = num.slice(index+1);
  let numThree = [];

  // new operator arrays
  let numOneOperators = operators.slice(0, index-1);
  let numTwoOperators = operators.slice(index);
  let numThreeOperators = operators.slice(index-1, 1);

  numThree.push(base(numOne, numOneOperators), base(numTwo, numTwoOperators));

  result = base(numThree, numThreeOperators);
  return result;
}

// a, (b, ,c), d >>> two divider
// input "d" >>> divider
// function typeTwo(num, operators) {
//   let result = 0;
//   let first = 0;
//   let secont = 0;
//   let third = 0;
//   let index = num.indexOf('d');
//   let indexSecond = num.indexOf('d', num.indexOf('d') + 1);
//
//   // new number arrays
//   let numOne = num.slice(0, index);
//   let numTwo = num.slice(index+1, indexSecond);
//   let numThree = [];
//   let numFour = num.slice(indexSecond+1);
//   let numFive = [];
//
//   // new operator arrays
//   let numOneOperators = plus.concat(operators.slice(0, index));
//   let numTwoOperators = plus.concat(operators.slice(index+1, indexSecond));
//   let numThreeOperators = plus.concat(operators.slice(indexSecond-1));
//   let numFourOperator = plus.concat(operators[index]);
//   let numFiveOperator = plus.concat(operators[indexSecond-1]);
//
//   numThree.push(base(numOne, numOneOperators), base(numTwo, numTwoOperators));
//
//   numFive.push(base(numThree, numThreeOperators), base(numFour, numFourOperator));
//
//   result = base(numFive, numFiveOperator);
//   return result;
// }
console.log(base([1,2,3,4], ['*', '*', '*']));
console.log(typeOne([1,'d',2,3,4], ['*', '-', '*']));
