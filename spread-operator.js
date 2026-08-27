//array spread
const arr1 = [1,2,3];
const arr2 = [4,5];
const arr3 = [...arr1, ...arr2, 6,7]
const combinedArr = [...arr1 , ...arr2, ...arr3];

console.log(arr3)
console.log(combinedArr)


//object spread
const obj1 = {name: "Reyad", age: 25};
const obj2 = {city: "Dhaka", country: "BD"};
const obj3 = {...obj1, ...obj2, height: 5};
const mergedObj = {...obj1, ...obj2, ...obj3};

console.log(obj3)
console.log(mergedObj)