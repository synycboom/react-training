// an arrow function inherit 'this' from the context in which they're created
const fizz = {
    number: 100,
    print: () => {
        console.log(this.number)
    }
}

const func = fizz.print

fizz.print()
func()