const fizz = 'fizz'
const foo = {
    [fizz]: 20,
    ['buzz']: 30,
    ['newFunctionSyntax']() {
        console.log('hi')
    }
}
console.log(foo)
foo.newFunctionSyntax()