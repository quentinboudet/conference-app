import Layout from './layout/index';
import SpeakerList from './speakers/list/index';

console.log('bonjour index')


let talk = require('./talk.service');
//Etape 2 API REST
talk.findAllSpeakers().then(speakers => {
  speakers = JSON.parse(speakers)
  speakers.forEach(speaker => console.log(speaker.firstname, speaker.lastname))
},
  error => console.log(error)
);

//Etape 3 Partials
let layout = new Layout()
console.log(layout)
// let layout = new Layout()  
layout.render()

let speakerList = new SpeakerList()
speakerList.render("main-view")
