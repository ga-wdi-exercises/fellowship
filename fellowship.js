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
      // this code creates the section tag and the gives it the "middle-earth" id.
    var middleEarth = document.createElement("section");
    middleEarth.id = "middle-earth";
    // add each land as an article tag
      // loop through each land
      for (var i = 0; i < lands.length; i++) {
      // create an article tag for each land
        var articleTag = document.createElement("article");
      // Add h1 inside each article
        var h1Tag = document.createElement("h1");
      // change innerHTML of each h1 to be land name
        h1Tag.innerHTML = lands[i];
      // appends h1 to each article
        articleTag.appendChild(h1Tag);
     // append the article to the section with id of middle-earth
        middleEarth.appendChild(articleTag);
      }
    // append middle-earth to your document body
      document.body.appendChild(middleEarth);
    },

  makeHobbits: function(hobbits) {
     // display an unordered list of hobbits in the shire
     // give each hobbit a class of hobbit
    var listHobbits = document.createElement('ul');
    for (var i = 0; i < hobbits.length; i++) {
      var hobbit = document.createElement("li");
      hobbit.innerHTML = hobbits[i];
      hobbit.className = "hobbit";
      listHobbits.appendChild(hobbit)
    }
    var shire = document.getElementbyTagName("article")[0];
    shire.appendChild(listHobbits)
   }

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
}

fellowship.makeMiddleEarth(fellowship.lands);
