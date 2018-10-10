class Project {
    static getSomething1() {
        return 555
    }
}

Project.getSomething2 = () => 666

const p = new Project()
console.log(Project.getSomething1())
console.log(Project.getSomething2())