import name, { add } from './utils.js'
import fizzButton from './good-dep1'
import buzzButton1 from './good-dep2'
import buzzButton2 from './good-dep3'

console.log(name)
console.log(add(1, 2))

const fizz = document.getElementById('fizz')
const buzz = document.getElementById('buzz')
fizz.appendChild(fizzButton())
buzz.appendChild(buzzButton1())