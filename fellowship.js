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
    //prints list of all of the lands to the console
    console.log(lands);

    //Meat of the function -- for every land, creates a h1 element
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
    hobbitsList.setAttribute("class", "hobbits");
    //For every hobbit, create a list item with their name
    for(var i=0; i<hobbits.length; i++){
      //create a list item "hobbitsListItem" inside the <ul> list "hobbitsList"
      var hobbitsListItem = document.createElement("li");
      //Creating an individualized class name
      var hobbitsText = hobbitsListItem.textContent;
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
    // grab list item Frodo from makeHobbits
    var frodoClass = document.getElementsByClassName("Frodo Baggins");
    console.log(frodoClass);
    if (frodoClass.length > 0){

      // create div element with id "the-ring"
      var theRingDiv = document.createElement("div");
      theRingDiv.setAttribute("id", "the-ring");
      //Create text "THE RING" and append text to div
      var theRingText = document.createTextNode("THE RING");
      theRingDiv.appendChild(theRingText);
      //For the first instance of Frodo, attatch div the-ring
      frodoClass[0].appendChild(theRingDiv);
    }
    else {
      var noHobbitsText = document.createTextNode("No heroes are available to keep it secret or safe");
      var noHobbitsElement = document.createElement("h1");
      noHobbitsElement.appendChild(noHobbitsText);
      document.body.appendChild(noHobbitsElement);
    }
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    // var frodoClass = document.getElementsByClassName("Frodo Baggins");
    // console.log(frodoClass);
    // if (frodoClass.length > 0){
    //
    //   // create div element with id "the-ring"
    //   var theRingDiv = document.createElement("div");
    //   theRingDiv.setAttribute("id", "the-ring");
    //   //Create text "THE RING" and append text to div
    //   var theRingText = document.createTextNode("THE RING");
    //   theRingDiv.appendChild(theRingText);
    //   //For the first instance of Frodo, attatch div the-ring
    //   frodoClass[0].appendChild(theRingDiv);
    // }
    // else {
    //   var noHobbitsText = document.createTextNode("No heroes are available to keep it secret or safe");
    //   var noHobbitsElement = document.createElement("h1");
    //   noHobbitsElement.appendChild(noHobbitsText);
    //   document.body.appendChild(noHobbitsElement);
    // }




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
