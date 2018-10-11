import React from 'react'

const element1 = <div tabIndex="0"></div>
const element2 = <img src={user.avatarUrl}></img>

// Since JSX is closer to JavaScript than to HTML, 
// React DOM uses camelCase property naming convention instead of HTML attribute names.
// For example, class becomes className in JSX, and tabindex becomes tabIndex.