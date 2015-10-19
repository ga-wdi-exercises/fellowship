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
    "The Shire",
    "Rivendell",
    "Mordor"
  ],
  makeMiddleEarth: function(lands) {
    console.log(lands)
    var createShire = function() {
      //create new section with id of middle-earth
      var newSec = document.createElement('section');
      document.body.appendChild(newSec);
      newSec.id = "middle-earth";
      var middleEarth = document.getElementById("middle-earth");
      //create an h1  within a new article of each of the lands in the fellowship.lands array
      for (var i = 0; i < fellowship.lands.length; i++) {
        var newArt = document.createElement('article');
        var newH1 = document.createElement('h1');
        var newLand = document.createTextNode(fellowship.lands[i]);
        middleEarth.appendChild(newArt);
        newArt.appendChild(newH1);
        newH1.appendChild(newLand);
      }
    }
    createShire();
  },
  makeHobbits: function(hobbits) {
    // create a new UL to contain the LI's of the hobbits
    var hobbitUL = document.createElement('ul');
    document.body.appendChild(hobbitUL);
    // add LI of each hobbit within the new UL
    // give each hobbit a class of hobbit
    for (var i = 0; i < fellowship.hobbits.length; i++) {
      var hobbit = document.createElement('li');
      hobbit.textContent = fellowship.hobbits[i];
      hobbit.className = "hobbit";
      hobbitUL.appendChild(hobbit);
    }
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var ring = document.createElement('div');
    ring.id = "the-ring";
    var frodo = document.getElementsByClassName("hobbit")[0];
    // add the ring as a child of Frodo
    frodo.appendChild(ring);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // insert your aside before rivendell///////////////////////////////
    var buddiesAside = document.createElement('aside');
    document.body.appendChild(buddiesAside);
    // display an unordered list of buddies in the aside
    var buddiesUl = document.createElement('ul');
    document.body.aside.appendChild(buddiesUL);
    for (var i = 0; i < fellowship.buddies.length; i ++) {
      var buddy = document.createElement('li');
      buddy.textContent = fellowship.buddies[i];
      buddiesUl.appendChild(buddy);
    }
  },
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
