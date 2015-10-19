var fellowship = {
  hobbits: [
    "Frodo Baggins",
    "Samwise 'Sam' Gamgee",
    "Meriadoc \"Merry\" Brandybuck",
    "Peregrin 'Pippin' Took"
  ],
  buddies: [
    "Gandalf the Grey",
    "Legolas Greenleaf",
    "Gimli",
    "Strider",
    "Boromir"
  ],
  lands: [
    "The Shire", "Rivendell", "Mordor"
  ],

  makeMiddleEarth: function(lands) {
    console.log(lands);
    // create a section tag with an id of middle-earth
    var middleEarth = document.createElement("section");
    middleEarth.id = "middle-earth";
    // add each land as an article tag
    for (var i = 0; i < lands.length; i++) {
      var artTags = document.createElement("article");
      // inside each article tag include an h1 with the name of the land
      var h1 = document.createElement("h1");
      h1.textContent = lands[i];
      artTags.appendChild(h1);
      middleEarth.appendChild(artTags);
    }
    // append middle-earth to your document body
    document.body.appendChild(middleEarth);
  },

  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    var halflings = document.createElement("aside");
    var hobList = document.createElement("ul");
    for (var j = 0; j < hobbits.length; j++) {
      var hobbit = document.createElement("li");
      hobbit.textContent = hobbits[j];
      // give each hobbit a class of hobbit
      hobbit.className = "hobbit";
      hobList.appendChild(hobbit);
    }
    halflings.appendChild(hobList);

    var shireChillin = document.getElementsByTagName("article")[1];
    console.log(halflings);
    shireChillin.parentNode.insertBefore(halflings, shireChillin);

  },


  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var theRing = document.createElement("div");
    theRing.textContent = "**I will corrupt you. -the ring**";
    theRing.id = "the-ring";
    // add the ring as a child of Frodo
    var frodo = document.getElementsByClassName("hobbit")[0];
    frodo.appendChild(theRing);
  },

  makeBuddies: function(buddies) {
    // create an aside tag
    var asideTag = document.createElement("aside");
    // display an unordered list of buddies in the aside
    var buddiesList = document.createElement("ul");
    for (var k = 0; k < buddies.length; k++) {
      var buddy = document.createElement("li");
      buddy.textContent = buddies[k];
      buddiesList.appendChild(buddy);
      //document.body.appendChild(buddy); //suspect not needed
    }
    asideTag.appendChild(buddiesList);
    var waitingCouncil = document.getElementsByTagName("article")[2];
    console.log(waitingCouncil);
    waitingCouncil.parentNode.insertBefore(asideTag, waitingCouncil);
  },

  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var strider = document.getElementsByTagName("aside")[1].getElementsByTagName("li")[3];
    strider.textContent = "Aragorn";
  },

  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    var theCrewGoes = document.getElementsByTagName("aside")[0];
    var toRiven = document.getElementsByTagName("article")[2];
    toRiven.parentNode.insertBefore(theCrewGoes, toRiven);
    // create a new div called 'the-fellowship'
    var theFellowship = document.createElement("div");
    theFellowship.id = "the-fellowship";
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var joiner = document.getElementsByTagName("li")[0];
    while (joiner) {
      joiner = document.getElementsByTagName("li")[0];
      theFellowship.appendChild(joiner);
      alert(joiner.textContent + " has joined the party!");
    }
  }
};
