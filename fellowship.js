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
makeMiddleEarth: function(lands){
  console.log(lands);
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

//     // create a section tag with an id of middle-earth
//     // add each land as an article tag
//     // inside each article tag include an h1 with the name of the land
//     // append middle-earth to your document body
//
  makeHobbits: function(hobbits){
    console.log(hobbits);
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


//     // display an unordered list of hobbits in the shire
//     // give each hobbit a class of hobbit

  keepItSecretKeepItSafe: function() {
    console.log('ring');
    var ring = document.createElement('div');
    ring.setAttribute('id','ring');
    var fro = document.getElementsByTagName('li')[0];
    fro.appendChild(ring);
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
  },

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
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
  },

  beautifulStranger: function() {
    var beau = document.getElementsByTagName('li')[7];
    beau.innerHTML = 'Aragorn';
//     // change the buddy 'Strider' textnode to "Aragorn"
  },
};
fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies(fellowship.buddies);
fellowship.beautifulStranger();
//   forgeTheFellowShip: function() {
//     // move the hobbits and the buddies to Rivendell
//     // create a new div called 'the-fellowship'
//     // add each hobbit and buddy one at a time to 'the-fellowship'
//     // after each character is added make an alert that they have joined your party
//   }
// }
