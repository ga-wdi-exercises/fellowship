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

  function makeMiddleEarth(lands) {
    var middleEarth = document.createElement('section');
    middleEarth.id = "middle-earth";
    for (i=0; i <lands.length; i++) {
      var makeArticle = document.createElement('article');
      var makeH1 = document.createElement('H1');
      makeArticle.id = lands[i];
      makeH1.textContent = lands[i];
      makeArticle.appendChild(makeH1);
      middleEarth.appendChild(makeArticle);
    }
    document.body.appendChild(middleEarth);
  }
  makeMiddleEarth(lands);
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
  },
  function makeHobbits(hobbits) {
    var hobList = document.createElement('ul');
    makeMiddleEarth.appendChild(hobList);
    for (i=0; i <hobbits.length; i++){
        var makeLi = document.createElement('li');
        makeLi.id = "hobbit";
        hobList.appendChild(makeLi);
        makeLi.textContent = hobbits[i]
    }
  makeHobbits(hobbits);
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
  },
  keepItSecretKeepItSafe: function() {
    var makeDiv = document.createElement('div');
    makeDiv.id = 'the-ring';

    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party

  }
}
