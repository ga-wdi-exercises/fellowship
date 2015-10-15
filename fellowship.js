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
    var newSection = document.querySelector("#middle-earth");
    // add each land as an article tag
    for(var i = 0; i < fellowship.lands.length; i++) {
      var newLand = document.createElement("article");
      // inside each article tag include an h1 with the name of the land
      newLand.setAttribute("class", fellowship.lands[i]);
      newLand.innerHTML = "<h1>" + fellowship.lands[i] + "</h2>";
      newSection.appendChild(newLand);
    }
  },
  makeHobbits: function(hobbits) {
    var theShire = document.querySelector(".Shire");
    // display an unordered list of hobbits in the shire
    var hobbitList = document.createElement("ul");
    theShire.appendChild(hobbitList);
    for (var h = 0; h < fellowship.hobbits.length; h++) {
      var newHobbit = document.createElement("li");
      // give each hobbit a class of hobbit
      newHobbit.setAttribute("class", "hobbit");
      newHobbit.innerHTML = fellowship.hobbits[h];
      hobbitList.appendChild(newHobbit);
    }
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var theOneRing = document.createElement("div");
    theOneRing.setAttribute("id", "the-ring");
    // add the ring as a child of Frodo
    var frodo = document.querySelector("li");
    frodo.appendChild(theOneRing);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    var ourBuddies = document.createElement("aside");
    ourBuddies.setAttribute("id", "ourBuddies");

    // insert your aside before rivendell
    var rivendell = document.querySelector(".Rivendell");
    var beforeRivendell = document.querySelectorAll("h1")[1];
    rivendell.insertBefore(ourBuddies, beforeRivendell);

    // display an unordered list of buddies in the aside
    var buddyList = document.createElement("ul");
    var buddyListSelect = document.querySelector("#ourBuddies");
    buddyListSelect.appendChild(buddyList);

    for (var b = 0; b < fellowship.hobbits.length; b++) {
      var newBuddy = document.createElement("li");
      newBuddy.setAttribute("class", "buddy");
      newBuddy.innerHTML = fellowship.buddies[b];
      buddyList.appendChild(newBuddy);
    }
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var viggo = document.querySelectorAll(".buddy")[3];
    viggo.innerHTML = "Aragorn";
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  }
}

// Automatically run functions
fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies(fellowship.buddies);
fellowship.beautifulStranger();

//Fix adding class based on land names (<article>)
