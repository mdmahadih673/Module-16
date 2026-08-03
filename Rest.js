function show(...nums) {
    console.log(nums);

}
show(10, 15, 20)

function test(a, ...b) {
    console.log(a);
    console.log(b);
}
test(1, 2, 3, 4, 5)

function total(...numbers) {
    let sum = 0;

    for (num of numbers) {
        sum += num
    }
    return sum
}

console.log(total(10, 20, 30));
