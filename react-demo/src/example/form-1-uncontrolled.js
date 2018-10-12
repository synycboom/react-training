import React from 'react'
import ReactDOM from 'react-dom'

class NameForm extends React.Component {
    render() {
        return (
            <form>
                <label>
                    Name:
                <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
)