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
  makeMiddleEarth: function() {
    console.log(this.lands);
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    for (var i = 0; i < this.lands.length; i++){
      var articleTags = document.createElement("article");
      var h1Tags = document.createElement("h1");
      h1Tags.textContent = this.lands[i];
      articleTags.appendChild(h1Tags);

      var middleEarth = document.getElementById("middle-earth");
      middleEarth.appendChild(articleTags);
    }
      this.makeHobbits();
      this.makeBuddies();
  },
  makeHobbits: function() {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    var theShire = document.getElementsByTagName('article')[0];
    var ulTag = document.createElement('ul');
    for (var i=0; i < this.hobbits.length; i++){
        var liTag = document.createElement('li');
        liTag.setAttribute('class','hobbit');
        liTag.textContent = this.hobbits[i];
        ulTag.appendChild(liTag);
    }
    theShire.appendChild(ulTag);
    this.keepItSecretKeepItSafe();
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
    var frodo = document.getElementsByClassName('hobbit')[0];
    var newDiv = document.createElement('div');
    newDiv.id = 'the-ring';
    frodo.appendChild(newDiv);
  },
  makeBuddies: function() {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    var asideTag = document.createElement('aside');
    var buddiesList = document.createElement('ul');
    for (var i=0; i < this.buddies.length; i++){
      var liTag = document.createElement('li');
      liTag.textContent = this.buddies[i];
      buddiesList.appendChild(liTag);
    }
    var rivendell = document.getElementsByTagName('article')[1];
    asideTag.appendChild(buddiesList);
    rivendell.appendChild(asideTag);
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var aragorn = document.querySelectorAll('aside li')[3];
      aragorn.textContent = "Aragorn";
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var rivendellList = document.querySelector('aside ul');
    // The first move
    var hobbitListElements = document.querySelectorAll('li.hobbit');
    for (var i=0; i<hobbitListElements.length;i++){
      rivendellList.appendChild(hobbitListElements[i]);
    }

    // The Second Move
    var rivendellArticle = document.querySelectorAll('article')[1];
    var newDiv = document.createElement('div');
    var h1Tag = document.createElement('h2');
    var ulTag = document.createElement('ul');
    h1Tag.textContent = 'The Fellowship';
    newDiv.id = 'the-fellowship';
    newDiv.appendChild(h1Tag);
    newDiv.appendChild(ulTag);
    var allCharacters = document.querySelectorAll('li');
    rivendellArticle.appendChild(newDiv);
    for (i=0; i< allCharacters.length; i++){
      var name = allCharacters[i].textContent;
      ulTag.appendChild(allCharacters[i]);
      alert(name + ' has joined your party.');
    }
  }
};
