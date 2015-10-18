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
  var mid=document.createElement('section');
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
  }
};
fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);

  //   }

  // },
//     // display an unordered list of hobbits in the shire
//     // give each hobbit a class of hobbit
//   },
//   keepItSecretKeepItSafe: function() {
//     // create a div with an id of 'the-ring'
//     // add the ring as a child of Frodo
//   },
//   makeBuddies: function(buddies) {
//     // create an aside tag
//     // display an unordered list of buddies in the aside
//     // insert your aside before rivendell
//   },
//   beautifulStranger: function() {
//     // change the buddy 'Strider' textnode to "Aragorn"
//   },
//   forgeTheFellowShip: function() {
//     // move the hobbits and the buddies to Rivendell
//     // create a new div called 'the-fellowship'
//     // add each hobbit and buddy one at a time to 'the-fellowship'
//     // after each character is added make an alert that they have joined your party
//   }
// }
