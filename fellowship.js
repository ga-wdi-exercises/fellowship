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
    var middleEarth = document.createElement('section');
      middleEarth.setAttribute('id', 'middle-earth');
    // add each land as an article tag
    for (var i = 0; i < fellowship.lands.length; i++) {
    console.log(fellowship.lands[i]);
    var newArticle = document.createElement('article');
    var landsArray = fellowship.lands[i];
    newArticle.setAttribute('id', landsArray);
    // middleEarth.appendChild(newArticle);
    // inside each article tag include an h1 with the name of the land
    var newHeader = document.createElement('h1');
    newArticle.appendChild(newHeader);
    }
    // append middle-earth to your document body
    middleEarth.appendChild(newArticle);
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    var hobbitses = document.createElement('ul');
    // give each hobbit a class of hobbit
    for (var i = 0; i < fellowship.hobbits.length; i++) {
      var hobbitsClass = document.createElement('li');
      hobbitsClass.className = "hobbits";
      hobbitses.appendChild(hobbits);
    }
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var theringdiv = document.createElement('the-ring');
    theringdiv.setAttribute('id', "the-ring");
    // add the ring as a child of Frodo
    feelowship.hobbits.appendChild(theringdiv);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    var aside = document.createElement('Aside');
    aside.setAttribute('id', 'Aside');
    // display an unordered list of buddies in the aside

    // insert your aside before rivendell
    Aside.insertBefore(fellowship.lands.Rivendell)
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    fellowship.buddies.replaceChild('Strider', 'Aragon');
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    document.getElementById('Rivendell').appendChild(document.querySelectorAll('#hobbits, #buddies'));
    // create a new div called 'the-fellowship'
    var fellowshipDiv = document.createElement('div');
      fellowshipDiv.setAttribute('id', 'the-fellowship');
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    for (var i = 0; i < hobbits.length + 1; i++) {
      var i = 0;
      alert(hobbits[i].textContent + " has joined your party.");
      div.children[0].appendChild(hobbits[i]);
  }
}
