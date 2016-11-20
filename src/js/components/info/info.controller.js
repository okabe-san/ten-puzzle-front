(function() {

  'use strict';

  angular
    .module('tenPuzzleApp.components.info', [])
    .controller('infoController', infoController);

  infoController.$inject = ['$scope'];

  function infoController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
  }

})();
