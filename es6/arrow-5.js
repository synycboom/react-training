// an arrow function inherit 'this' from the context in which they're created
function ClassFizz() {
    // (implicitly) this = {}
    this.x = 8
    this.func1 = function() {
        console.log(this.x)
    }
    this.func2 = () => {
        console.log(this.x)
    }
    // (implicitly) return this
}

const buzz = new ClassFizz()
buzz.func1()
buzz.func2()

const buzz1 = buzz.func1
const buzz2 = buzz.func2
buzz1()
buzz2()