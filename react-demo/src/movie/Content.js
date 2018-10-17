import React from 'react'
import Item from './Item.js'
import PropTypes from 'prop-types'

const Content = ({ items }) => {
    const itemElements = items.map(item => 
        <Item
            key={item.id}
            title={item.title}
            rating={item.imdbRating}
        />
    )
    return (
        <div className='Content'>
            {itemElements}
        </div>
    )
}

Content.propTypes = {
    items: PropTypes.array
}

export default Content