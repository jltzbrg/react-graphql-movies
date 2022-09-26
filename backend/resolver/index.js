//const Movie = require('../models/movie');

const movies = [
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
];

const resolvers = {
  movies: () => {
    return movies;
  },
};

module.exports = { resolvers };
