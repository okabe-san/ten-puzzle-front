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

console.log(base([1,2,3,4], ['+', '+', '*', '+']));
