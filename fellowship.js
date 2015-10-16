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

    //create middle earth, set id, add lands to it
    var middleEarth = document.createElement("section");
    middleEarth.setAttribute("id", "middle-earth");
    for (var i=0; i < fellowship.lands.length; i++){
      var newTag = document.createElement("article");
      newTag.setAttribute("id", lands[i]);
      var newLand = document.createElement("h1");
      newLand.textContent = fellowship.lands[i];
      newTag.appendChild(newLand);
      middleEarth.appendChild(newTag);
    }
    //attach middle earth
    document.body.appendChild(middleEarth);

  },
  makeHobbits: function(hobbits) {
    //create and add hobbits to ul
    var hobbitList = document.createElement("ul");
    hobbitList.setAttribute("id", "hobbit-list");
    for (var i=0; i<fellowship.hobbits.length; i++){
      var newHobbit = document.createElement("li");
      newHobbit.textContent = hobbits[i];
      newHobbit.setAttribute("id",hobbits[i]);
      hobbitList.appendChild(newHobbit);
    }
    //append hobbits to shire
    document.getElementById("middle-earth").firstChild.appendChild(hobbitList);
  },
  keepItSecretKeepItSafe: function() {
    //add ring as child of frodo li
    var ring = document.createElement("div");
    ring.setAttribute("id", "the-ring");
    document.getElementById("Frodo Baggins").appendChild(ring);
  },
  makeBuddies: function(buddies) {
    //create and add buddies to ul
    var newAside = document.createElement("aside");
    newAside.setAttribute("id", "bud-aside");
    var buddyList = document.createElement("ul");
    buddyList.setAttribute("id","buddy-list");
    for (var i = 0; i < fellowship.buddies.length; i++){
        var newLi = document.createElement("li");
        newLi.textContent = fellowship.buddies[i];
        newLi.setAttribute("id", buddies[i]);
        buddyList.appendChild(newLi);
    }
    newAside.appendChild(buddyList);
    var middleEarth = document.getElementById("middle-earth");
    //insert buddies before rivendell
    middleEarth.insertBefore(newAside, middleEarth.childNodes[1] );
  },
  beautifulStranger: function() {
    //change buddy strider's text content
    document.getElementById("Strider").textContent = "Aragorn";
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party

    //remove hobbits from shire
    var shire = document.getElementById("The Shire");
    var hobbitList = document.getElementById("hobbit-list");
    shire.removeChild(hobbitList);
    //remove buddies from middle earth
    var buddyLocation = document.getElementById("bud-aside");
    var buddyList = document.getElementById("buddy-list");
    buddyLocation.removeChild(buddyList);
    //add hobbits and buddies to rivendell
    var rivendell = document.getElementById("Rivendell");
    rivendell.appendChild(hobbitList);
    rivendell.appendChild(buddyList);
    //create the fellowship
    var theFellowship = document.createElement("div");
    theFellowship.setAttribute("id", "the-fellowship");

    //add hobbits to fellowship
    while (hobbitList.childElementCount != 0){
      var hobbit = hobbitList.removeChild(hobbitList.firstChild);
      var hobbitName = hobbit.textContent;
      theFellowship.appendChild(hobbit);
      alert(hobbitName + " has joined the fellowship");
    }

    console.log(buddyList.childElementCount)
    //add buddies to fellowship
    while (buddyList.childElementCount != 0){
      var buddy = buddyList.removeChild(buddyList.firstChild);
      var buddyName = buddy.textContent;
      theFellowship.appendChild(buddy);
      alert(buddyName + " has joined the fellowship");
    }


  }
}

//run this function to test
function main(){
  fellowship.makeMiddleEarth(fellowship.lands);
  var userPrompt= prompt("type c to execute next function");
  if (userPrompt == "c"){
    fellowship.makeHobbits(fellowship.hobbits);
    userPrompt= prompt("type c to execute next function");
    if (userPrompt == "c") {
      fellowship.keepItSecretKeepItSafe();
      userPrompt= prompt("type c to execute next function");
      if (userPrompt == "c") {
        fellowship.makeBuddies(fellowship.buddies);
        userPrompt= prompt("type c to execute next function");
        if (userPrompt == "c") {
          fellowship.beautifulStranger();
          userPrompt= prompt("type c to execute next function");
          if (userPrompt == "c") {
            fellowship.forgeTheFellowShip();
          }
        }

      }

    }

  }
}
