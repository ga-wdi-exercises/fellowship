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
    var newSection = document.createElement("section");
    newSection.id = "middle-earth";
    document.body.appendChild(newSection);
    for (i = 0; i < lands.length; i++) {
      console.log(lands[i]);
      var newArticle = document.createElement("article");
      newArticle.innerHTML = "<h1>" + lands[i] + "</h1>";
      var middleEarth = document.getElementById("middle-earth");
      middleEarth.appendChild(newArticle);
    }
  },

  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
      console.log(hobbits);
      var newUl = document.createElement("ul");
      var shire = document.querySelector("article").children[0];
      shire.appendChild(newUl);
      for (i = 0; i < hobbits.length; i++) {
        console.log(hobbits[i]);
        var newLi = document.createElement("li");
        newLi.innerHTML = hobbits[i];
        newUl.appendChild(newLi);
        newLi.setAttribute("class", "hobbit");
      }
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
      var newID = document.createElement("div");
      newID.id = "the-ring";
      document.querySelector("ul li").appendChild(newID);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    console.log(buddies);
    var newAside = document.createElement("aside");
    var newUl = document.createElement("ul");
    newAside.appendChild(newUl);
    for (i = 0; i < buddies.length; i++) {
      var newLi = document.createElement("li");
      newLi.innerHTML = buddies[i];
      newUl.appendChild(newLi);
      document.querySelector("h1").appendChild(newAside);
    }
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    document.querySelectorAll("aside li")[3].textContent = "Aragorn";
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    var hobbitsArray = document.getElementsByClassName("hobbit")[0].parentNode;
    var buddiesArray = document.querySelector("aside");
    var rivendell = document.querySelectorAll("article")[1].children[0];
    rivendell.appendChild(hobbitsArray);
    rivendell.appendChild(buddiesArray);
    // // create a new div called 'the-fellowship'
    var theFellowship = document.createElement("div");
    theFellowship.id = "the-fellowship";
    theFellowship.appendChild(document.createElement('ul'));
    theFellowship.appendChild(document.createElement('ul'));
    document.body.appendChild(theFellowship);

    // // add each hobbit and buddy one at a time to 'the-fellowship'
    for (i = 0; i < fellowship.hobbits.length; i++) {
      var newLi = document.createElement("li");
      newLi.innerHTML = fellowship.hobbits[i];
      theFellowship.children[0].appendChild(newLi);
      alert(newLi.textContent + " has joined the party");
    }
    for (i = 0; i < fellowship.buddies.length; i++) {
      var newLi2 = document.createElement("li");
      newLi2.innerHTML = fellowship.buddies[i];
      theFellowship.children[1].appendChild(newLi2);
      alert(newLi2.textContent + " has joined the party");
    }

    // after each character is added make an alert that they have joined your party
  }
};

fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies(fellowship.buddies);
fellowship.beautifulStranger();
fellowship.forgeTheFellowShip();
