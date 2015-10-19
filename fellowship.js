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
    // console.log(lands);
    // create a section tag with an id of middle-earth
    var sectionElement = document.querySelector("section");

    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land

    for (var i = 0; i < lands.length; i++) {
      var articleElement = document.createElement("article");
      var h1Element = document.createElement('H1');
      h1Element.textContent = lands[i];
      articleElement.appendChild(h1Element);
      // console.log(articleElement);
      sectionElement.appendChild(articleElement);
    // append middle-earth to your document body
    }
    document.body.appendChild(sectionElement);
  },

  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    var hobbitsList = document.createElement('ul');
    // give each hobbit a class of hobbit
    for (var i = 0; i < hobbits.length; i++) {
      var hobbit = document.createElement('li');
      hobbit.textContent = hobbits[i];
      hobbit.className = "hobbit";
      hobbitsList.appendChild(hobbit);
    }
    var shire = document.getElementsByTagName("article")[0];
    // console.log(shire);
    shire.appendChild(hobbitsList);
  },

  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var divElement = document.createElement("div");
    divElement.id = "the-ring";
    console.log(divElement);
    // add the ring as a child of Frodo
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
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
};
fellowship.makeMiddleEarth(fellowship.lands);
