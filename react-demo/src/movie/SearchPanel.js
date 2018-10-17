import React from 'react'
import PropTypes from 'prop-types'
import FilterInput from './FilterInput'

function SearchPanel(props) {
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

SearchPanel.propTypes = {
    checkMovie: PropTypes.bool,
    checkRating: PropTypes.bool,
    movieValue: PropTypes.string,
    ratingValue: PropTypes.string,
    onMovieCheckChange: PropTypes.func,
    onMovieValueChange: PropTypes.func,
    onRatingCheckChange: PropTypes.func,
    onRatingValueChange: PropTypes.func,
    onSearch: PropTypes.func,
}

export default SearchPanel