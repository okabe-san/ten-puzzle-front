(function() {

  'use strict';

  angular
    .module('tenPuzzleApp.config', ['ngRoute'])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl:'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .when('/cal', {
      templateUrl: 'js/components/cal/cal.view.html',
      controller: 'calController',
      controllerAs: 'calCtrl'
    })
    .when('/info', {
      templateUrl: 'js/components/info/info.view.html',
      controller: 'infoController',
      controllerAs: 'infoCtrl'
    })
    .otherwise('/');
  }
})();
