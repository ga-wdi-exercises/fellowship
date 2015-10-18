// Dramatis Personae
// var yesThisISAnArray={
//   keepIt: function() {
//     var t = document.createTextNode("Hello World");
//     document.body.appendChild(t);
//     var node = document.createElement("LI");
//     var textnode = document.createTextNode("Water");
//     node.appendChild(textnode);
//     document.getElementById("middle_earth").appendChild(node);
//   }
// }


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
    console.log(lands);
    var nodeTitle = document.createTextNode("We're making middle earth ya hobbits");
    document.getElementById("middle_earth").appendChild(nodeTitle);
    for(var i=0; i<fellowship.lands.length; i++){
      var fellowshipLand = fellowship.lands[i];
      var landsNode = document.createElement("h1");
      var landsTextNode = document.createTextNode(fellowshipLand);
      landsNode.appendChild(landsTextNode);
      document.getElementById("middle_earth").appendChild(landsNode);
    }

    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
  },
  makeBuddies: function(buddies) {

    // vvvv code below is the code I copied when Josh was asking Adrian questions
    //   var newAside = document.createElement("aside");
    //   newAside.innerHTML = "<ul>" + "</ul>"
    //   for (i=0; i< buddies.lenght; i++){
    //   var newString = document.createElement("li");
    //   newstring.innerHTML = buddies[i];
    //   newAside.innerHTML.
    // }
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
};
