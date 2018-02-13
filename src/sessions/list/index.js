//Etape 4 Routeur
let talk = require('../../talk.service');
let $ = require('jquery')
export default class SessionList{
  render(idView){
    talk.findAll("sessions").then(speakers => {
      speakers = JSON.parse(speakers)
      let $view = $('#'+idView).html("<ul>").children('ul')
      // $view
      speakers.forEach(session => {
        $view.append('<li>'+ session.title +"</li>")
      });
    },
      error => console.log(error)
    );
  }
}