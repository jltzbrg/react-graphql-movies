const Movie = require('../models/movie');

const resolvers = {
  movies: () => {
    // This will find all movies in mongoDB
    return Movie.find({});
  },
  movieByName: (args) => {
    return Movie.findOne({ name: args.name });
  },
  addMovie: (args) => {
    // Create an object for db
    let movie = new Movie({
      name: args.name,
      genre: args.genre,
      year: args.year,
    });
    // Save to db
    movie.save();
    return movie;
  },
};

module.exports = { resolvers };
