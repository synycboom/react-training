import React, { Component } from 'react';
import ReactTable from 'react-table'
import SearchPanel from './SearchPanel.js'
import axios from 'axios'
import './App.css'
import 'react-table/react-table.css'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checkMovie: false,
            checkRating: false,
            movieValue: '',
            ratingValue: '',
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

    handleCheckChange(checkKey, valueKey, event, data) {
        const checked = data.checked
        this.setState(prevState => ({
            [checkKey]: checked,
            [valueKey]: checked ? prevState[valueKey] : ''
        }))
    }

    handleValueChange(valueKey, event, data) {
        this.setState({ [valueKey]: data.value })
    }

    handleSearch = async () => {
        const {
            checkRating,
            checkMovie,
            ratingValue,
            movieValue,
        } = this.state

        const params = {}
        const url = 'http://localhost:8000/apis/movies/'

        if (checkMovie) {
            params['title__icontains'] = movieValue
        }
        if (checkRating) {
            params['imdb_rating'] = ratingValue
        }

        const response = await axios.get(url, { params: params })

        this.setState({
            items: response.data
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
            items,
        } = this.state

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
                <ReactTable
                    defaultPageSize={5}
                    pageSizeOptions={[5, 10]}
                    data={items}
                    columns={[
                        {
                            Header: 'Title',
                            accessor: 'title',
                            Cell: row => <div style={{ textAlign: 'center' }}>{row.value}</div>
                        },
                        {
                            Header: 'IMDB Rating',
                            accessor: 'imdb_rating',
                            Cell: row => <div style={{ textAlign: 'center' }}>{row.value}</div>
                        }
                    ]}
                />
            </div>
        )
    }
}

export default App
