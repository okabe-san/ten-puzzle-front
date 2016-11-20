// sample angular code

(function() {

  'use strict';

  angular
    .module('tenPuzzleApp', [
      'ngRoute',
      'tenPuzzleApp.config',
      'tenPuzzleApp.components.main',
      'tenPuzzleApp.components.info'
    ]);

})();
