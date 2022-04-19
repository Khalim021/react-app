import React from "react";

export default class Search extends React.Component {
  state = {
    search: 'iron man',
    type: 'all'
  }
  
  handlSearch = (e) => {
    if(e.key === 'Enter') {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  }

  handleFilter = (e) => {
    this.setState(() => ({type: e.target.dataset.type}), () => {
      this.props.searchMovie(this.state.search, this.state.type)
    })
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input 
          id="search" 
          placeholder="Search" 
          type="search" 
          className="validate" 
          value={this.state.search}
          onChange={(e) => this.setState({search: e.target.value})}
          onKeyDown={this.handlSearch}
          />

          <button className="btn btn-style" onClick={() => this.props.searchMovie(this.state.search, this.state.type)}>
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
          onChange={this.handleFilter} 
          checked={this.state.type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input 
          className="with-gap" 
          name="type" 
          type="radio" 
          data-type="movie" 
          onChange={this.handleFilter}
          checked={this.state.type === 'movie'}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input 
          className="with-gap" 
          name="type" 
          type="radio" 
          data-type="series"
          onChange={this.handleFilter} 
          checked={this.state.type === 'series'}
          />
          <span>TV series only</span>
        </label>
        </div>
      </div>
    )
  }
}
