function fizz(number, callback) {
    setTimeout(function() {
        const error = Math.random() >= 0.8
        if (error) {
            callback(number)
        } else {
            callback()
        }
    }, 500)
}

fizz(1, function(error) {
    if (error) {
        console.log('error ', error)
    } else {
        console.log('fizz 1 is completed')
        fizz(2, function(error) {
            if (error) {
                console.log('error ', error)
            } else {
                console.log('fizz 2 is completed')
                fizz(3, function(error) {
                    if (error) {
                        console.log('error ', error)
                    } else {
                        console.log('fizz 3 is completed')
                        fizz(4, function(error) {
                            if (error) {
                                console.log('error ', error)
                            } else {
                                console.log('fizz 4 is completed')
                            }
                        })
                    }
                })
            }
        })
    }
})