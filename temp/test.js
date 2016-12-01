// function useAll(arr1, arr2) {
//   if (arr1.sort().join('').replace(/d/g, '') === arr2.sort().join('')) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// console.log(useAll([1,'d',2,3,'d'], [2,3,1]));

localStorage.setItem('Ten Puzzle', JSON.stringify([newData]));



let arrNum = JSON.parse(localStorage.getItem('Ten Puzzle'));

arrNum.push(newData);

localStorage.setItem('Ten Pullze', JSON.stringify(arrNum));
