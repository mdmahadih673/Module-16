let person = {
    name: "Mahadi"
}
let { name, age = 20 } = person;
console.log(age);

let usr = {
    profile: {
        city: "Dhaka",
        country: "Bangladesh"
    }
}

let {
    profile: { city }
} = usr;

console.log(city);


let colors = ["Red", "Green", "Blue", "Black", "White"];

let [first, second, ...others] = colors;    
console.log(first);
console.log(second);
console.log(others);
