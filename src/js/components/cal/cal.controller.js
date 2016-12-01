(function() {

  'use strict';

  angular
    .module('tenPuzzleApp.components.cal', [])
    .controller('initController', initController)
    .controller('calController', calController);

  initController.$inject = ['$scope', 'randomService', 'timerService'];
  calController.$inject = ['$scope', '$window', 'calService', 'timerService', 'storageService'];

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

  function calController($scope, $window, calService, timerService, storageService) {
    /*jshint validthis: true */
    this.numArr = calService.numArr;
    this.operatorArr = calService.operatorArr;
    this.cal = calService.cal;
    this.result = calService.result;

    this.saveData = () => {
      storageService.store(timerService.counter);
    };

    $scope.reloadRoute = () => {
      $window.location.reload();
    };

    this.cleanUp = () => {
      this.numArr = [];
      this.operatorArr = [];
      this.cal = '';
      this.result = 0;
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
      if (this.numArr.length === 4) {
        this.result = calService.base(this.numArr, this.operatorArr);
        if (!calService.check(this.result)) {
          this.message = 'Wrong...';
        } else {
          this.message = 'Correct!';
          timerService.stopCounter();
        }
      } else if (this.numArr[0] === 'd') {
        this.numArr.shift();
        this.result = calService.typeOneA(this.numArr, this.operatorArr);
        if (!calService.check(this.result)) {
          this.message = 'Wrong...';
        } else {
          this.message = 'Correct!';
          timerService.stopCounter();
        }
      } else if (this.numArr[this.numArr.length - 1] === 'd') {
        this.numArr.pop();
        this.result = calService.typeOneB(this.numArr, this.operatorArr);
      } else {
        this.result = calService.typeTwo(this.numArr, this.operatorArr);
      }
    };

  }

})();
