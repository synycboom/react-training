const arr1 = [1, 3]
const arr2 = [4]
// copy an array
const arr3 = [...arr1]
// concatenate arrays
const arr4 = [...arr1, ...arr2, 5]
console.log(arr3)
console.log(arr4)

const fizz = {
    buzz: {
        x: 5
    }
}
const fizz2 = fizz
fizz.buzz.x = 7

console.log(fizz)
console.log(fizz2)
// create a new object from another object
// and update some properties without mutating the original one
const foo = {
    bar: {
        x: 5
    }
}
const foo2 = {
    ...foo,
    bar: {
        ...foo.bar,
        x: 7
    }
}
console.log(foo)
console.log(foo2)