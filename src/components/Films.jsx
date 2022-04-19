import Film from "./Film"

export default function Films(props) {
    const {movies} = props

    return(
        <div className="films">
            {movies.map(movie => (
                <Film key={movie.imdbID} {...movie} />
            ))}
        </div>
    )
}


















