import Layout from './layout/index';
import SpeakerList from './speakers/list/index';
import SessionList from './sessions/list/index';

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

// let speakerList = new SpeakerList()
// speakerList.render("main-view")

//Etape 4 Routeur
var router = () => {
  if (location.hash == '#speakers-list') {
    // TODO afficher vue liste des présentateurs
    let speakerList = new SpeakerList()
    speakerList.render("main-view")
  } else if (location.hash == '#sessions-list') {
    // TODO afficher vue liste des sessions
    let sessionList = new SessionList()
    sessionList.render("main-view")
  } else {
    // TODO afficher vue par défaut
  }
}
window.addEventListener('load', () => {
  window.onhashchange = () => {
    router();
  };
  router();
});