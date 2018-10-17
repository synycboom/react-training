import React from 'react'

export default function Paginator(props) {
    const {
        page,
        pageSize,
        totalPages,
        onPageChange,
    } = props

    const pages = Array.from(
        Array(totalPages).keys(), n => n + 1
    )
    const options = pages.map(n =>
        <option key={n} value={n}>{n}</option>
    )

    return (
        <div className='Paginator'>
            <label className='Paginator__label'>Page Size: {pageSize}</label>
            <label className='Paginator__label'>Page</label>
            <select
                onChange={onPageChange}
                value={page}
            >
                {options}
            </select>
        </div>
    )
}