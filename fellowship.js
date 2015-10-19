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
    console.log(lands);
    for (var i = 0; i < lands.length; i++) {
      var landsArticle = document.createElement("article");
      landsArticle.innerHTML = "<h1>" + lands[i] + "</h1>";
      document.body.appendChild(landsArticle);
    }
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
  },
  makeHobbits: function(hobbits) {
    var listOfHobbits = document.createElement("ul");
    for (var i = 0; i < hobbits.length; i++) {
      var eachHobbit = document.createElement("li");
      eachHobbit.innerText = hobbits[i];
      hobbits[i].className = "hobbit";
      document.getElementsByTagName("article")[0].appendChild(listOfHobbits);
      listOfHobbits.appendChild(eachHobbit);
    }
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
  },
  keepItSecretKeepItSafe: function() {
    var theRing = document.createElement("div");
    document.getElementsByTagName("li")[0].appendChild(theRing);
    theRing.id = "the-ring";
    theRing.innerHTML = "<p>The ring</p>";
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
  },
  makeBuddies: function(buddies) {
    var asideTag = document.createElement("aside");
    var listOfBuddies = document.getElementsByTagName("ul")[0];
    for (var i = 0; i < buddies.length; i++) {
      var eachBuddy = document.createElement("li");
      eachBuddy.innerText = buddies[i];
      document.getElementsByTagName("article")[0].appendChild(asideTag);
      asideTag.appendChild(listOfBuddies);
      listOfBuddies.appendChild(eachBuddy);
    }
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
  },
  beautifulStranger: function() {
    var Aragorn = document.getElementsByTagName("li")[7];
    Aragorn.innerText = "Aragorn";
    // change the buddy 'Strider' textnode to "Aragorn"
  },
  forgeTheFellowShip: function() {
    var rivendell = document.getElementsByTagName("article")[1];
    var everyone = document.getElementsByTagName("li");
    var holderForMembers = document.createElement("ul");
    rivendell.appendChild(holderForMembers);
    var listOfEveryone = [];
    // rivendell.appendChild(listOfEveryone);
    for (var i = 0; i < everyone.length; i++) {
      listOfEveryone.push(everyone[i]);
    }
    for (var i = 0; i < listOfEveryone.length; i++) {
      holderForMembers.appendChild(listOfEveryone[i]);    // WTF only half are actually appended??
      alert(listOfEveryone[i].innerText + " has joined your party!");  // Yet all show up here??????
    }
  }
}


fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies(fellowship.buddies);
fellowship.beautifulStranger();
fellowship.forgeTheFellowShip();