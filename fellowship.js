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
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    console.log(lands);
    for (i=0; i < fellowship.lands.length; i++) {
      console.log(lands[i]);
      var landArticles = document.createElement("article");
      landArticles.innerHTML = "<h1>" + lands[i] + "</h1>";
      document.body.appendChild(landArticles);
    }
  },

//STARR - Run this in Chrome and not Firefox please!

  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    // console.log(hobbits);
    var hobbitList = document.createElement("ul");
    for (j = 0; j < fellowship.hobbits.length; j++) {
      console.log(fellowship.hobbits[j]);
      hobbitList.innerHTML += "<li class='hobbit'>" + fellowship.hobbits[j] + "</li>";
    }
    document.getElementsByTagName("article")[0].appendChild(hobbitList);
  },

  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
    var ring = document.createElement("div");
    ring.id = "the-ring";
    document.getElementsByClassName("hobbit")[0].appendChild(ring);
  },

  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    var aside = document.createElement("aside");
    var asideList = document.createElement("ul");
    var rivendell = document.body.getElementsByTagName("article")[1];
    for (k = 0; k < fellowship.buddies.length; k++) {
      console.log(fellowship.buddies[k]);
      asideList.innerHTML += "<li>" + fellowship.buddies[k] + "</li>";
    }
    document.body.insertBefore(asideList,rivendell);
  },

  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    document.body.children[3].children[3].textContent = "Aragorn";
  },

  forgeTheFellowShip: function() {
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    // move the hobbits and the buddies to Rivendell -- moved for logical clarity
    var theShire = document.body.children[2];
    var shireHobbits = document.body.children[2].children[1];
    theShire.removeChild(shireHobbits); //removes hobbits from The Shire -- works
    var theFellowship = document.createElement("div");
    theFellowship.id = "the-fellowship";
    // need sleep but will keep working on this; glanced at the solution branch but the code there didn't really make sense to me
  }
};

fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits();
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies();
fellowship.beautifulStranger();
