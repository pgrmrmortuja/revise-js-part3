//find
const numbers = [10, 20, 25, 15];

const result = numbers.find(n => n < 20);
console.log(result); // return first matching value;


//reduce
const sum = numbers.reduce((acc, n) => {
    return acc += n;
})
console.log(sum);


