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
  },
  makeHobbits: function(hobbits) {
    //prints list of all of the hobbits to the console
    console.log(hobbits);

    //Setting up variables
    //Creating a UL list, naming it hobbitsList
    var hobbitsList = document.createElement("ul");

    //For every hobbit, create a list item with their name
    for(var i=0; i<hobbits.length; i++){
      //create a list item "hobbitsListItem" inside the <ul> list "hobbitsList"
      var hobbitsListItem = document.createElement("li");
      //Creating an individualized class name
      var hobbitsText = hobbitsListItem.textContent
      hobbitsText = fellowship.hobbits[i];
      //creating the textContent
      hobbitsListItem.textContent = fellowship.hobbits[i];
      //appending stuff
      hobbitsListItem.setAttribute("class", hobbitsText);
      hobbitsList.appendChild(hobbitsListItem);
    }
    document.body.appendChild(hobbitsList);
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
  },
  keepItSecretKeepItSafe: function() {
    var theRing = document.getElementById("middle_earth").classList.add("the-ring") ;
    document.getElementsByClassName("Frodo Baggins")
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
