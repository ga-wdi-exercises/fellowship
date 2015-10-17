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
    var middleEarth = document.querySelector("#middle-earth");

    for (var i = 0; i < fellowship.lands.length; i++) {
      var landName = fellowship.lands[i];

      // add each land as an article tag and add a class with landName
      var newLand = document.createElement("article");
      var landNameClass = landName.toLowerCase().replace(" ", "");
      newLand.setAttribute("class", landNameClass);

      // inside each article tag include an h1 with landName
      newLand.innerHTML = "<h1>" + landName + "</h1>";
      middleEarth.appendChild(newLand);
    }
  },
  makeHobbits: function(hobbits) {
    var theShire = document.querySelector(".theshire");

    // display an unordered list of hobbits in the shire
    var hobbitList = document.createElement("ul");
    hobbitList.setAttribute("id", "theHobbits");
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
    ourBuddies.setAttribute("id", "theBuddies");

    // insert your aside before rivendell
    var rivendell = document.querySelector("#middle-earth");
    var beforeRivendell = document.querySelector(".rivendell");
    rivendell.insertBefore(ourBuddies, beforeRivendell);

    // display an unordered list of buddies in the aside
    var buddyList = document.createElement("ul");
    ourBuddies.appendChild(buddyList);

    for (var b = 0; b < fellowship.buddies.length; b++) {
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
    var rivendell = document.querySelector(".rivendell");
    var theHobbits = document.querySelector("#theHobbits");
    var theBuddies = document.querySelector("#theBuddies");

    rivendell.appendChild(theHobbits);
    rivendell.appendChild(theBuddies);

    // create a new div called 'the-fellowship'
    var theFellowship = document.createElement("div");
    theFellowship.setAttribute("id", "the-fellowship");
    theFellowship.innerHTML = "<h2>The Fellowship of the Ring</h2>";
    rivendell.appendChild(theFellowship);

    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var selectTheFellowship = document.querySelector('#the-fellowship');

    var addToFellowship = function(category) {
      for (var i = 0; i < fellowship[category].length; i++) {
        var newFellow = document.createElement("p");
        // give each hobbit a class of hobbit
        newFellow.setAttribute("class", category);
        newFellow.innerHTML = fellowship[category][i];
        selectTheFellowship.appendChild(newFellow);
        alert(fellowship[category][i] + " has joined the Fellowship of the Ring");
      }
    }

    addToFellowship("hobbits");
    addToFellowship("buddies");
  }
}

// Comment/Uncomment to automatically run functions
fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies(fellowship.buddies);
fellowship.beautifulStranger();
fellowship.forgeTheFellowShip();
