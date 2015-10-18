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


  function makeMiddleEarth(lands) {
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

makeMiddleEarth(fellowship);

  function makeHobbits(hobbits) {
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

  makeHobbits(fellowship);

  function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    var theRing = document.createElement('div');
    theRing.id = "the-ring";
    // add the ring as a child of Frodo
    document.getElementsByClassName('hobbit')[0].appendChild(theRing);

  }
  keepItSecretKeepItSafe();


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
  makeBuddies(fellowship);

  function beautifulStranger() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var buddies = document.getElementsByClassName('buddy');
    buddies[3].textContent = "Aragorn";

  }
  beautifulStranger();

  function forgeTheFellowShip() {
    // move the hobbits and the buddies to Rivendell
    var middleEarth = document.body.childNodes[4].childNodes;
    var hobbitsChild = middleEarth[0];

    var buddies = middleEarth.removeChild[1];

    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  }
// }
