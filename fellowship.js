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

// need to revise function syntax for all the pre-written functions
  function makeMiddleEarth(lands) {
    // create a section tag with an id of middle-earth
      // this code creates the section tag and the gives it the "middle-earth" id.
    var middleEarth = document.createElement("section");
    middleEarth.id = "middle-earth";
    // add each land as an article tag
    // this for loop lets me iterate through the different entries in the land array. Needs to come before my variables declaring the article tag and h1 tag (scope issue??)
    for (var i = 0; i < lands.length; i++) {
      var articleTag = document.createElement("article");
    // inside each article tag include an h1 with the name of the land
      var h1Tag = document.createElement("h1");
      h1Tag.innerHTML = lands[i];
      // this code creates the h1 tag within the article tag
      articleTag.appendChild(h1Tag);
      // this code creates the article tag within the middle earth variable.
      middleEarth.appendChild(articleTag);
    }
    // append middle-earth to your document body
    document.body.appendChild(middleEarth);
  }
  makeMiddleEarth(lands);
console.log(lands);

//   makeHobbits: function(hobbits) {
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
}
