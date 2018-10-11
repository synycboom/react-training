// ** React events are named using camelCase, rather than lowercase. **

// normal
<button onclick="activateLasers()">
  Activate Lasers
</button>

// React
<button onClick={activateLasers}>
  Activate Lasers
</button>

// you cannot return false to prevent default behavior in React. 
// You must call preventDefault explicitly

<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>

function ActionLink() {
    function handleClick(e) {
        e.preventDefault()
        console.log('The link was clicked.')
    }
  
    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    )
}