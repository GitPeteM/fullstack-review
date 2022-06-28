const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!

  id: {type: Number, unique: true},
  user_name: String, /* owner.login */
  stargazers_count: Number,
  // pull html url.
  url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo, cb) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // take all repos here
  // for each over the repos
    // create a new repo model
    // .save()

  // save function will be called with current repo as input
  // we will create a new Repo model.
  // console.log(repo)
  let newRepo = {
    id: repo.id,
    user_name: repo.owner.login,
    stargazers_count: repo.stargazers_count,
    url: repo.html_url
    }
  // save that repo model into the db with .save()
    // .save() is a mongoDB function, that will save the function inside the db.
    // newRepo.save();

    // Dont use newRepo.save() as it will save duplicates. Instead use updateOne.
    Repo.updateOne({}, newRepo, {upsert: true}, (err, results) => {
      if(err) {
        // console.log('error')
      }
      // console.log('success')
    })
}

let getTop25ByUsername = (callback) => {
  // use model.find() Search for all repos from username
 // chain - use .sort() to determine top 25 from stargazers_count
   // return with a callback

 Repo.find({ }, (err, result) => {
  if(err) {
    callback(err);
  }
  callback(null, result);
 }).sort({stargazers_count: 'desc'}).limit(25)

}

module.exports.save = save;
module.exports.getTop25ByUsername = getTop25ByUsername;
