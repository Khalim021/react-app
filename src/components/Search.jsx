import React, {useState} from "react";

export default function Search({searchMovie}) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  
  const handlSearch = (e) => {
    if(e.key === 'Enter') {
      searchMovie(search, type);
    }
  }

  const handleFilter = (e) => {
    setType(type.target.dataset.type)
    searchMovie(search, e.target.dataset.type)
  }

    return (
      <div className="row">
        <div className="input-field col s12">
          <input 
          id="search" 
          placeholder="Search" 
          type="search" 
          className="validate" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handlSearch}
          />

          <button 
          className="btn btn-style" 
          onClick={() => searchMovie(search, type)}>
            Search Movie
          </button>

        </div>
        <div>
        <label>
          <input 
          className="with-gap" 
          name="type" 
          type="radio" 
          data-type="all" 
          onChange={handleFilter} 
          checked={type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input 
          className="with-gap" 
          name="type" 
          type="radio" 
          data-type="movie" 
          onChange={handleFilter}
          checked={type === 'movie'}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input 
          className="with-gap" 
          name="type" 
          type="radio" 
          data-type="series"
          onChange={handleFilter} 
          checked={type === 'series'}
          />
          <span>TV series only</span>
        </label>
        </div>
      </div>
    )
}
