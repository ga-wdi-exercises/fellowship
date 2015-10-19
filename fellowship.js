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
  makeMiddleEarth: function() {
    // create a section tag with an id of middle-earth
    var newSection = document.createElement("section");
    newSection.id = "middle-earth";
    // add each land as an article tag
    var landCall = fellowship.lands;
    for (var i = 0; i < landCall.length; i++) {
      var newArticle = document.createElement("article");
      var newH1 = document.createElement("h1");
      newH1.textContent = landCall[i];
      newArticle.appendChild(newH1);
      newSection.appendChild(newArticle);
    }
    // inside each article tag include an h1 with the name of the land
    document.body.appendChild(newSection);
    // append middle-earth to your document body
  },
  makeHobbits: function() {
    // display an unordered list of hobbits in the shire
    var newUl = document.createElement("ul");
    var hobbitsCall = fellowship.hobbits;

    for (var i = 0; i < hobbitsCall.length; i++) {
      var newLi = document.createElement("li");
      newLi.textContent = hobbitsCall[i];
      newLi.setAttribute("class","hobbits");
      newUl.appendChild(newLi);
    }
    document.body.appendChild(newUl);
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var ringDiv = document.createElement("div");
    ringDiv.id = "the-ring";
    // add the ring as a child of Frodo
    var ringBearer = document.getElementsByClassName("hobbits")[0];
    ringBearer.appendChild(ringDiv);
  },
  makeBuddies: function() {
    // create an aside tag
    var newAside =  document.createElement("aside");
    // display an unordered list of buddies in the aside
    var newUl =  document.createElement("ul");
    var buddiesCall = fellowship.buddies;

    for (var i = 0; i < buddiesCall.length; i++) {
      var newLi = document.createElement("li");
      newLi.textContent = buddiesCall[i];
      newUl.appendChild(newLi);
    }
    newAside.appendChild(newUl);

    // insert your aside before rivendell
    var beforeRivendell = document.getElementsByTagName("article")[0];
    beforeRivendell.insertBefore(newAside, null);
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var callStrider = document.getElementsByTagName("aside")[0];
    callStrider = callStrider.getElementsByTagName("li")[3];
    callStrider.textContent = "Aragorn";
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    var fellowshipDiv = document.createElement("div");
    fellowshipDiv.id = "the-fellowship";
    fellowshipDiv.appendChild(document.createElement("ul"));
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var callBuddies = document.getElementsByTagName("aside")[0].children[0].children;
    var buddiesLength = callBuddies.length;
    var callHobbits = document.getElementsByTagName("ul")[1].children;
    var hobbitsLength = callHobbits.length;
    var callRivendell = document.getElementsByTagName("article")[1];

    for (var i = 0; i < buddiesLength; i++) {
      var buddy = callBuddies[0];
      fellowshipDiv.children[0].appendChild(buddy);
      alert(buddy.textContent + "joined your party!");
    }
    for (var j = 0; j <hobbitsLength; j++) {
      var hobbit = callHobbits[0];
      fellowshipDiv.children[0].appendChild(hobbit);
      alert(hobbit.textContent + "joined your party!");
    }
    callRivendell.appendChild(fellowshipDiv);

  }
};

fellowship.makeMiddleEarth();
fellowship.makeHobbits();
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies();
fellowship.beautifulStranger();
fellowship.forgeTheFellowShip();
