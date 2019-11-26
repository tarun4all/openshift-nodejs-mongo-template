const express = require('express');
const app = express();

require('dotenv').config();

const User = require('./mongoConfig');

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/fetchData', async (req, res) => {
  await User.find({}, (err, doc) => {
    if(err) {console.log(err); res.send(err);}
    if(doc) res.json(doc);
  });
});

//server port listen
app.listen(process.env.PORT);