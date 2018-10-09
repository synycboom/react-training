function fizz(number, callback) {
    setTimeout(function() {
        console.log(`setTimeout in fizz ${number}`)
        callback()
    }, 500)
}

fizz(1, function() {
    console.log('fizz 1 is completed')
    fizz(2, function() {
        console.log('fizz 2 is completed')
        fizz(3, function() {
            console.log('fizz 3 is completed')
            fizz(4, function() {
                console.log('fizz 4 is completed')
            })
        })
    })
})