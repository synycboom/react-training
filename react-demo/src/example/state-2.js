// Adding Lifecycle Methods to a Class
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component {
    constructor(props) {
        super(props) // how we pass props to the base constructor
        this.state = {date: new Date()} // Add a class constructor that assigns the initial this.state
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
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