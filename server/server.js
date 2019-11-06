const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
  const db = client.db('islands_info');
  const islandsCollection = db.collection('islands');
  const questionsCollection = db.collection('questions');
  const islandsRouter = createRouter(islandsCollection);
  const questionsRouter = createRouter(questionsCollection);
  app.use('/api/islands', islandsRouter);
  app.use('/api/questions', questionsRouter);
})
.catch(console.err);

app.listen(3000, function(){
  console.log(`Listening on port ${this.address().port}`);
})
