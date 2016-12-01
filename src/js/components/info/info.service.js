(function () {

  'use strict';

  angular
    .module('tenPuzzleApp.components.info')
    .service('storageService', storageService);

  function storageService() {
    /*jshint validthis: true */
    this.numData = [];

    this.getStorage = () => {
      let newData = JSON.parse(localStorage.getItem('TenPuzzle'));
      this.numData = newData;
      console.log(this.numData);
      return this.numData;
    };
  }

})();
