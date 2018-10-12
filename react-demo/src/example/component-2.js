import React from 'react'
import ReactDOM from 'react-dom'

// elements can also represent user-defined components
// props are read-only

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>
//     }
// }

const element = <Welcome name="Sara" />

ReactDOM.render(
    element,
    document.getElementById('root')
)

// https://babeljs.io/repl