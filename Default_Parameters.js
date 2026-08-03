// function greet(name) {
//     return "Hello " + name;
// }

// console.log(greet());

function welcame(name = "guest") {
    return "welcame " + name;
}

console.log(welcame("Mahadi"));
console.log(welcame());

function multiply(a = 2, b = 5) {
    return a * b;
}

console.log(multiply(1211, 6541634));
console.log(multiply(3));

function oder(food = "Burger", quantity = 2){
    return quantity + " " + food
}

console.log(oder("pizza"));
