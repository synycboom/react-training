const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map((number) => number * 2)
console.log(doubled) // [2, 4, 6, 8, 10]


// You can build collections of elements and include them in JSX using curly braces {}.

const listItems = numbers.map((number) =>
  <li>{number}</li>
)

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
)