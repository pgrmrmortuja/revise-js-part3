//find
const numbers = [10, 20, 25, 15];

const result = numbers.find(n => n < 20);
console.log(result); // return first matching value;


//reduce
const sum = numbers.reduce((acc, n) => {
    return acc += n;
})
console.log(sum);


//sort
//string sort
const str = ["Apple", "Mango", "Banana"];
const sortStr = str.sort();
console.log(sortStr)


//number sort
const numbs = [3,6,7,2,8,1];
const sortCapital = numbs.sort((a,b) => a-b);
const sortSmall = numbs.sort((a,b) => b - a);
console.log(sortCapital);
console.log(sortSmall);