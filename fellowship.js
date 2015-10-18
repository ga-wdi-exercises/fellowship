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
    var middleEarth = document.createElement("section");
    middleEarth.id = "middle-earth";
    console.log(middleEarth);
    for(var i = 0; i < lands.length; i++){
      var articleM = document.createElement("article");
      var heading = document.createElement('h1');
      articleM.id = lands[i];
      heading.textContent = lands[i];
      articleM.appendChild(heading);
      middleEarth.appendChild(articleM);
  }
    document.body.appendChild(middleEarth);
},

  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    console.log(hobbits);
    var hobbitUL = document.createElement('ul');
    for(var i = 0; i < hobbits.length; i++){
      var hobbitList= document.createElement('li');
      hobbitList.className = "hobbit";
      hobbitList.textContent = hobbits[i];
      hobbitUL.appendChild(hobbitList);
    }
    var shire = document.getElementById('The Shire');
    shire.appendChild(hobbitUL);
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
    var theRing = document.createElement("div");
    theRing.id = "the-ring";
    theRing.textContent = "The Ring";
    var frodo = document.getElementsByClassName('hobbit')[0];
    frodo.appendChild(theRing);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    console.log(buddies);
    var aside = document.createElement("aside");
    var buddiesUL = document.createElement("ul");
    for (var i = 0; i < buddies.length; i++){
    var buddiesList = document.createElement("li");
    buddiesList.className = "buddies";
    buddiesList.textContent = buddies[i];
    buddiesUL.appendChild(buddiesList);
    aside.appendChild(buddiesUL);
    }
    document.body.appendChild(aside);
    var rivendell = document.getElementsByTagName('article')[1];
    rivendell.parentNode.insertBefore(aside, rivendell);
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var makeAragorn = document.getElementsByClassName('buddies')[3];
    makeAragorn.textContent = "Aragorn";
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var hobbitArray = document.getElementsByTagName("ul")[0];
    var buddiesArray = document.getElementsByTagName("ul")[1];
    var rivendell = document.getElementById('Rivendell');
    rivendell.appendChild(hobbitArray);
    rivendell.appendChild(buddiesArray);
    var fellowship = document.createElement("div");
    fellowship.textContent = "the-fellowship";
    fellowship.id = "the-fellowship";
    for (var i = 0; i < hobbits.length; i++){
      fellowship.appendChild(hobbitArray);
      alert(hobbits[i] + " " + "has joined your party");
    }
    for (var i = 0; i < buddies.length; i++) {
      fellowship.appendChild(buddiesArray);
      alert(buddies[i] + " " + "has joined your party");
    }
    document.body.appendChild(fellowship);
  }
};

/* Code to Execute in Browser!
var lands = fellowship.lands;
var hobbits = fellowship.hobbits;
var buddies = fellowship.buddies;

fellowship.makeMiddleEarth(lands);
fellowship.makeHobbits(hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies(buddies);
fellowship.beautifulStranger();
fellowship.forgeTheFellowShip();
*/
