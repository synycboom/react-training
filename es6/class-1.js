class Person {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }

    printGender() {
        console.log(this.gender)
    }
}

class Male extends Person {
    constructor(name) {
        super(name, 'male')
    }

    printName() {
        console.log(this.name)
    }

    printNameAndGender() {
        this.printName()
        super.printGender()
    }
}

const m = new Male('somsak')
m.printName()
m.printGender()
m.printNameAndGender()