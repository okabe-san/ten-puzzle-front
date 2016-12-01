(function() {

  'use strict';

  angular
    .module('tenPuzzleApp.components.main', [])
    .controller('mainController', mainController);

  function mainController() {
    /*jshint validthis: true */
    this.greeting = '電車の旅にようこそ!';
  }

})();
