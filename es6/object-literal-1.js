const fizz = 10, buzz = 20;
const foo = {
    fizz,
    buzz,
    newFunctionSyntax() {
        console.log('hi')
    }
}
console.log(foo)
foo.newFunctionSyntax()