const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!

  id: Number,
  user_name: String, /* owner.login */
  stargazers_count: Number,
  // pull html url.
  url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // take all repos here
  // for each over the repos
    // create a new repo model
    // .save()

  // save function will be called with current repo as input
  // we will create a new Repo model.
  let newRepo = new Repo('define the object, like in the schema')
  // save that repo model into the db with .save()
    // .save() is a mongoDB function, that will save the function inside the db.

}

module.exports.save = save;
