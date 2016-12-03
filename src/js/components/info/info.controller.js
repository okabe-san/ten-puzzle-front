(function() {

  'use strict';

  angular
    .module('tenPuzzleApp.components.info', [])
    .controller('initDataController', initDataController)
    .controller('infoController', infoController);

  initDataController.$inject = ['$scope', 'storageDataService'];

  infoController.$inject = ['$window', 'storageDataService'];

  function initDataController($scope, storageDataService) {
    /*jshint validthis: true */
    $scope.getData = () => {
      let scoreArr = storageDataService.getStorage();
      let numArr = storageDataService.getStorageNum();
      if (scoreArr !== null) {
        this.repeatData = scoreArr.map(function(value, index) {
          return {
            data: value,
            value: numArr[index]
          };
        });
      }
    };
  }

  function infoController($window, storageDataService) {
    /*jshint validthis: true */
    this.deleteData = () => {
      storageDataService.deleteStorage();
      $window.location.reload();
    };
  }

})();
