(function() {

  'use strict';

  angular
    .module('tenPuzzleApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope'];

  function mainController($scope) {
    /*jshint validthis: true */
    this.greeting = '電車の旅にようこそ!';
  }

})();
