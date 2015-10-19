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
    middleEarth.id = "middle-earth";
    for (i = 0; i <= lands.length; i++) {
    // add each land as an article tag
      var landsArticle = document.createElement("article");
    // inside each article tag include an h1 with the name of the land
      var landsH1 = document.createElement("h1");
      landsH1.textContent = lands[i];
      landsArticle.appendChild(landsH1);
      middleEarth.appendChild(landsArticle);
    }
    // append middle-earth to your document body
      document.body.appendChild(middleEarth);
  },
  makeHobbits: function(hobbits) {
    console.log(fellowship.hobbits);
    var hobbitList = document.createElement("ul");
    hobbitList.id = "hobbit-list"
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    for (i = 0; i < fellowship.hobbits.length; i++) {
      var hobbit = document.createElement("li");
      hobbit.textContent = hobbits[i];
      hobbitList.appendChild(hobbit)
      hobbit.className = "hobbit"
    };
    var theShire = document.getElementsByTagName("article")[0];
    theShire.appendChild(hobbitList);
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
    theOneRing = document.createElement("div");
    theOneRing.id = "the-ring";
    var frodo = document.getElementsByClassName("hobbit")[0];
    frodo.appendChild(theOneRing);
  },
  makeBuddies: function(buddies) {
    console.log(fellowship.buddies);
    // create an aside tag
    var asideTag = document.createElement("aside");
    // display an unordered list of buddies in the aside
    var buddiesList = document.createElement("ul")
    buddiesList.id = "buddies-list"
    for (var i = 0; i < fellowship["buddies"].length; i++) {
      var buddy = document.createElement("li")
      buddy.textContent = fellowship.buddies[i];
      buddiesList.appendChild(buddy);
    };
    asideTag.appendChild(buddiesList);
    // insert your aside before rivendell
    var rivendell = document.getElementsByTagName("article")[1];
    rivendell.parentNode.insertBefore(asideTag, rivendell);
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var buddies = document.getElementsByTagName("aside")[0].getElementsByTagName("li");
    var strider = buddies[3];
    strider.textContent = "Aragorn";
  },
  forgeTheFellowShip: function() {

    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    var theFellowship = createElement("div");
    theFellowship.id = "the-fellowship";
    theFellowship.appendChild(document.createElement("ul"));
    // add each hobbit and buddy one at a time to 'the-fellowship'
    var allHobbits = getElementById("hobbit-list")
    var buddyList = getElementById("buddies-list")
    // after each character is added make an alert that they have joined your party
    for (i = 0; i <= allHobbits.length; i++) {

    }
    rivendell.appendChild(theFellowship);
  }
}
fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies();
fellowship.beautifulStranger();

//notes:
//create a variable = method.createElement(thingYouWant)
//populate the variable (object) with a for loop
//then use appendChild to put it in the place you want it to go
