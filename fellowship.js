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
      //get the text of every land
      var fellowshipLand = fellowship.lands[i];
      //create an h1 element and an id for every land
      var landsNode = document.createElement("h1");
      landsNode.setAttribute("id", fellowshipLand);
      //Create text node and append to h1 element
      var landsTextNode = document.createTextNode(fellowshipLand);
      landsNode.appendChild(landsTextNode);
      //Append the h1 element to the id middle_earth in the document
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
    var rivendellID = document.getElementById("Rivendell");
    console.log(rivendellID);
    if (rivendellID){
      // create aside element called buddiesAside with class "buddies"
      var buddiesAside = document.createElement("aside");
      buddiesAside.setAttribute("class", "buddies_aside");
      // create ol element called buddiesAsideOL with class "buddiesList"
      var buddiesAsideOL = document.createElement("ul");
      buddiesAsideOL.setAttribute("class", "buddiesList");

      for(var i=0; i<buddies.length; i++){
        //create a list item "buddiesListItem" with an id of currentBuddie
        var buddiesListItem = document.createElement("li");
        //Create text
        var buddiesTextItem = buddiesListItem.textContent;
        buddiesListItem.textContent = fellowship.buddies[i];
        //set id of listItem to currentBuddie
        buddiesListItem.setAttribute("id", buddiesListItem.textContent);
        //append text to list item and then to list
        buddiesAsideOL.appendChild(buddiesListItem);
      }
      //append ol to buddiesAside
      buddiesAside.appendChild(buddiesAsideOL);
      // buddiesAside.appendChild("buddiesAsideOL");
      rivendellID.appendChild(buddiesAside);
    }
    else {
      var noBuddiesText = document.createTextNode("The world does not exsist, so no buddies can be made");
      var noBuddiesElement = document.createElement("h1");
      noBuddiesElement.appendChild(noBuddiesText);
      document.body.appendChild(noBuddiesElement);
    }
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    //Is Strider ID present on the page?
    var striderID = document.getElementById("Strider");
    console.log(striderID);
    //Is Aaragon ID present on the page?
    var aragornID = document.getElementById("Aragorn");
    console.log(aragornID);
    if (striderID){
      striderID.textContent = "Aragorn";
      striderID.setAttribute("id","Aragorn");
    }
    else if(aragornID) {
      var aragornText = document.createTextNode("Your beautiful stanger has been revealed.");
      var aragornElement = document.createElement("h1");
      aragornElement.appendChild(aragornText);
      document.body.appendChild(aragornElement);
    }
    else {
      var noBuddiesText = document.createTextNode("No buddies are found, so no beutiful strangers can be revealed.");
      var noBuddiesElement = document.createElement("h1");
      noBuddiesElement.appendChild(noBuddiesText);
      document.body.appendChild(noBuddiesElement);
    }
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  }
};
