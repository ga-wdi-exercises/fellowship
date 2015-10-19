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
  //     // create a section tag with an id of middle-earth
  //     // add each land as an article tag
  //     // inside each article tag include an h1 with the name of the land
  //     // append middle-earth to your document body
makeMiddleEarth: function(lands){
  var mid = document.createElement('section');
  mid.setAttribute('class','test');
  mid.setAttribute('id','middle-earth');
  for (var i = 0; i < lands.length; i+=1){
    var art = document.createElement('article');
    var land = document.createElement('h1');
    art.setAttribute('id',lands[i]);
    land.setAttribute('class',lands[i]);
    land.innerHTML=lands[i];
    art.appendChild(land);
    mid.appendChild(art);
  }
  document.body.appendChild(mid);
},

////     // display an unordered list of hobbits in the shire
//     // give each hobbit a class of hobbit
  makeHobbits: function(hobbits){
    var liveInShire = document.createElement('ul');
    for (var i = 0; i < hobbits.length; i++){
      var newHobbit = document.createElement('li');
      newHobbit.setAttribute('class','hobbit');
      liveInShire.appendChild(newHobbit);
      var resident = document.createTextNode(hobbits[i]);
      newHobbit.appendChild(resident);
    }
    var locateShire = document.getElementById('The Shire');
    locateShire.appendChild(liveInShire);
  },

// create a div with an id of 'the-ring'
// add the ring as a child of Frodo
  keepItSecretKeepItSafe: function() {
    var ring = document.createElement('div');
    ring.setAttribute('id','ring');
    var fro = document.getElementsByTagName('li')[0];
    fro.appendChild(ring);
  },

  // create an aside tag
  // display an unordered list of buddies in the aside
  // insert your aside before rivendell
  makeBuddies: function(buddies) {
    var buds = document.createElement('aside');
    var budList = document.createElement('ul');
    buds.appendChild(budList);
    for (var i = 0; i < buddies.length; i++){
      var newBuddy = document.createElement('li');
      budList.appendChild(newBuddy);
      var friend = document.createTextNode(buddies[i]);
      newBuddy.appendChild(friend);
    }
    var locateShire = document.getElementById('The Shire');
    locateShire.appendChild(budList);
  },

//     // change the buddy 'Strider' textnode to "Aragorn"
  beautifulStranger: function() {
    var beau = document.getElementsByTagName('li')[7];
    beau.innerHTML = 'Aragorn';
  },

  // move the hobbits and the buddies to Rivendell
  // create a new div called 'the-fellowship'
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  forgeTheFellowShip: function() {
    var firstList = document.getElementsByTagName('ul')[0];
    var secondList = document.getElementsByTagName('ul')[1];
    var partyGoers = document.getElementsByTagName('li');
    var locateRivendell = document.getElementById('Rivendell');
    locateRivendell.appendChild(firstList);
    locateRivendell.appendChild(secondList);
    var fellow = document.createElement('div');
    fellow.setAttribute('id','fellowship');
    locateRivendell.appendChild(fellow);
    for (var i = 0; i < partyGoers.length; i++){
      var joiningHobbit = partyGoers[i];
      alert(partyGoers[i].textContent + ' has joined the party. Cheers!');
    }
  }
};
fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies(fellowship.buddies);
fellowship.beautifulStranger();
fellowship.forgeTheFellowShip();
