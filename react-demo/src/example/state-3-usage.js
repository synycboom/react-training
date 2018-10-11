// Wrong
this.state.comment = 'Hello'

// Correct
this.setState({comment: 'Hello'})

// State Updates May Be Asynchronous
// React may batch multiple setState() calls into a single update for performance.
// Because this.props and this.state may be updated asynchronously, 
// you should not rely on their values for calculating the next state.

// Wrong
this.setState({
    counter: this.state.counter + this.props.increment,
})

// Correct
this.setState((state, props) => ({
    counter: state.counter + props.increment
}))

// Correct
this.setState(function(state, props) {
    return {
      counter: state.counter + props.increment
    }
})