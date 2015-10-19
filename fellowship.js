// Dramatis Personae

var  fellowship = {
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
  ]
}


  function makeMiddleEarth(fellowship) {
    console.log(fellowship.lands)
    // create a section tag with an id of middle-earth
    var middleEarth = document.createElement("section");
    middleEarth.id = "middle-earth"; //I had to get this from the solution
    for (var i = 0; i < fellowship.lands.length; i++) {
    // add each land as an article tag
      var articleTag = document.createElement('article');
    // inside each article tag include an h1 with the name of the land
      var h1Tag = document.createElement('h1');
    // inside each article tag include an h1 with the name of the land
      h1Tag.textContent = fellowship.lands[i];
    // append middle-earth to your document body
      articleTag.appendChild(h1Tag);
      middleEarth.appendChild(articleTag);
    }
    document.body.appendChild(middleEarth);
}

  function makeHobbits(fellowship) {
    var uList = document.createElement('ul');
    // display an unordered list of hobbits in the shire
    for (var i = 0; i < fellowship.hobbits.length; i++) {
      var listItem = document.createElement('li');
      // give each hobbit a class of hobbit
      listItem.className = "hobbit";
      listItem.textContent = fellowship.hobbits[i];
      uList.appendChild(listItem);
    }
    document.getElementById('middle-earth').firstChild.appendChild(uList);

  }

  function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    var theRing = document.createElement('div');
    theRing.id = "the-ring";
    // add the ring as a child of Frodo
    document.getElementsByClassName('hobbit')[0].appendChild(theRing);

  }


  function makeBuddies(fellowship) {
    // create an aside tag
    var buddies = document.createElement('aside');
    // display an unordered list of buddies in the aside
    var uList = document.createElement('ul');

    for (var i = 0; i < fellowship.buddies.length; i++) {
      var listItem = document.createElement('li');
      listItem.className = 'buddy';
      listItem.textContent = fellowship.buddies[i];
      uList.appendChild(listItem);
    }
    buddies.appendChild(uList);
    // insert your aside before rivendell
    var landsOnPage = document.getElementsByTagName('article');
    var rivendell = landsOnPage[1];
    document.getElementById('middle-earth').insertBefore(buddies,rivendell);
  }

  function beautifulStranger() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var buddies = document.getElementsByClassName('buddy');
    buddies[3].textContent = "Aragorn";

  }

  function forgeTheFellowShip(fellowship) {
    // move the hobbits and the buddies to Rivendell
    var middleEarth = document.body.childNodes[4].childNodes;
    var hobbitsChild = middleEarth[0];
    var characters = document.getElementsByTagName('ul');
    var hobbitParent = characters[0].parentNode;
    var landsOnPage = document.getElementsByTagName('article');
    var rivendell = landsOnPage[1];
    var hobbits = hobbitParent.removeChild(characters[0]);
    rivendell.appendChild(hobbits);
    // var middleEarth = document.body.childNodes[5].childNodes;
    var buddies = document.getElementsByTagName('aside');
    rivendell.appendChild(buddies[0]);
    // create a new div called 'the-fellowship'
    var theFellowship = document.createElement('div');
    theFellowship.id = "the-fellowship";
    theFellowship.appendChild(document.createElement('ul'));

    // add each hobbit and buddy one at a time to 'the-fellowship'
    for (i = 0; i < fellowship.hobbits.length; i++) {
      var hobbitName = fellowship.hobbits[i];
      theFellowship.appendChild(characters[0].firstChild);
      // after each character is added make an alert that they have joined your party
      alert("Hooray! " + hobbitName + " has joined your party!");
    }

    for (i = 0; i < fellowship.buddies.length; i++) {
      var buddyName = fellowship.buddies[i];
      theFellowship.appendChild(characters[1].firstChild);
      alert("Hooray! " + buddyName + " has joined your party!");
    }
    console.log(theFellowship);
  }

  function theFellowshipOfTheRing(fellowship) {
    makeMiddleEarth(fellowship);
    console.log("These are the lands of Middle Earth.");

    makeHobbits(fellowship);
    console.log("These are the hobbits from The Shire.");

    keepItSecretKeepItSafe();
    console.log("Frodo must keep the ring secret, and safe.")

    makeBuddies(fellowship);
    console.log("These are the friends who will help the hobbits on their mission");

    beautifulStranger();
    console.log("It is revealed that Strider is actually Aragorn son of Arathorn, called Elessar, the Elfstone, Dúnadain, the Rightful King of Gondor. He has a broken sword of legend that must be reforged.");

    forgeTheFellowShip(fellowship);
    console.log("The Fellowship is formed!")
  }

  console.log("Call theFellowshipOfTheRing(fellowship) to watch the magic happen.");
// }
