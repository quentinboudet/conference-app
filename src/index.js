console.log('bonjour index')


let talk = require('./talk.service');
//Etape 2 API REST
talk.findAllSpeakers().then(speakers => {
  speakers = JSON.parse(speakers)
  speakers.forEach(speaker => console.log(speaker.firstname, speaker.lastname))
},
  error => console.log(error)
);