const axios = require('axios');
const config = require('../config.js');

let getVids = (term, callback) => {

  let options = {
    method: 'GET',
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&&order=viewCount&q=${term} tutorial&type=video&key=${config.KEY}`,
    params: {},
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return axios(options);

}l

module.exports.getVids = getVids;


