const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const path = require('path');
const DB = require('../Database/index.js');
const API = require('../API/Youtube.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/vids', function (req, res) {

  let topic = (req.body.topic);
  console.log(topic);

  API.getVids(topic)
  .then((result) => {
    let searchResults = result.data.items
    DB.save(topic, searchResults);
    res.send(searchResults);
  })
  .catch((err) => {
    console.log('Error finding videos');
  })

});

app.get('/vids', function (req, res) {
  var randTopic = '';
  DB.Topics.find({})
  .then((results) => {
    if (results.length === 0) {
      randTopic = 'Something';

    } else  if (req.query.term !== undefined) {
      randTopic = req.query.term;

    } else {
      var x = Math.floor(Math.random() * (results.length - 1));
      randTopic = results[x].topic;
    }
    console.log(randTopic)
  })
  .then(() => {
    DB.Vids.find( { topic: randTopic}).limit(10)
    .then((data) => {

      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('oops try again');
      res.status(404).send(err);
    })
})


});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});