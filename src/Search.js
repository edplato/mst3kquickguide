import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
 constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(e) {
    this.setState({ search: e.target.value.substr(0, 10) });
  }

	render() {
    let movieArraySearch = this.props.movieArray.map(function(obj, index) {
      var episodeObject = {};
      episodeObject.movieTitle = obj[3];
      episodeObject.episodeID = obj[0];
      episodeObject.episodeNumber = index;
      return episodeObject;
    });

   let filteredMovies = movieArraySearch.filter(
      (episode) => {
        return episode.movieTitle.toLowerCase().includes(this.state.search.toLowerCase());
      }
    );

		return (
	      <div className="searchBox">
        <h4 className="fadedViewTitles">SEARCH MOVIE TITLE</h4>
        <input className="searchInput" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />

        {filteredMovies.map((episode) => {
          return (
            <div className="searchResults" key={episode.episodeID} onClick={this.props.handleSearchResultClick.bind(this, episode.episodeNumber)}>
            <Link to="/" className="searchLinks">{episode.movieTitle} - {episode.episodeID}</Link>
            </div>
            )
        })}
        </div>
		);
	}
} 

export default Search;