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

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // take all repos here
  // for each over the repos
    // create a new repo model
    // .save()

  console.log('inside save');
  return Promise.all(repos.map( repo => {
      let newRepo = {
        id: repo.id,
        user_name: repo.owner.login,
        stargazers_count: repo.stargazers_count,
        url: repo.html_url
      }
      // return new Repo(newRepo).save();
      // return Repo.updateOne({}, newRepo, {upsert: true});
      return Repo.findOneAndUpdate({id: repo.id}, newRepo, {upsert: true});
    })

  )


  // save that repo model into the db with .save()
    // .save() is a mongoDB function, that will save the function inside the db.
    // newRepo.save();
    // console.log('newRepo', newRepo);
    // Dont use newRepo.save() as it will save duplicates. Instead use updateOne.

}

// Only need one response back.
// Promise.all() > so that I can reutrn only one response.
//



let getTop25ByStarCount = (callback) => {
  // use model.find() Search for all repos from username
 // chain - use .sort() to determine top 25 from stargazers_count
   // return with a callback

 Repo.find({ }, (err, result) => {
  if(err) {
    callback(err);
  }
  callback(null, result);
 }).sort({stargazers_count: 'desc'}).limit(25)
  // Repo.find({}, (err, result)=> {
  //   console.log(result);
  //   callback(null, result)
  // })
}

// How could I implement Promsies Here ^


module.exports.save = save;
module.exports.getTop25ByStarCount = getTop25ByStarCount;

