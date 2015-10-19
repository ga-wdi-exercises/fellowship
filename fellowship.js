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
    var newSection = document.createElement('section')
    newSection.setAttribute('id', 'middle-earth')
    // add each land as an article tag
      // inside each article tag include an h1 with the name of the land
    for (var i = 0; i < fellowship.lands.length; i++) {
        var newArticle = document.createElement('article');
        newSection.appendChild(newArticle);
        var newHeader = document.createElement('h1');
        newArticle.appendChild(newHeader);
        newHeader.innerHTML = fellowship.lands[i];
    }
    // append middle-earth to your document body
    document.body.appendChild(newSection);

  },
  makeHobbits: function(hobbits) {
    console.log(hobbits);
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    var newList = document.createElement('ul');
    for (var i = 0; i < fellowship.hobbits.length; i++) {
        console.log(fellowship.hobbits[i]);
        var listItem = document.createElement('li');
        listItem.setAttribute('class', 'hobbit');
        newList.appendChild(listItem);
        listItem.innerHTML = fellowship.hobbits[i];
    }
    document.body.appendChild(newList);
  },

  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'the-ring');
    var frodo = document.getElementsByTagName('li')[0];
    frodo.appendChild(newDiv);
  },

  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    var newAside = document.createElement('aside');
    newAside.setAttribute('id', 'buddies');
    var rivendell = document.getElementsByTagName('article')[1];
    var middleEarth = document.getElementById('middle-earth');
    middleEarth.insertBefore(newAside, rivendell);
    var  buddiesList = document.createElement('ul');
    buddiesList.setAttribute('id', 'buddies-list');
    newAside.appendChild(buddiesList);
    for (var i = 0; i <fellowship.buddies.length; i++) {
      var buddiesItems = document.createElement('li');
      buddiesList.appendChild(buddiesItems);
      buddiesItems.innerHTML = fellowship.buddies[i];
    }
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var Strider = document.getElementById('buddies-list').childNodes[3];
    Strider.innerHTML = 'Aragorn';
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var characters = document.getElementsByTagName('li');
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'the-fellowship');
    var rivendell = document.getElementsByTagName('article')[1];
    rivendell.appendChild(newDiv);
    var fellowshipList = document.createElement('ul')
    newDiv.appendChild(fellowshipList);
    for (var i = 0; i < characters.length; i++) {
      console.log(characters[i]);
      //console.log(characters[i]) added to debug issue with characters. <li>'Gimli'</li> is operated on three seperate times throughout the loop, while 'Legolas' and 'Aragorn' are not touched.
      fellowshipList.appendChild(characters[i]);
      alert('A new member has joined the Fellowship!');
    }
  }

};

////
fellowship.makeMiddleEarth();
fellowship.makeHobbits();
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies();
fellowship.beautifulStranger();
