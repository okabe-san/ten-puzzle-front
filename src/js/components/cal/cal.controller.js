(function() {

  'use strict';

  angular
    .module('tenPuzzleApp.components.cal', [])
    .controller('initController', initController)
    .controller('calController', calController);

  initController.$inject = ['$scope', 'randomService', 'timerService'];
  calController.$inject = ['calService', 'timerService', 'storageService'];

  function initController($scope, randomService, timerService) {
    /*jshint validthis: true */
    $scope.get = () => {
      this.random = randomService.random();
    };
    this.counter = () => timerService.counter;
    $scope.timer = () => {
      timerService.updateCounter();
    };
  }

  function calController(calService, timerService, storageService) {
    /*jshint validthis: true */
    this.numArr = calService.numArr;
    this.operatorArr = calService.operatorArr;
    this.cal = calService.cal;
    this.result = calService.result;
    this.counter = timerService.counter;

    this.stop = () => {
      timerService.stopCounter();
      timerService.resetCounter();
    };

    this.restart = () => {
      timerService.restartCounter();
    };

    this.cleanUp = () => {
      this.numArr = calService.numArr.splice(0,0);
      this.operatorArr = calService.numArr.splice(0,0);
      this.cal = '';
      this.result = 0;
      this.message = '';
    };

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

    this.submit = () => {
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
      if (!calService.check(this.result)) {
        this.message = 'is not 10...';
      } else {
        this.message = 'Correct! Saved to Record Book.';
        timerService.stopCounter();
        storageService.store(timerService.counter);
        storageService.storeNum(this.numArr);
      }
    };

  }

})();
