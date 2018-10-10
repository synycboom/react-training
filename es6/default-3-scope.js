const baseTax = 0.07
const getBaseTax = () => 0.07

function getTotal(price, tax = price * baseTax) {
    return price + tax
}

console.log(getTotal(5))
console.log(getTotal(5, 1))

function getTotal2(price, tax = price * getBaseTax()) {
    return price + tax
}

console.log(getTotal2(5))
console.log(getTotal2(5, 1))

// BAD
function getTotal3(price = tax, tax = 1) {
    return price + tax
}

console.log(getTotal3(2))
console.log(getTotal3()) // ReferenceError: tax is not defined