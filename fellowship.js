// Dramatis Personae
var fellowship = {
  hobbits: [
    "Frodo Baggins","Samwise 'Sam' Gamgee",
    "Meriadoc \"Merry\" Brandybuck","Peregrin 'Pippin' Took"
  ],
  buddies: [
    "Gandalf the Grey","Legolas","Gimli","Strider","Boromir"
  ],
  lands: [
    "The Shire", "Rivendell", "Mordor"
  ],
  makeMiddleEarth: function() {
    // create a section tag with an id of middle-earth
    var middleEarth = document.createElement('section');
    middleEarth.setAttribute('id','middle-earth');
    // add each land as an article tag
    var lands = fellowship.lands;
    for (var i=0;i<lands.length;i++){
      var land = document.createElement('article');
      // inside each article tag include an h1 with the name of the land
      var landName = document.createElement('h1');
      landName.textContent = lands[i];
      land.appendChild(landName);
      middleEarth.appendChild(land);
    }
    // append middle-earth to your document body
    document.body.appendChild(middleEarth);
  },
  makeHobbits: function() {
    // display an unordered list of hobbits in the shire
    var list = document.createElement('ul');
    var hobbits = fellowship.hobbits;
    for (var i=0;i<hobbits.length;i++){
      var li = document.createElement('li');
      li.textContent = hobbits[i];
      // give each hobbit a class of hobbit
      li.className = 'hobbit';
      list.appendChild(li);
    }
    var shire = document.getElementsByTagName('article')[0];
    shire.appendChild(list);
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var ring = document.createElement('div');
    ring.setAttribute('id','the-ring');
    // add the ring as a child of Frodo
    document.getElementsByClassName('hobbit')[0].appendChild(ring);
  },
  makeBuddies: function() {
    // create an aside tag
    var aside = document.createElement('aside');
    var buddies = fellowship.buddies;
    // display an unordered list of buddies in the aside
    var list = document.createElement('ul');
    for(var i=0;i<buddies.length;i++){
      var li = document.createElement('li');
      li.textContent = buddies[i];
      list.appendChild(li);
    }
    aside.appendChild(list);
    // insert your aside before rivendell
    var midearth = document.getElementById('middle-earth');
    midearth.insertBefore(aside,midearth.childNodes[1]);
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var strider = document.querySelectorAll('aside li')[3];
    strider.textContent = "Aragorn";
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    var hobbits = document.getElementsByTagName('ul')[0];
    var buddies = document.getElementsByTagName('ul')[1];
    var rivendell = document.getElementsByTagName('article')[1];
    rivendell.appendChild(hobbits);
    rivendell.appendChild(buddies);
    // create a new div called 'the-fellowship'
    var theShip = document.createElement('div');
    theShip.setAttribute('id','the-fellowship');
    var shipList = theShip.appendChild(document.createElement('ul'));
    document.body.appendChild(theShip);
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var hobCount = hobbits.children.length;
    for (var i=0;i<hobCount;i++){
      var name = hobbits.children[0].textContent;
      shipList.appendChild(hobbits.children[0]);
      console.log(name+" has joined the party.");
    }
    var budCount = buddies.children.length;
    for (var i=0;i<budCount;i++){
      var name = buddies.children[0].textContent;
      shipList.appendChild(buddies.children[0]);
      console.log(name+" has joined the party.");
    }
  }
}
// fellowship.makeMiddleEarth();
// fellowship.makeHobbits();
// fellowship.keepItSecretKeepItSafe();
// fellowship.makeBuddies();
// fellowship.beautifulStranger();
// fellowship.forgeTheFellowShip();
