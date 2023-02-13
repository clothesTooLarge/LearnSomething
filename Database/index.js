const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/videos');

let topicSchema = mongoose.Schema({
  topic: String
})

let vidSchema = mongoose.Schema({
    _id: String,
    title: String,
    link: String,
    description: String,
    topic: String,
    thumbnail: Object,
})


let Vids = mongoose.model('Vids', vidSchema);
let Topics = mongoose.model('Topics', topicSchema);

let save = (topic, res) => {
  res.forEach((video) => {
    var vid = new Vids({
      _id: video.id.videoId,
      title: video.snippet.title,
      link: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      thumbnail: video.snippet.thumbnails.medium,
      description: video.snippet.description,
      topic: topic
    }).save((err, result ) => {
      if(err) {
        console.log('Failed');
      } else {
        console.log('Success');
      }
    })

  })
  var topic = new Topics({
    topic: topic
  }).save((err, result) => {
    if(err) {
      console.log('Error', err);
    } else {
      console.log('Success', result);
    }
  })

}


module.exports.Topics = Topics;
module.exports.Vids = Vids;
module.exports.save = save;