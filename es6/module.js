// utils.js
export function add(x, y) {
    return x + y
}

export const minus = (x, y) => {
    return x - y
}

export default 'Utils'

// index.js
import name, { add } from './utils.js'
console.log(name) // Utils
console.log(add(1, 2)) // 3