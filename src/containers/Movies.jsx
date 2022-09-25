import React, { Component } from 'react';
import Movie from '../components/Movie';
export default class Movies extends Component {
  state = {
    movies: [
      { name: 'Harry Potter 1', genre: 'Fantasy', year: 2001 },
      { name: 'Harry Potter 2', genre: 'Fantasy', year: 2001 },
      { name: 'Harry Potter 3', genre: 'Fantasy', year: 2001 },
      { name: 'Harry Potter 4', genre: 'Fantasy', year: 2001 },
      { name: 'Harry Potter 5', genre: 'Fantasy', year: 2001 },
      { name: 'Harry Potter 5', genre: 'Fantasy', year: 2001 },
    ],
  };
  render() {
    return (
      <div className="movies">
        {this.state.movies.map((movie) => (
          <Movie
            key={movie.name}
            name={movie.name}
            genre={movie.genre}
            year={movie.year}
          />
        ))}
      </div>
    );
  }
}
