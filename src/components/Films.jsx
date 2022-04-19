import Film from "./Film"

export default function Films(props) {
  const {movies = []} = props

  return(
    <div className="films">
       {movies.length ? movies.map(movie => (
          <Film key={movie.imdbID} {...movie} />
        )) : <h3>Nothing found</h3>}     
    </div>
  )
}


















