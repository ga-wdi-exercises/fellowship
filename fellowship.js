// Dramatis Personae
var fellowship = {
  hobbits: [
    "Frodo Baggins",
    "Samwise 'Sam' Gamgee",
    "Meriadoc \"Merry\" Brandybuck",
    "Peregrin 'Pippin' Took"
  ],
  buddies: [
    "Gandalf the Grey",
    "Legolas",
    "Gimli",
    "Strider",
    "Boromir"
  ],
  lands: [
    "The Shire", "Rivendell", "Mordor"
  ],

  makeMiddleEarth: function(lands) {
    console.log(lands)
    var middleEarth = document.createElement('section');
    middleEarth.id = 'middle-earth';
    for(var i = 0; i < lands.length; i++) {
      var article = document.createElement('article');
      var h1 = document.createElement('h1');
      h1.textContent = lands[i];
      article.appendChild(h1);
      middleEarth.appendChild(article);
      document.body.appendChild(middleEarth);
    }
  },

  makeHobbits: function(hobbits) {
    var hobbitList = document.createElement('ul');
      for(var i = 0; i < hobbits.length; i++) {
      var hobs = document.createElement('li');
      hobs.textContent = hobbits[i];
      hobs.className = 'hobbies';
      hobbitList.appendChild(hobs);
      }
    var shire = document.getElementsByTagName('article')[0];
    shire.appendChild(hobbitList)
  },

  keepItSecretKeepItSafe: function() {
    var ring = document.createElement('div');
    ring.id = 'da-ring';
    var frodo = document.getElementsByClassName('hobbies')[0];
    frodo.appendChild(ring);
  },

  makeBuddies: function(buddies) {
    var aside = document.createElement('aside');
    var buddiesList = document.createElement('ul');

    for(var i = 0; i < buddies.length; i++) {
    var buds = document.createElement('li');
    buds.textContent = buddies[i];
    buddiesList.appendChild(buds);
    }

    aside.appendChild(buddiesList);
    var rivendell = document.getElementsByTagName('article')[1];
    rivendell.parentNode.insertBefore(aside, rivendell);
  },

  beautifulStranger: function() {
    var bud = document.getElementsByTagName('aside')[0].getElementsByTagName('li');
    var strider = bud[3];
    strider.textContent = 'Aragon';
  },

  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // THIS IS HARDDDD AHHHHHHHH GD
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  }
}

fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies(fellowship.buddies);
fellowship.beautifulStranger();
