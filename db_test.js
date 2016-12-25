var mongoose = require('mongoose');
var audio = require('./audio');

mongoose.connect('mongodb://localhost:27017/db_test');

// Parameters are: model name, schema, collection name
var Audio = mongoose.model('Audio', audio, 'audios');

// new audio document
var audio = new Audio({
  audio_id: '2298',
  audio_file: 'http://www.noiseaddicts.com/free-samples-mp3?id=281',
  location: {
    latitude: 41.479307,
    longitude: -73.213371
  },
  audio_title: 'animal sample',
  username: 'ruijia',
  description: 'this is a test'
});

audio.save(function(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  // query for the audio document again and print it to the screen
  Audio.find({ audio_id: '2298' }, function(error, docs) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    console.log(require('util').inspect(docs));
    process.exit(0);
  });
});