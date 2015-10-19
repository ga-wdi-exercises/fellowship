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
  var middleEarth = document.createElement('section');
  middleEarth.id = "middle-earth";
  for (var i = 0; i < lands.length; i++) {
    var articleTag = document.createElement('article');
    var h1Tag = document.createElement('h1');
    h1Tag.textContent = lands[i];
    articleTag.appendChild(h1Tag);
    middleEarth.appendChild(articleTag);
  }
  document.body.appendChild(middleEarth);
  },

  makeHobbits: function(hobbits) {
    var hobbitsList = document.createElement('ul');
  // display an unordered list of hobbits in the shire
  for (var i = 0; i < hobbits.length; i++) {
    // give each hobbit a class of hobbit
    var hobbit = document.createElement('li');
    hobbit.textContent = hobbits[i];
    hobbit.className = "hobbit";
    hobbitsList.appendChild(hobbit)
  }
  var shire = document.getElementsByTagName('article')[0];
  shire.appendChild(hobbitsList);
  },

  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var ring = document.createElement('div');
    ring.id = "the-ring";
    // add the ring as a child of Frodo
    var frodo = document.getElementsByClassName('hobbit')[0];
    frodo.appendChild(ring);
  },

  makeBuddies: function(buddies) {
    // create an aside tag
    var aside = document.createElement('aside');
    var buddiesList = document.createElement('ul');
    for (var i = 0; i < buddies.length; i++){
      var buddy = document.createElement('li');
      buddy.textContent = buddies[i];
      buddy.className = 'buddy';
      buddiesList.appendChild(buddy);
    }
    aside.appendChild(buddiesList);
    var rivendell = document.getElementsByTagName('article')[1];
    rivendell.appendChild(aside);
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
  },

  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var buddies = document.getElementsByTagName('aside')[0].getElementsByTagName('li');
    var strider = buddies[3];
    strider.textContent="Aragorn";
  },


  forgeTheFellowShip: function() {
    var fellowship = document.createElement('div');
    fellowship.id = "the-fellowship";
    var fellowshipList = document.createElement('ul');
    fellowship.appendChild(fellowshipList);
    var hobbitsShire = document.getElementsByTagName('article')[0].getElementsByTagName('ul')[0].children;
    var hobbitsLength = hobbitsShire.length;
    for (i = 0; i < hobbitsLength; i++){
      var oneHobbit = hobbitsShire[0];
      fellowship.children[0].appendChild(oneHobbit);
      alert(oneHobbit.textContent + " joined the Fellowship!");
    }
    var buddies = document.getElementsByTagName('aside')[0].getElementsByTagName('ul')[0].children;
    var buddiesLength = buddies.length;
    for( i = 0; i < buddiesLength; i++){
      var oneBuddy = buddies[0];
      fellowship.children[0].appendChild(oneBuddy);
      alert(oneBuddy.textContent + " joined the Fellowship!");
    }
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var Rivendell = document.getElementsByTagName('article')[1];
    Rivendell.appendChild(fellowship);
  },

};


fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies(fellowship.buddies);
fellowship.beautifulStranger();
fellowship.forgeTheFellowShip();
