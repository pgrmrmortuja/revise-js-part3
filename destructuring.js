//object
const user = {
    name: "Reyad",
    age: 24
};

const {name , age} = user;

console.log(name, age);

//array
const arr = ["Reyad", 24];

const [, ag] = arr;
const [nam,] = arr;

const [namee,agee] = arr;

console.log(ag);
console.log(nam);
console.log(namee,agee);

//nested destructuring
const data = {
    group: {
        id: 1,
        sub: {science: 100, business: 90}
    }
}

const {group:{id , sub:{science,business}}} = data; //destructuring id and science;
const {group} = data; //destructuring group
const {group: {sub}} = data; // destructuring sub

console.log(group)
console.log(id)
console.log(sub)
console.log(science)

