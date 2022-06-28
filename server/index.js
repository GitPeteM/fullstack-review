const express = require('express');
let app = express();
const getReposByUsername = require('../helpers/github.js');
const bodyParser = require('body-parser');
let {save} = require('../database/index.js');
let {getTop25ByUsername} = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  // console.log(req.body);
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  getReposByUsername(req.body.term, (err, repos) => {
    // console.log('inside post:', repos);
    // iterate over the response data
    repos.forEach((repo) => {
      // send each repo to save.
      save(repo, (err, res) => {
        if(err) {
          res.status(404).send(err);
        }
        res.sendStatus(201);
      });
    })
    if(err) {
      res.status(404).send(err);
    }
    res.sendStatus(201);

  })

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  getTop25ByUsername((err, repos) => {
    // console.log(req.body.term);
    if(err) {
      res.status(404).send(err);
    }
    console.log(repos);
    res.status(200).send(repos);
  })

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
