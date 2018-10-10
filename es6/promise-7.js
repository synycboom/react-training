// return another promise (reject)
// throw a synchronous error

Promise.resolve()
    .then(() => {
        return Promise.reject('error')
    })
    .catch(value => {
        console.log(value)
    })

Promise.resolve()
    .then(() => {
        return new Promise((res, rej) => {
            rej(5)
        })
    })
    .catch(value => {
        console.log(value)
    })

Promise.resolve()
    .then(() => {
        throw 5
    })
    .catch(value => {
        console.log(value)
    })