import React from 'react'
import ReactDOM from 'react-dom'

const name = 'Josh Perez'
const element = <h1>Hello, {name}</h1>

ReactDOM.render(
  element,
  document.getElementById('root')
)

// You can put any valid JavaScript expression inside the curly braces in JSX. 
// For example, 2 + 2, user.firstName, formatName(user) are all valid JavaScript expressions.