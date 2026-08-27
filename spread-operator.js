//array spread
const arr1 = [1,2,3];
const arr2 = [4,5];
const arr3 = [...arr1, ...arr2, 6,7]
const combinedArr = [...arr1 , ...arr2, ...arr3];

console.log(arr3)
console.log(combinedArr)

