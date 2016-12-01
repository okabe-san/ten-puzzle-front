function useAll(arr1, arr2) {
  if (arr1.sort().join('').replace(/d/g, '') === arr2.sort().join('')) {
    return true;
  } else {
    return false;
  }
}

console.log(useAll([1,'d',2,3,'d'], [2,3,1]));
