
let talk = require('../../talk.service');
let $ = require('jquery')
export default class SpeakerList{
  render(idView){
    talk.findAllSpeakers().then(speakers => {
      speakers = JSON.parse(speakers)
      let $view = $('#'+idView).html("<ul>").children('ul')
      // $view
      speakers.forEach(speaker => {
        $view.append('<li>'+ speaker.firstname +' '+ speaker.lastname +"</li>")
      });
    },
      error => console.log(error)
    );
  }
}