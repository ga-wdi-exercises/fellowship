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
    // console.log(lands);
    var newSection = document.createElement('section');
    newSection.id='middle-earth';
    for (var i in fellowship.lands){
      var newElement = document.createElement('article');
      newElement.id=fellowship.lands[i];
      var newH1 = document.createElement('h1');
      var newTextNode = document.createTextNode(fellowship.lands[i]);
      newH1.appendChild(newTextNode);
      newElement.appendChild(newH1);
      newSection.appendChild(newElement);
    }
    document.body.appendChild(newSection);
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
  },
  makeHobbits: function(hobbits) {
    var ul = document.createElement('ul');
    for (var i in fellowship.hobbits){
      var newElement=document.createElement('li');
      newElement.id=fellowship.hobbits[i];
      newElement.class='hobbit';
      var text = document.createTextNode(fellowship.hobbits[i]);
      newElement.appendChild(text);
      ul.appendChild(newElement);
    }
    document.body.appendChild(ul);
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
  },
  keepItSecretKeepItSafe: function() {
    var div = document.createElement('div');
    div.id='the-ring';
    var frodo = document.getElementById('Frodo Baggins');
    frodo.appendChild(div);
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
  },
  makeBuddies: function(buddies) {
    var aside = document.createElement('aside');
    var ul = document.createElement('ul');
    for (var i in fellowship.buddies){
      var li = document.createElement('li');
      var text = document.createTextNode(fellowship.buddies[i]);
      li.id=fellowship.buddies[i];
      li.appendChild(text);
      ul.appendChild(li);
    }
    aside.appendChild(ul);
    var rivendell = document.getElementById('Rivendell');
    rivendell.parentNode.insertBefore(aside, rivendell);
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
  },
  beautifulStranger: function() {
    var strider = document.getElementById('Strider');
    strider.textContent='Aragorn';
    // change the buddy 'Strider' textnode to "Aragorn"
  },
  forgeTheFellowShip: function() {
    var rivendell = document.getElementById('Rivendell');
    var hobbits = document.getElementById('Frodo Baggins').parentNode;
    var buddies = document.getElementById('Gimli').parentNode;
    rivendell.appendChild(hobbits);
    rivendell.appendChild(buddies);
    var div = document.createElement('div');
    div.id='the-fellowship';
    rivendell.appendChild(div);
    var theFellowship = document.getElementById('the-fellowship');
    for (var i in fellowship.buddies){
      theFellowship.appendChild(fellowship.buddies[i]);
      alert(fellowship.buddies[i] + ' has joined your party!');
    }
    for (var a in fellowship.hobbits){
      theFellowship.appendChild(fellowship.hobbits[a]);
      alert(fellowship.hobbits[i] + ' has joined your party!');
    }
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  }
};
