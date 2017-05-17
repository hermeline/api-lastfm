// J'appelle l'url qui va me renvoyer un JSON avec la méthode get de jquery

// l'url -> http://API_URL/API_VERSION/?method=METHOD&artist=ARTIST_NAME&api_key=API_KEY&format=json

$.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=bob+marley&api_key=81b851def420eaf86acaeb639dcc1464&format=json')

      // Lorsque l'url renvoie le JSON elle exécute cette fonction de callback (rappel)

      .then(function (data) {

        // Affiche mes données


        // Je me ballade dans mon objet pour récupérér la biographie de mon artiste.
        var similar = data.artist.name;
        var image = data.artist.image[2]['#text'];
        var bio = data.artist.bio.summary;

        $('#titre').append("<h1>"+similar+"</h1>");
        $('#wrapper').append("<img src='"+image+"'>");
        $('#wrapper').append(bio);

      });
