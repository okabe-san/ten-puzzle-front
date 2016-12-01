(function() {

  'use strict';

  angular
    .module('tenPuzzleApp.components.info', [])
    .controller('initController', initController)
    .controller('infoController', infoController);

  initController.$inject = ['$scope', 'storageService'];

  function initController($scope, storageService) {
    /*jshint validthis: true */
    $scope.get = () => {
      this.numData = storageService.getStorage();
    };
  }

  function infoController() {
    /*jshint validthis: true */
    this.greeting = '記録帳';
  }

})();
