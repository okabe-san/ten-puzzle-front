(function () {

  'use strict';

  angular
    .module('tenPuzzleApp.components.info')
    .service('storageDataService', storageDataService);

  function storageDataService() {
    /*jshint validthis: true */
    this.numData = [];
    this.numDataNum = [];

    this.getStorage = () => {
      let newData = JSON.parse(localStorage.getItem('TenPuzzle'));
      this.numData = newData;
      return this.numData;
    };

    this.getStorageNum = () => {
      let newData = JSON.parse(localStorage.getItem('TenPuzzleNum'));
      this.numDataNum = newData;
      return this.numDataNum;
    };

    this.deleteStorage = () => {
      localStorage.removeItem('TenPuzzle');
      localStorage.removeItem('TenPuzzleNum');
    };
  }

})();
