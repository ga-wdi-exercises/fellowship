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
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    var middleEarth = document.createElement("section");
    middleEarth.id="middle-earth";
    var i = 0;
    while (i<lands.length){
      var newArticle = document.createElement("article");
      var newHeading = document.createElement("h1");
      newHeading.textContent = lands[i];
      newArticle.appendChild(newHeading);
      middleEarth.appendChild(newArticle);
      i++;
    }
    document.body.appendChild(middleEarth);
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    var ulListOfHobbits = document.createElement('ul');
    var i = 0;
    while (i<hobbits.length) {
      var liListOfHobbits = document.createElement('li');
      liListOfHobbits.className = "hobbit";
      liListOfHobbits.textContent = hobbits[i];
      ulListOfHobbits.appendChild(liListOfHobbits);
      i++;
    }
    var shire = document.getElementbyId('The Shire');
    shire.appendChild(ulListOfHobbits);
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
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
