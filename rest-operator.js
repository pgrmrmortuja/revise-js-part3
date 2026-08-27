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

