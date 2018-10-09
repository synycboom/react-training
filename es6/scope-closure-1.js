let updateFunctions = []
for (var i = 0; i < 2; i++) {
    updateFunctions.push(function() {
        console.log(i)
    })
}
updateFunctions[0]()