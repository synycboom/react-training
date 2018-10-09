function fizz(x, ...args) {
    console.log('length: ', args.length)
    console.log(args)
}

fizz(1, 2, 'buzz', 'foo')