require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');

// Create Mongo Connection
mongoose.connect(
  `${process.env.MONGO_URI}`,
  {
    useNewUrlParser: true,
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

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
