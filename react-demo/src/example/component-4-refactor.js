import React from 'react'
import ReactDOM from 'react-dom'

function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    )
}
  
function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    )
}
  
setInterval(tick, 1000)

// the Clock component should be able to update by itself
// actually we want this

// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// )