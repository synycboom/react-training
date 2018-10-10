function fizz( [a1, a2], { foo: { bar:b1 } }) {
    console.log('a1', a1) // a1: 1
    console.log('a2', a2) // a2: 2 
    console.log('b1', b1) // b1: 3
}

const param1 = [1, 2]
const param2 = {
    foo: {
        bar: 3
    }
}

fizz(param1, param2)