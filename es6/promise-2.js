function fizz(number) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(`setTimeout in fizz ${number}`)
            resolve()
        }, 500)
    })
}

fizz(1)
    .then(function() {
        console.log('fizz 1 is completed')
        return fizz(2)
    })
    .then(function() {
        console.log('fizz 2 is completed')
        return fizz(3)
    })
    .then(function() {
        console.log('fizz 3 is completed')
        return fizz(4)
    })
    .then(function() {
        console.log('fizz 4 is completed')
    })