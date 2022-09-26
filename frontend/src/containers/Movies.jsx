import React, { Component } from 'react';
import Movie from '../components/Movie';
import { useQuery, gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

const allMovies = gql`
  {
    movies {
      name
      genre
      year
    }
  }
`;

class Movies extends Component {
  state = {
    movies: [
      {
        name: 'Harry Potter 1',
        genre: 'Fantasy',
        year: 2001,
        image: 'https://via.placeholder.com/200x200',
      },
      {
        name: 'Harry Potter 2',
        genre: 'Fantasy',
        year: 2001,
        image: 'https://via.placeholder.com/200x200',
      },
      {
        name: 'Harry Potter 3',
        genre: 'Fantasy',
        year: 2001,
        image: 'https://via.placeholder.com/200x200',
      },
      {
        name: 'Harry Potter 4',
        genre: 'Fantasy',
        year: 2001,
        image: 'https://via.placeholder.com/200x200',
      },
      {
        name: 'Harry Potter 5',
        genre: 'Fantasy',
        year: 2001,
        image: 'https://via.placeholder.com/200x200',
      },
      {
        name: 'Harry Potter 5',
        genre: 'Fantasy',
        year: 2001,
        image: 'https://via.placeholder.com/200x200',
      },
    ],
  };
  render() {
    console.log(this.props);
    return (
      <div className="movies">
        {this.state.movies.map((movie) => (
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

export default graphql(allMovies)(Movies);
