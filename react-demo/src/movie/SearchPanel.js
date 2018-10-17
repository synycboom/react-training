import React from 'react'
import FilterInput from './FilterInput'

export default function SearchPanel(props) {
    const {
        checkMovie,
        checkRating,
        movieValue,
        ratingValue,
        onMovieCheckChange,
        onMovieValueChange,
        onRatingCheckChange,
        onRatingValueChange,
        onSearch,
    } = props

    return (
        <div className='SearchPanel'>
            <div className='SearchPanel__input-container'>
                <FilterInput
                    label='Movie Name'
                    value={movieValue}
                    checked={checkMovie}
                    onCheckChange={onMovieCheckChange}
                    onValueChange={onMovieValueChange}
                />
                <FilterInput
                    label='IMDB Rating'
                    value={ratingValue}
                    checked={checkRating}
                    onCheckChange={onRatingCheckChange}
                    onValueChange={onRatingValueChange}
                />
            </div>

            <button
                className='SearchPanel__button'
                onClick={onSearch}
            >
                Search
            </button>
        </div>
    )
}