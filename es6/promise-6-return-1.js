// return another promise (resolve)
// return a synchronous value (or undefined)
Promise.resolve()
    .then(() => {
        return 5
    })
    .then(value => {
        console.log(value)
    })

Promise.resolve()
    .then(() => {
        return Promise.resolve(5)
    })
    .then(value => {
        console.log(value)
    })

Promise.resolve()
    .then(() => {
        return new Promise((res, rej) => {
            res(5)
        })
    })
    .then(value => {
        console.log(value)
    })