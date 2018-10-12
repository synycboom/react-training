import React from 'react'
import ReactDOM from 'react-dom'

// Adding Local State to a Class

class Clock extends React.Component {
    constructor(props) {
        super(props) // how we pass props to the base constructor
        this.state = {date: new Date()} // Add a class constructor that assigns the initial this.state
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
)