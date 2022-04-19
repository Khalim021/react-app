export default function Film(props) {
  const {Title, Year, imdbID, Type, Poster} = props

  return(
    <div key={imdbID} className="card">
    <div className="card-image waves-effect waves-block waves-light">
    <img className="activator" src={Poster} alt="film images"/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{Title}<i className="material-icons right">More</i></span>
      <p>{Year} <span className="right">{Type}</span></p>
    </div>
  </div>
  )


}


















