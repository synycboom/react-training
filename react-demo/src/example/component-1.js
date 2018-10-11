// Conceptually, components are like JavaScript functions. 
// They accept arbitrary inputs (called “props”) and 
// return React elements describing what should appear on the screen.

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

// *** Always start component names with a capital letter. 