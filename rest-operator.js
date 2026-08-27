//array rest
const nums = [1,2,3,4];
const [a, ...b] = nums;

const [c, d, ...e] = nums;

// console.log(a);
// console.log(b);
// console.log(c,d,e);

//object rest
const user = {
    id: 1,
    name: "Rahim",
    email: "abc@gmail.com"
};

const {id, ...others} = user;

console.log(id);
console.log(others);

//function rest
//1
const total = (...numbers) => {
    console.log(numbers) //[ 1, 2, 3 ]
}

total(1,2,3);

//2
const attendance = (captain, ...students) =>{
    console.log(captain)
    console.log(students);
}

attendance("Reyad" , "A", "B", "c")

//3
const add = (...nums) => {
    let sum = 0;

    for(num of nums){
        sum += num;
    }

    console.log(sum); //12
}
add(3,4,5);

