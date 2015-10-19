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
    var midEarthSect = document.createElement("section");
    midEarthSect.setAttribute("id", "middle-earth");

    for (var land_index in lands) {
      // add each land as an article tag
      var landArticle = document.createElement("article");

      // setting an id for the article so we can fine the land easily
      landArticle.setAttribute("id", lands[land_index]);

      // inside each article tag include an h1 with the name of the land
      var landHeader = document.createElement("h1");

      // get the land name using index
      landHeader.innerHTML = lands[land_index];

      // add these as children
      landArticle.appendChild(landHeader);
      midEarthSect.appendChild(landArticle);
    }

    // append middle-earth to your document body
    document.body.appendChild(midEarthSect);
  },
  makeHobbits: function(hobbits) {
    var ulHobbitsInTheShire = document.createElement("ul");

    for (var hobbit_index in hobbits)
    {
      var liHobbit = document.createElement("li");
      var classTag = document.createElement("div");
      classTag.setAttribute("id", hobbits[hobbit_index]);
      classTag.setAttribute("class", "hobbit");
      classTag.innerHTML = hobbits[hobbit_index];
      liHobbit.appendChild(classTag);
      ulHobbitsInTheShire.appendChild(liHobbit);
    }
    document.body.appendChild(ulHobbitsInTheShire);
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
  },
  keepItSecretKeepItSafe: function() {

    // create a div with an id of 'the-ring'
    var classTag = document.createElement("div");
    classTag.setAttribute("id", "the-ring");

    // add the ring as a child of Frodo
    document.getElementById("Frodo Baggins").appendChild(classTag);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    var asideTag = document.createElement("aside");
    var ulOfBuddies = document.createElement("ul");

    for (var buddy_index in buddies)
    {
      var liBuddy = document.createElement("li");
      liBuddy.setAttribute("id", buddies[buddy_index]);
      liBuddy.innerHTML = buddies[buddy_index];
      ulOfBuddies.appendChild(liBuddy);
    }
    // display an unordered list of buddies in the aside
    asideTag.appendChild(ulOfBuddies);

    // insert your aside before rivendell
    var parent = document.getElementById("Rivendell").parentNode;
    parent.insertBefore(asideTag, document.getElementById('Rivendell'));
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    document.getElementById("Strider").innerHTML = "Aragorn";
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  }
}
