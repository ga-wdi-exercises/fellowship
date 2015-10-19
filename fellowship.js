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
    var earth = document.createElement("section");
    earth.id="middle-earth";
    // add each land as an article tag
    for (var i=0; i<lands.length; i++) {
      var landarticle= document.createElement("article");
    // inside each article tag include an h1 with the name of the land
    var h1tag=document.createElement("h1");
    h1tag.textContent= lands[i];
    // append middle-earth to your document body
    middle-earth.appendChild(landarticle);
  }
    document.body.appendChild(middle-earth);
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    var ulhobits = document.createElement('ul');
      var hobbits = document.createElement('li');
    // give each hobbit a class of hobbit
    for (i=0;i<hobbits.length;i++) {
    li.className = "Hobbit";
    }
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var newdiv=document.createElement("div");
    newdiv.id="the-ring";
    // add the ring as a child of Frodo
    hobbit[0].appendChild("the-ring");
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    var asidetag= document.createElement("aside");
    // display an unordered list of buddies in the aside
      var ulbuddies=document.createElement("ul")
        for (i=0; i<buddies.length; i++){
          buddy.textContent=buddies[i];
    // insert your aside before rivendell

  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    Strider.textContent="Aragorn";
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    Rivendell.appendChild("buddies");
    Rivendell.appendChild("hobbits");
    // create a new div called 'the-fellowship'
    var thefellowship=document.createElement("div")
    // add each hobbit and buddy one at a time to 'the-fellowship'
    for (i=0; i<hobbit.length;i++) {
      thefellowship.apendChild([i]);
    }
    for (i=0; i<buddy.length;i++) {
      thefellowship.apendChild([i]);
    }
    // after each character is added make an alert that they have joined your party
    alert(buddy + "You've joined our party!")
  }
}
