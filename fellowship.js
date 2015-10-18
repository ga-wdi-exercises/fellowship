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
    document.createElement('section').setAttribute('id','middle-earth');
    for (var i = 0; i<fellowship.lands.length; i++){
        var article = document.createElement('article');
        document.querySelector('#middle-earth').appendChild(article);
        var h1 = document.createElement('h1');
        h1.textContent = fellowship.lands[i];
        article.appendChild(h1);
      }
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    var target = document.querySelector('#middle-earth').firstChild.nextSibling;
    var list = document.createElement('ul');
    target.appendChild(list);
    for(var i=0; i<fellowship.hobbits.length; i++){
      var item = document.createElement('li');
      item.setAttribute('class','hobbit');
      item.textContent = fellowship.hobbits[i];
      list.appendChild(item);
    }
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
    var frodo = document.querySelector('ul').firstChild;
    var ring = document.createElement('div');
    ring.setAttribute('id','the-ring');
    frodo.appendChild(ring);

  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    var aside = document.createElement('aside');
    var list = document.createElement('ul');
    var lands = document.querySelector('#middle-earth');
    var rivendell = document.querySelector('#middle-earth').lastChild.previousSibling;
    aside.appendChild(list);
    lands.insertBefore(aside, rivendell);
    for(var i=0; i<fellowship.buddies.length; i++){
      var item = document.createElement('li');
      item.textContent = fellowship.buddies[i];
      list.appendChild(item);
    }
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var strider = document.querySelector('aside').firstChild.lastChild.previousSibling;
    strider.innerHTML = "Aragorn";
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var article = document.querySelector('#middle-earth').firstChild.nextSibling;
    var oldHobbits = document.querySelector('#middle-earth').firstChild.nextSibling.firstChild;
    var aside = document.querySelector('aside');
    var oldBuddies = document.querySelector('aside').firstChild;
    var hobbits = article.removeChild(oldHobbits);
    var buddies = aside.removeChild(oldBuddies);
    var rivendell = document.querySelector('#middle-earth').lastChild.previousSibling;
    rivendell.appendChild(hobbits);
    rivendell.appendChild(buddies);
    var theFellowship = document.createElement('div');
    for (var i=0; i<fellowship.hobbits.length; i++){
      theFellowship.textContent += fellowship.hobbits[i];
      alert(fellowship.hobbits[i]+" has joined the fellowship!");
    }
    for (var i=0; i<fellowship.buddies.length; i++){
      theFellowship.textContent += fellowship.buddies[i];
      alert(fellowship.buddies[i]+" has joined the fellowship!");
    }

  }
}
