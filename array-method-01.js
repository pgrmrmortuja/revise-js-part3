const numbers = [1, 2, 3];

//for of
for (n of numbers) {
    // console.log(n)
}

//for each
numbers.forEach((n, idx) => {
    console.log(idx, n)
})

//map
const fruits = ["apple", "banana", "coconut"];
const newFruits = fruits.map((f, idx) => {
    return {
        id: idx,
        fruit: f.toUpperCase()
    };
})
console.log(newFruits);


