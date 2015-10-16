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
        var middleEarth = document.createElement("section");
    // add each land as an article tag
    var theShire = document.createElement("article")
    var Rivendell = document.createElement("article")
    var Mordor = document.createElement("article")
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    var h1 = document.createElement("h1")
      theShire.appendChild(h1);
        document.getElementsByTagName("h1").innerHTML =fellowship.lands[0];
      Rivendell.appendChild(h1);
        document.getElementsByTagName("h1").innerHTML =fellowship.lands[1];
      Mordor.appendChild(h1);
        document.getElementsByTagName("h1").innerHTML =fellowship.lands[2];
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    fellowship.hobbits;
    // give each hobbit a class of hobbit
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
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
}
