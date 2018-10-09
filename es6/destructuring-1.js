const obj = {
    name: 'foo',
    age: 24,
}

const { name, age } = obj
console.log('name: ', name) // name: foo
console.log('age: ', age) // age: 24

// rename
const { name: n1, age: a1 } = obj
console.log('n1: ', n1) // n1: foo
console.log('a1: ', a1) // a1: 24

// default
const { missing = 10 } = obj
console.log('missing: ', missing) // missing: 10

// default with rename
const { missing: m1 = 10 } = obj
console.log('m1: ', m1) // m1: 10

// nested
const obj2 = {
    name: 'foo',
    baz: {
        x: 5
    }
}
const { baz: { x } } = obj2
console.log('x: ', x) // x: 5