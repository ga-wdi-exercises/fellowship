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
    var middleEarth = document.createElement("section");
    middleEarth.setAttribute("id", "middle-earth");
    for (var i=0; i < fellowship.lands.length; i++){
      console.log(fellowship.lands[i]);
      var newTag = document.createElement("article");
      var newLand = document.createElement("h1");
      newLand.textContent = fellowship.lands[i];
      newTag.appendChild(newLand);
      middleEarth.appendChild(newTag);
    }
    document.body.appendChild(middleEarth);

  },
  makeHobbits: function(hobbits) {
    var hobbitList = document.createElement("ul");
    for (var i=0; i<fellowship.hobbits.length; i++){
      console.log(fellowship.hobbits[i]);
      var newHobbit = document.createElement("li");
      newHobbit.textContent = hobbits[i];
      hobbitList.appendChild(newHobbit);
    }
    document.getElementById("middle-earth").firstChild.appendChild(hobbitList);
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
