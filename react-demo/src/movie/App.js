import React, { Component } from 'react';
import './App.css'
import SearchPanel from './SearchPanel.js'
import Paginator from './Paginator.js'
import Content from './Content.js'
import movieData from './movie.json'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checkMovie: false,
            checkRating: false,
            movieValue: '',
            ratingValue: '',
            totalPages: 1,
            page: 1,
            pageSize: 3,
            items: [],
        }
        this.handleMovieCheckChange = this.handleCheckChange.bind(
            this,
            'checkMovie',
            'movieValue'
        )
        this.handleRatingCheckChange = this.handleCheckChange.bind(
            this,
            'checkRating',
            'ratingValue'
        )
        this.handleMovieValueChange = this.handleValueChange.bind(
            this,
            'movieValue',
        )
        this.handleRatingValueChange = this.handleValueChange.bind(
            this,
            'ratingValue',
        )
    }

    handleCheckChange(checkKey, valueKey, event) {
        const checked = event.target.checked
        this.setState(prevState => ({
            [checkKey]: checked,
            [valueKey]: checked ? prevState[valueKey] : ''
        }))
    }

    handleValueChange(valueKey, event) {
        this.setState({ [valueKey]: event.target.value })
    }

    handleSearch = () => {
        const {
            checkRating,
            checkMovie,
            ratingValue,
            movieValue,
            pageSize,
        } = this.state

        let items = movieData

        if (checkRating) {
            items = items.filter(item => item.imdbRating === parseFloat(ratingValue))
        }
        if (checkMovie) {
            items = items.filter(item => (new RegExp(`${movieValue}`, 'i')).test(item.title))
        }
        this.setState({
            items,
            page: 1,
            totalPages: Math.ceil(items.length / pageSize) || 1, 
        })
    }

    handlePageChange = (event) => {
        this.setState({ page: event.target.value })
    }

    render() {
        const {
            checkMovie,
            checkRating,
            movieValue,
            ratingValue,
            totalPages,
            items,
            page,
            pageSize,
        } = this.state

        const minPage = (page - 1) * pageSize
        const maxPage = minPage + pageSize
        const paginatedItems = items.slice(minPage, maxPage)

        return (
            <div className='App'>
                <SearchPanel
                    checkMovie={checkMovie}
                    checkRating={checkRating}
                    movieValue={movieValue}
                    ratingValue={ratingValue}
                    onMovieCheckChange={this.handleMovieCheckChange}
                    onMovieValueChange={this.handleMovieValueChange}
                    onRatingCheckChange={this.handleRatingCheckChange}
                    onRatingValueChange={this.handleRatingValueChange}
                    onSearch={this.handleSearch}
                />
                <Content
                    items={paginatedItems}
                />
                <Paginator
                    totalPages={totalPages}
                    page={page}
                    pageSize={pageSize}
                    onPageChange={this.handlePageChange}
                />
            </div>
        )
    }
}

export default App
