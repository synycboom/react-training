const fizz = [1, 2, 3, 100]
const max = Math.max(...fizz)
console.log(max)

const foo = [1, 2, 3]
const bar = {
    baz: 500
}

const foo1 = [...foo, ...'456']
const bar1 = { ...bar, boz: 600 }

console.log(foo1)
console.log(bar1)