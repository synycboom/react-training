import React from 'react'
import PropTypes from 'prop-types'

function Item({ title, rating }) {
    return (
        <div className='Item'>
            <div>{title}</div>
            <div>{rating}</div>
        </div>
    )
}

Item.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string
    ]),
}

export default Item