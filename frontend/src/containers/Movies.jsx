import React, { Component } from 'react';
import Movie from '../components/Movie';
import { useQuery, gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

const ALL_MOVIES = gql`
  {
    movies {
      name
      genre
      year
    }
  }
`;

class Movies extends Component {
  render() {
    console.log(this.props);
    let data = this.props.data;
    if (data.loading) {
      return <h2> Loading your movies...</h2>;
    }
    if (data.movies.length === 0) {
      return <h2>Please add movies of your choice</h2>;
    }
    return (
      <div className="movies">
        {data.movies.map((movie) => (
          <Movie
            key={movie.name}
            name={movie.name}
            genre={movie.genre}
            year={movie.year}
            image={movie.image}
          />
        ))}
      </div>
    );
  }
}

export default graphql(ALL_MOVIES)(Movies);
