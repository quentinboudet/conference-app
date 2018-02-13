console.log('bonjour talk service')
//Etape 2 API REST

module.exports = {
  findAllSpeakers: function() {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('GET', 'http://localhost:3000/speakers', true);
      req.onreadystatechange = (aEvt) => {
        if (req.readyState == 4) {
          if (req.status == 200)
            resolve(req.response); // corps de la réponse
          else
            reject( "Erreur pendant le chargement de la page");
        }
      };
      req.send(null);
    })
  },
  //Etape 4 Routeur
  findAll: function(type){
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('GET', 'http://localhost:3000/'+type, true);
      req.onreadystatechange = (aEvt) => {
        if (req.readyState == 4) {
          if (req.status == 200)
            resolve(req.response); // corps de la réponse
          else
            reject( "Erreur pendant le req open GET");
        }
      };
      req.send(null);
    })
  }
}