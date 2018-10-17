import React from 'react'

export default function Item(props) {
    const {
        title,
        rating,
    } = props

    return (
        <div className='Item'>
            <div>{title}</div>
            <div>{rating}</div>
        </div>
    )
}