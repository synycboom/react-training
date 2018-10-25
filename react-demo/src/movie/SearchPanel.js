import React from 'react'
import PropTypes from 'prop-types'
import {
    Form,
    Segment,
} from 'semantic-ui-react'

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
        <Segment>
            <Form>
                <Form.Group inline>
                    <Form.Checkbox 
                        width={3}
                        label='Movie Name'
                        checked={checkMovie}
                        onChange={onMovieCheckChange}
                    />
                    <Form.Input 
                        width={7}
                        value={movieValue}
                        disabled={!checkMovie}
                        onChange={onMovieValueChange}
                    />
                </Form.Group>
                <Form.Group inline>
                    <Form.Checkbox 
                        width={3}
                        label='IMDB Rating'
                        checked={checkRating}
                        onChange={onRatingCheckChange}
                    />
                    <Form.Input 
                        width={7}
                        value={ratingValue}
                        disabled={!checkRating}
                        onChange={onRatingValueChange}
                    />
                    <Form.Field
                        width={2}
                    />
                    <Form.Button
                        width={4}
                        color='blue'
                        fluid
                        onClick={onSearch}
                    >
                        Search
                    </Form.Button>
                </Form.Group>
            </Form>
        </Segment>
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