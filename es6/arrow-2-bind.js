const fizz = {
    number: 100,
    print: function() {
        console.log(this.number)
    }
}

const func = fizz.print

fizz.print()
func()