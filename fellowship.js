// Dramatis Personae
// var fellowship = {
  var hobbits = [
    "Frodo Baggins",
    "Samwise 'Sam' Gamgee",
    "Meriadoc \"Merry\" Brandybuck",
    "Peregrin 'Pippin' Took"
  ];
  var buddies = [
    "Gandalf the Grey",
    "Legolas",
    "Gimli",
    "Strider",
    "Boromir"
  ];
  var lands = ["The Shire", "Rivendell", "Mordor"];

  function makeMiddleEarth(lands) {
    console.log("Middle-Earth");
    var middleEarth = document.createElement("section");
    middleEarth.id = "middle-earth";
    for (i=0; i<lands.length; i++) {
      var aTag = document.createElement("article");
      var hTag = document.createElement("h1");
      hTag.textContent = lands[i];
      aTag.appendChild(hTag);
      middleEarth.appendChild(aTag);
    }
    document.body.appendChild(middleEarth);
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
  }
  makeMiddleEarth(lands);

  function makeHobbits(hobbits) {
    var hobbitList = document.createElement("ul");
    hobbitList.id = "hobbit-list";
    for (i=0; i<hobbits.length; i++){
      var hobbit = document.createElement("li");
      hobbit.textContent = hobbits[i];
      hobbit.className = "hobbit";
      hobbitList.appendChild(hobbit);
    }
    var shire = document.getElementsByTagName("article")[0];
    shire.appendChild(hobbitList);
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
  }
  makeHobbits(hobbits);

  function keepItSecretKeepItSafe() {
      // create a div with an id of 'the-ring'
    var theRing = document.createElement("div");
    theRing.id = "the-ring";
    theRing.textContent = "the-ring";
    // add the ring as a child of Frodo
    var frodo = document.getElementsByClassName("hobbit")[0];
    frodo.appendChild(theRing);

  }
  keepItSecretKeepItSafe();

  function makeBuddies(buddies) {
    // create an aside tag
    var asidetag = document.createElement("aside");
    // display an unordered list of buddies in the aside
    var buddiesList = document.createElement('ul');

    for( i=0; i<buddies.length; i++) {
      var buddy = document.createElement("li");
      buddy.textContent = buddies[i];
      buddy.className = "buddy";
      buddiesList.appendChild(buddy);
    }
    // insert your aside before rivendell
    asidetag.appendChild(buddiesList);
    var rivendell = document.getElementsByTagName("article")[1];
    rivendell.parentNode.insertBefore(asidetag, rivendell);
  }
  makeBuddies(buddies);

  function beautifulStranger() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var buddies = document.getElementsByTagName("aside")[0].getElementsByTagName("li");
    var strider = buddies[3];
    strider.textContent="Aragorn";
  }
  beautifulStranger();

  function forgeTheFellowShip(){
//     // move the hobbits and the buddies to Rivendell
//     // create a new div called 'the-fellowship'
  var fellowship = document.createElement("div");
    fellowship.id = "the-fellowship";
    fellowship.appendChild(document.createElement("ul"));
//     // add each hobbit and buddy one at a time to 'the-fellowship'
  var hobBuds = document.getElementById("hobbit-list");
  var hobsCount = hobBuds.childElementCount;
  for (i=0; i<hobsCount.length; i++) {
    var hobbit = document.hobBuds.childNodes[0];
    fellowship.children[0].appendChild(hobbit);
    alert(hobbit.textContent + " has joined the party");
  }

  var buddies = document.getElementsByTagName('aside')[0].children[0].children;
  var buddyCount = buddies.length;
  for (var j = 0; j < buddyCount; j++) {
    var buddy = buddies[0];
    fellowship.children[0].appendChild(buddy);
    alert(buddy.textContent + " has joined the party");
  }
//     // after each character is added make an alert that they have joined your party
  var rivendell = document.getElementsByTagName('article')[1];
  rivendell.appendChild(fellowship);
}
forgeTheFellowShip();
// }
