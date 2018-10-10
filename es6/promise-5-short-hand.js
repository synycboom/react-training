// new Promise((res, rej)) vs Promise.resolve() vs Promise.reject()

function fizz() {
    return new Promise((res, rej) => {
        res()
    })
}

function buzz() {
    return new Promise((res, rej) => {
        rej()
    })
}

function foo() {
    return Promise.resolve()
}

function bar() {
    return Promise.reject()
}

fizz().then(() => console.log('fizz then')).catch(() => console.log('fizz catch'))
buzz().then(() => console.log('buzz then')).catch(() => console.log('buzz catch'))
foo().then(() => console.log('foo then')).catch(() => console.log('foo catch'))
bar().then(() => console.log('bar then')).catch(() => console.log('bar catch'))