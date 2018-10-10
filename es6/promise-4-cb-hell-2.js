function fizz(number) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const error = Math.random() >= 0.8
            if (error) {
                reject(number)
            } else {
                resolve()
            }
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
    .catch(function(error) {
        console.log('error', error)
    })