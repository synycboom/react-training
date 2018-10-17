import React from 'react'
import Item from './Item.js'

export default function Content(props) {
    const {
        items
    } = props

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