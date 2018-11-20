const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

var PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Ears open on ${PORT}'));
