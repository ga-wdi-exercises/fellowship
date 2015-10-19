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
var section = document.body.createElement("Section");
var ME = document.body.createTextNode("Middle-Earth");
section.appendChild(ME);
document.body.appendChild(section);

var a = document.createElement("ARTICLE");
var theShire = document.body.createTextNode("The Shire");
a.appendChild(theShire);
var appendAtoME = document.body.getElementById( "section" ).appendChild(a);
appendAtoME;
document.body.getElementById( "The Shire" ).innerHTML = <h1>The Shire</h1>;

var Rivendell = document.body.createTextNode("Rivendell");
a.appendChild(Rivendell);
appendAtoME;
document.body.getElementById( "Rivendell" ).innnerHTML = <h1>Rivendell</h1>;

var Mordor = document.body.createTextNode("Mordor");
a.appendChild(Mordor);
appendAtoME;
document.body.getElementById( "Mordor" ).innerHTML = <h1>Mordor</h1>;


    // create a section tag with an id of middle-earth

    // add each land as an article tag

    // inside each article tag include an h1 with the name of the land

    // append middle-earth to your document body

  },

  makeHobbits: function(hobbits) {
document.body.createElement("UL").

    // display an unordered list of hobbits in the shire

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
