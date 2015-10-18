// Dramatis Personae

var fellowship = {
  hobbits: [
    "Frodo Baggins",
    "Samwise 'Sam' Gamgee",
    "Meriadoc \"Merry\" Brandybuck",
    "Peregrin 'Pippin' Took"
  ];
  buddies: [
    "Gandalf the Grey",
    "Legolas",
    "Gimli",
    "Strider",
    "Boromir"
  ];

  var lands = ["The Shire", "Rivendell", "Mordor"];

  makeMiddleEarth: function(lands) {
    var middleEarth = document.createElement('section');
    middleEarth.id = "middle-earth"
    for (var i = 0; i < lands.length; i++) {
      var articleTag = document.createElement('article');
      var h1Tag = document.createElement('h1');
      h1Tag.textContent = lands[i];
      articleTag.appendChild(h1Tag);
      middleEarth.appendChild(articleTag);
    }
    document.body.appendChild(middleEarth);
  }
  makeMiddleEarth(lands);


  makeHobbits: function(hobbits) {
    var hobbitsList = document.createElement('ul')
      // display an unordered list of hobbits in the shire
    for (var i=0;  i< hobbits.length; i++){
      // give each hobbit a class of hobbit
      var hobbit = document.createElement('li');
      hobbit.className = "hobbit";
      hobbitsList.appendChild(hobbit)
  }
  var shire =document.getElementsByTagName('article') [0];
  shire.appendChild(hobbitsList);
}
makeHobbits (hibbits);


  keepItSecretKeepItSafe: function() {
  
var ring = document.createElement('div');
ring.id ="the-ring";
    var frodo = document.getElementsByClassName('hobbit')[0];
    frodo.appendChild('ring');
  }
  keepItSecretKeepItSafe();

  makeBuddies: function(buddies) {
    // create an aside tag
    var sideTag - document.createElement('asside');
    // display an unordered list of buddies in the aside
    var buddiesList
    // insert your aside before rivendell
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    var div = document.createElement('the-fellowship');
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  }
}
