const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose= require('mongoose');
const cors = require('cors');

const app = express();

//allow cors
app.use(cors());


mongoose.connect("mongodb+srv://simmi:simmi23@cluster0.kzs1w.mongodb.net/test");
mongoose.connection.once('open', () => {
    useUnifiedTopology: true 
    console.log("connected to database");
})

app.use(
    '/graphql',
    graphqlHTTP({
       schema,
      graphiql: true,
    }),
  );
app.listen(4000, () => {
     console.log("now listening on port 4000")
})