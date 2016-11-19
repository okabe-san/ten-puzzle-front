// a, b, c, d
function base(num, operators) {
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

// a, b, (c, d) >>> only one divider
// input "d" >>> divider
// function typeOne(num, operators) {
//   let result = 0;
//   let first = 0;
//   let secont = 0;
//   let index = num.indexOf('d');
//   let plus = ['+'];
//
//   // new number arrays
//   let numOne = num.slice(0, index);
//   let numTwo = num.slice(index+1);
//   let numThree = [];
//
//   // new operator arrays
//   let numOneOperators = operators.slice(0, index);
//   let numTwoOperators = plus.concat(operators.slice(index+1));
//   let numThreeOperators = plus.concat(operators[index]);
//
//   numThree.push(base(numOne, numOneOperators), base(numTwo, numTwoOperators));
//
//   result = base(numThree, numThreeOperators);
//   return result;
// }


console.log(base([1,2,3,4], ['*', '*', '/']));
// console.log(typeOne([1,'d',2,3,4], ['+', '*', '+']));
