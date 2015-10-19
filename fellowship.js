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
    for(var i = 0; i < lands.length; i++ ) {
      var articleTag = document.createElement('article');
      var h1Tag = document.createElement('h1');
      h1.textContent = lands[i]; /////////make sure you know what's going on here
      articleTag.appendChild(h1Tag);
      middleEarth.appendChild(articleTag);
    }
    document.body.appendChild(middleEarth);

    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
  },

  makeMiddleEarth(lands);

  makeHobbits: function(hobbits) {
    var hobbitsList = document.createElement('ul');
    for (var i = 0; i < hobbits.length; i++) {
      var hobbit = document.createElement('li');
      hobbit.textContent = hobbits[i]; /////The textContent property sets or returns the textual content of the specified node, and all its descendants.
      hobbit.className = "hobbit";
      hobbitsList.appendChild(hobbit);
    }
    var shire = document.getElementByTagName('article')[0];
    shire.appendChild(hobbitsList);
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
  },
  makeHobbits(hobbits);

  keepItSecretKeepItSafe: function() {
    var ring = document.createElement('div');
    ring.id = 'the-ring';
    var frodo = document.getElementByClassName('hobbit')[0];
    frodo.appendChild(ring);
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
  },
  keepItSecretKeepItSafe();

  makeBuddies: function(buddies) {
    var asideTag = document.createElement('aside');
    var buddiesList = document.createElement('ul');
    for(var i = 0; i < buddies.length; i++) {
      var bestBuds = document.createElement('li');
      bestBuds.textContent = buddies[i];
      buddiesList.appendChild(bestBuds);
    }
    asideTag.appendChild(bestBuds);
    var rivendell = document.getElementByTagName('article')[1];
    rivendell.parentNode.insertBefore(asideTag, rivendell);
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
  },
makeBuddies(buddies);

  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  }
}
