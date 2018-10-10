const arr = [1, 2, 3]

const [first, second, third] = arr
console.log('first: ', first) // first:  1
console.log('second: ', second) // second:  2
console.log('third: ', third) // third:  3

// skip unwanted elements
const [, , last] = arr
console.log('last: ', last) // last:  3

// destructuring with rest
const [fizz, ...remaining] = arr
console.log('remaining:', remaining) // remaining: [ 2, 3 ]

// default
const [a1, a2, a3, a4=7] = arr
console.log('a4: ', a4) // 'a4: 7'

// nested
const [b1, [b2, b3]] = [1, [2, 3]]
console.log('b1: ', b1) // b1: 1
console.log('b2: ', b2) // b2: 2
console.log('b3: ', b3) // b3: 3