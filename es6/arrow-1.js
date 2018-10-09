function sum(x, y) {
    return x + y
}

const arrowSum = (x, y) => {
    return x + y
}

// arrow style without return statement 
const arrowSum2 = (x, y) => x + y

const fizz = x => console.log(x)

console.log(sum(1, 1))
console.log(arrowSum(2, 2))
console.log(arrowSum2(3, 3))
fizz(555)