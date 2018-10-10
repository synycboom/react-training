const fizz = {
    number: 100,
    print: function(x) {
        console.log(this.number + x)
    }
}

const func = fizz.print

func.call(fizz, 5)
func.apply(fizz, [5])

const boundFunc1 = fizz.print.bind(fizz)
const boundFunc2 = fizz.print.bind(fizz, 10)

boundFunc1(10)
boundFunc2()
