(function() {

  'use strict';

  angular
    .module('tenPuzzleApp.components.cal', [])
    .controller('timerController', timerController)
    .controller('randomController', randomController)
    .controller('calController', calController);

  timerController.$inject = ['$scope', '$timeout'];
  randomController.$inject = ['randomService'];
  calController.$inject = ['calService'];

  function timerController($scope, $timeout) {
    $scope.counter = 0;
    let updateCounter = () => {
      $scope.counter++;
      $timeout(updateCounter, 1000);
    };
    updateCounter();
  }

  function randomController(randomService) {
    /*jshint validthis: true */
    this.random = randomService.random;
    this.get = () => {
      this.random = randomService.random();
    };
  }

  function calController(calService) {
    /*jshint validthis: true */
    this.numArr = calService.numArr;
    this.operatorArr = calService.operatorArr;
    this.cal = calService.cal;

    this.add = (item) => {
      if (item === '+' || item === '-' || item === '*' || item === '/') {
        this.operatorArr.push(item);
      } else if (item === '(' || item === ')') {
        this.numArr.push('d');
      } else {
        this.numArr.push(item);
      }
      this.cal = this.cal + item;
    };

    this.clear = () => {
      let lastIndex = this.cal.substring(this.cal.length - 1);
      if (lastIndex === '+' || lastIndex === '-' || lastIndex === '*' || lastIndex === '/') {
        this.operatorArr.pop();
      } else {
        this.numArr.pop();
      }
      this.cal = this.cal.substring(0, this.cal.length - 1);
    };

    this.submit = () => {
      this.result = calService.result;
      if (this.numArr.length === 4) {
        this.result = calService.base(this.numArr, this.operatorArr);
      } else if (this.numArr[0] === 'd') {
        this.numArr.shift();
        this.result = calService.typeOneA(this.numArr, this.operatorArr);
      } else if (this.numArr[this.numArr.length - 1] === 'd') {
        this.numArr.pop();
        this.result = calService.typeOneB(this.numArr, this.operatorArr);
      } else {
        this.result = calService.typeTwo(this.numArr, this.operatorArr);
      }
    };

  }

})();
