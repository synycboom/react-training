// async/await in object
const fizz = {
    async foo() {
        // BAD - without try/catch block
        await Promise.resolve()
    },
    bar: async () => {

    },
    baz: async function() {

    }
}

// async/await in class
class Foo {
    async bar() {

    }

    // the declaration below only works with babel
    baz = () => {

    }
}