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
    middleEarth.id = 'middle-earth';
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    for (var i = 0; i < this.lands.length; i++) {
      var land = this.lands[i];
      var landArticle = document.createElement('article');
      var landH1 = document.createElement('h1');

      landH1.innerHTML = land;

      landArticle.appendChild(landH1);
      middleEarth.appendChild(landArticle);
    }

    document.body.appendChild(middleEarth);
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    var hobbitList = document.createElement('ul');

    for (var i = 0; i < this.hobbits.length; i++) {
      var hobbit = this.hobbits[i];
      var hobbitLi = document.createElement('li');

      hobbitLi.innerHTML = hobbit;
      hobbitLi.classList.toggle('hobbit');

      hobbitList.appendChild(hobbitLi);
    }

    var shire = document.getElementById('middle-earth').firstChild;
    shire.appendChild(hobbitList);
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
    var theRing = document.createElement('div');
    theRing.id = 'the-ring';

    var hobbits = document.getElementsByClassName('hobbit');
    hobbits[0].appendChild(theRing);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    var buddiesAside = document.createElement('aside');
    var buddiesUl = document.createElement('ul');

    for (var i = 0; i < this.buddies.length; i++) {
      var buddy = this.buddies[i];
      var buddyLi = document.createElement('li');

      buddyLi.innerHTML = buddy;
      buddiesUl.appendChild(buddyLi);
    }

    buddiesAside.appendChild(buddiesUl);

    var rivendell = document.getElementsByTagName('article')[1];
    var middleEarth = document.getElementById('middle-earth');
    middleEarth.insertBefore(buddiesAside, rivendell);
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var buddies = document.getElementsByTagName('aside');
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  }
}

fellowship.makeMiddleEarth();
fellowship.makeHobbits();
fellowship.makeBuddies();
