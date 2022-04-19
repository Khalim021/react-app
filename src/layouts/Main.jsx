import React from "react"
import Films from "../components/Films"
import Loader from "../components/Loader"
import Search from "../components/Search"

export default class Main extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=c1145a8c&s=iron')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }

  searchMovie = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=c1145a8c&s=${str}`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }


    render() {
      return(
        <div className="container main-content">
          <Search searchMovies = {this.searchMovie} />
          {this.state.movies.length ? (<Films movies={this.state.movies}  />) : <Loader />}
        </div>
      )
    }
}

