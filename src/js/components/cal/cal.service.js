(function () {

  'use strict';

  angular
    .module('tenPuzzleApp.components.cal')
    .service('storageService', storageService)
    .service('timerService', timerService)
    .service('randomService', randomService)
    .service('calService', calService);

  timerService.$inject = ['$timeout'];

  function storageService() {
    /*jshint validthis: true */
    this.store = (data) => {
      if (localStorage.getItem('TenPuzzle')) {
        let newData = JSON.parse(localStorage.getItem('TenPuzzle'));
        newData.push(data);
        localStorage.setItem('TenPuzzle', JSON.stringify(newData));
      } else {
        localStorage.setItem('TenPuzzle', JSON.stringify([data]));
      }
    };

    this.storeNum = (data) => {
      let newNum = parseInt(data.join().replace(/,/g, ''));
      if (localStorage.getItem('TenPuzzleNum')) {
        let newDataNum = JSON.parse(localStorage.getItem('TenPuzzleNum'));
        newDataNum.push(newNum);
        localStorage.setItem('TenPuzzleNum', JSON.stringify(newDataNum));
      } else {
        localStorage.setItem('TenPuzzleNum', JSON.stringify([newNum]));
      }
    };
  }

  function timerService($timeout) {
    /*jshint validthis: true */
    this.counter = 0;
    this.resetCounter = () => {
      this.counter = 0;
    };
    this.updateCounter = () => {
      this.counter++;
      let stop = $timeout(this.updateCounter, 1000);
      this.restartCounter = () => {
        $timeout.cancel(stop);
        this.counter = 0;
        this.updateCounter();
      };
      this.stopCounter = () => {
        $timeout.cancel(stop);
      };
      return this.counter;
    };
  }

  function randomService() {
    /*jshint validthis: true */
    this.currentNum = [];
    this.random = () => {
      let arr = [];
      let i = 0;
      while (i < 4) {
        arr.push(Math.floor(Math.random() * (9) + 1));
        i++;
      }
      this.currentNum = arr;
      return this.currentNum;
    };
  }

  function calService() {
    /*jshint validthis: true */
    this.numArr = [];
    this.operatorArr = [];
    this.cal = '';
    this.result = 0;
    this.base = base;
    this.typeOneA = typeOneA;
    this.typeOneB = typeOneB;
    this.typeTwo = typeTwo;
    this.submitCheck = submitCheck;
    this.check = check;
    this.message = '';
  }

  // a, b, c, d
  function base(num, operators) {
    if (num.length === 1) {
      return num[0];
    } else {
      let result = num[0];
      let i = 0;
      while (i < operators.length) {
        switch (operators[i]) {
          case '+':
            result += parseInt(num[i + 1]);
            break;
          case '-':
            result -= parseInt(num[i + 1]);
            break;
          case '*':
            result *= parseInt(num[i + 1]);
            break;
          case '/':
            result /= parseInt(num[i + 1]);
            break;
        }
        i++;
      }
      return result;
    }
  }

  // (a, b),c, d >>> only one divider front
  // input "d" >>> divider
  function typeOneA(num, operators) {
    let result = 0;
    let index = num.indexOf('d');

    // new number arrays
    let numOne = num.slice(0, index);
    let numTwo = num.slice(index + 1);
    let numThree = [];

    // new operator arrays
    let numOneOperators = operators.slice(0, index - 1);
    let numThreeOperators = operators.slice(index - 1);

    let temp = [];
    temp.push(base(numOne, numOneOperators));
    numThree = temp.concat(numTwo);

    result = base(numThree, numThreeOperators);
    return result;
  }

  // a, b, (c, d) >>> only one divider end
  // input "d" >>> divider
  function typeOneB(num, operators) {
    let result = 0;
    let index = num.indexOf('d');

    // new number arrays
    let numOne = num.slice(0, index);
    let numTwo = num.slice(index + 1);
    let numThree = [];

    // new operator arrays
    let numTwoOperators = operators.slice(index);
    let numThreeOperators = operators.slice(0, index);

    let temp = [];
    temp.push(base(numTwo, numTwoOperators));
    numThree = numOne.concat(temp);

    result = base(numThree, numThreeOperators);
    return result;
  }

  // a, (b, ,c), d >>> two dividers
  // input "d" >>> divider
  function typeTwo(num, operators) {
    let result = 0;
    let index = num.indexOf('d');
    let indexSecond = num.indexOf('d', num.indexOf('d') + 1);

    // new number arrays
    let numOne = num.slice(0, index);
    let numTwo = num.slice(index + 1, indexSecond);
    let numThree = [];
    let numFour = num.slice(indexSecond + 1);
    let numFive = [];

    // new operator arrays
    let numOneOperators = operators.slice(0, index - 1);
    let numTwoOperators = operators.slice(index, indexSecond - 2);
    let numThreeOperators = operators.slice(index - 1, 1);
    let numFourOperator = operators.slice(indexSecond);
    let numFiveOperator = [];

    if (indexSecond - 1 === operators.length) {
      numFiveOperator = operators.slice(indexSecond - 2);
    } else {
      numFiveOperator = operators.slice(indexSecond - 2, 1);
    }

    numThree.push(base(numOne, numOneOperators), base(numTwo, numTwoOperators));

    numFive.push(base(numThree, numThreeOperators), base(numFour, numFourOperator));

    result = base(numFive, numFiveOperator);
    return result;
  }

  function submitCheck() {
    if ()
  }

  function check(num) {
    if (num === 10) {
      return true;
    } else {
      return false;
    }
  }

})();
