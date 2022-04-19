import React from "react"
import Films from "../components/Films"
import Loader from "../components/Loader"
import Search from "../components/Search"

export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=c1145a8c&s=iron')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false}))
  }

  searchMovie = (str, type = 'all') => {
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?apikey=c1145a8c&s=${str}${type !== 'all' ? `&type=${type}` : '' }`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false}))
  }


    render() {
      return(
        <div className="container main-content">
          <Search searchMovie  = {this.searchMovie} />
          {this.state.loading ? <Loader /> : (<Films movies={this.state.movies}  />) }
        </div>
      )
    }
}

