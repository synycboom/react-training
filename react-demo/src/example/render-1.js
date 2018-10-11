import React from 'react'
import ReactDOM from 'react-dom'

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    )
    ReactDOM.render(element, document.getElementById('root'))
}
  
setInterval(tick, 1000)

// In practice, most React apps only call ReactDOM.render() once
// React Only Updates What’s Necessary, only a text node not h2