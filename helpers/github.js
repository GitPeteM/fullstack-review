const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (userName, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${userName}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios(options)
    .then(response => {
      // console.log(response.data);
      callback(null, response.data);
    })
    .catch(err => {
      callback(err);
    })
//   // Send a GET request (default method)
// axios('/user/12345');


}

// module.exports.getReposByUsername = getReposByUsername;
module.exports = getReposByUsername;

// // GET request for remote image in node.js
// axios({
//   method: 'get',
//   url: 'http://bit.ly/2mTM3nY',
//   responseType: 'stream'
// })
//   .then(function (response) {
//     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//   });