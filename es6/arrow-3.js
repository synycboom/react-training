const fizz = {
    number: 100,
    print: function(x) {
        console.log(this.number + x)
    }
}

const func = fizz.print

func.call(fizz, 5)
func.apply(fizz, [5])

const bindedFunc1 = fizz.print.bind(fizz)
const bindedFunc2 = fizz.print.bind(fizz, 10)

bindedFunc1(10)
bindedFunc2()
