require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const { movieSchema } = require('./schema/index');
const { resolvers } = require('./resolver/index');
const cors = require('cors');
// Create Mongo Connection
mongoose.connect(
  `${process.env.MONGO_URI}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log(
        `Unable to connect to database! --> ${error.message}`
      );
    } else {
      console.log('Database successful connected.');
    }
  }
);

app.use(cors());
// Setting Up GraphQL
app.use(
  '/graphql',
  graphqlHTTP({
    schema: movieSchema,
    graphiql: true,
    rootValue: resolvers,
  })
);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
  console.log(
    `App listening on port ${port}! & GraphQL -> http://localhost:${port}/graphql`
  )
);
