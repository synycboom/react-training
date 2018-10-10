function foo(x) {
    var y = 5
    return function (z) {
        return x + y + z
    }
}

var bar = foo(1)
console.log(bar(10))