// a, b, c, d
function base(num, operators) {
  let result = 0;
  let i = 0;
  while (i < num.length) {
    switch(operators[i]) {
      case '+':
        result += parseInt(num[i]);
        break;
      case '-':
        result -= parseInt(num[i]);
        break;
      case '*':
        result *= parseInt(num[i]);
        break;
      case '/':
        result /= parseInt(num[i]);
        break;
    }
    i++;
  }
  return result;
}

// a, b, (c, d) >>> only one divider
// input "d" >>> divider
function typeOne(num, operators) {
  let result = 0;
  let first = 0;
  let secont = 0;
  let index = num.indexOf('d');
  let plus = ['+'];

  // new number arrays
  let numOne = num.slice(0, index)
  let numTwo = num.slice(index+1);
  let numThree = [];

  // new operator arrays
  let numOneOperators = operators.slice(0, index);
  let numTwoOperators = plus.concat(operators.slice(index+1));
  let numThreeOperators = plus.concat(operators[index]);

  numThree.push(base(numOne, numOneOperators), base(numTwo, numTwoOperators));

  result = base(numThree, numThreeOperators);
  return result;
}

// a, b, (c, d) >>> only one divider
// input "d" >>> divider
function typeOne(num, operators) {
  let result = 0;
  let first = 0;
  let secont = 0;
  let index = num.indexOf('d');
  let plus = ['+'];

  // new number arrays
  let numOne = num.slice(0, index)
  let numTwo = num.slice(index+1);
  let numThree = [];

  // new operator arrays
  let numOneOperators = operators.slice(0, index);
  let numTwoOperators = plus.concat(operators.slice(index+1));
  let numThreeOperator = plus.concat(operators[index]);

  numThree.push(base(numOne, numOneOperators), base(numTwo, numTwoOperators));

  result = base(numThree, numThreeOperator);
  return result;
}

// a, (b, ,c), d >>> two divider
// input "d" >>> divider
function typeTwo(num, operators) {
  let result = 0;
  let first = 0;
  let secont = 0;
  let third = 0;
  let index = num.indexOf('d');
  let indexSecond = num.indexOf('d', num.indexOf('d') + 1);
  let plus = ['+'];

  // new number arrays
  let numOne = num.slice(0, index)
  let numTwo = num.slice(index+1, indexSecond);
  let numThree = num.slice(indexSecond+1);
  let numFour = [];
  let numFive = [];

  // new operator arrays
  let numOneOperators = plus.concat(operators.slice(0, index));
  let numTwoOperators = plus.concat(operators.slice(index+1, indexSecond));
  let numThreeOperators = plus.concat(operators.slice(indexSecond-1));
  let numFourOperator = plus.concat(operators[index]);
  let numFiveOperator = plus.concat(operators[indexSecond-1]);

  numFour.push(base(numOne, numOneOperators), base(numTwo, numTwoOperators));
  

  result = base(numFive, numFiveOperators);
  return result;
}

// console.log(base([1,2,3,4], ['+', '+', '*', '+']));
console.log(typeTwo([1,'d',2,3,'d',4], ['+', '+', '*', '+']));
