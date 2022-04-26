import React, {useState, useEffect} from "react"
import Films from "../components/Films"
import Loader from "../components/Loader"
import Search from "../components/Search"

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovie = (str, type = 'all') => {
    setLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=c1145a8c&s=${str}${type !== 'all' ? `&type=${type}` : '' }`)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setMovies(data.Search);
      })
  }

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=c1145a8c&s=iron')
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search);
        setLoading(false);
      })
  }, [])

      return(
        <div className="container main-content">
          <Search searchMovie  = {searchMovie} />
          {loading ? <Loader /> : (<Films movies={movies}  />) }
        </div>
      )
}

