function fizz(x) {
    console.log(x)
}

fizz()

function foo(x) {
    if (typeof x === 'undefined') {
        x = 7
    }
    console.log(x)
}

foo()
foo(10)