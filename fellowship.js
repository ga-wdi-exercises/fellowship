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
      var newElement = document.createElement('section')
      newElement.setAttribute('id', 'middle-earth');
      // add each land as an article tag
      for (var i = 0; i <
        fellowship.lands.length; i++) {
        var newArticle = document.createElement('article')
        var h1Tag.textContent = lands[i];
        articleTag.appendChild(h1Tag);
        middleEarth.appendChild(newArticle)
      }
      // inside each article tag include an h1 with the name of the land
      // append middle-earth to your document body
    },
    makeHobbits: function(hobbits) {
      // display an unordered list of hobbits in the shire <need to tell computer to put array of hobbits into unordered list by creating element?
      var hobbitList = document.createElement('ul')
        // give each hobbit a class of hobbit

      for (var i = 0;) i < fellowship.hobbitts.length;
      i++) {
      var hobbitClass = document.createElement('li')
      hobbitClass.className = "hobbit";
      hobbitsList.appendChild(hobbit);
    }

      makeHobbits();
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var ringDiv = document.createElement('div')
    ringDiv.setAttribute('id', 'the-ring');
    // add the ring as a child of Frodo
    document.querySelector('li[Value= "Frodo Baggins"]').appendChild(ringDiv);
  }

keepItSecretKeepItSafe();


makeBuddies: function(buddies) {
  // create an aside tag
  var buddiesTag = document.createElement('aside')
  var buddiesList = document.createElement('ul');
  // display an unordered list of buddies in the aside <so need to assign elements in buddes to an unordered list first? Then can ask list to be displayed
  for (var i = 0; i < buddies.length; i++) {
    var buddy = document.createElement('li');
    buddy.textContent = buddies[i];
    buddiesList.appendChild(buddy);
  }

  buddiesTag.appendChild(buddiesList);
  var rivendellAdd = document.getElementByTagName('article')[1];
  rivendell.parentNode.insertBefore(buddiesTag, rivendell);
}
makeBuddies(buddies);

// insert your aside before rivendell <fellowship.lands

beautifulStranger: function() {
  // change the buddy 'Strider' textnode to "Aragorn" <this seems easy....
  var nameChange = document.getElementById('buddies').firstChild.childNodes[3]; + bud4.textContent = "Aragorn";

}
forgeTheFellowShip: function() {
  // move the hobbits and the buddies to Rivendell
  document.getElementbyID('Rivendell').appendChild(document.getElementById('hobbits'));

  document.getElementById('Rivendell').appendChild(document.getElementById('buddies'));
  // create a new div called 'the-fellowship'

  var newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'the-fellowship');
  // add each hobbit and buddy one at a time to 'the-fellowship'

  +
  for (i = 0; i < fellowship.hobbits.length; i++) {
    +
    var newMember = document.createElement('h1') + newMember.setAttribute('id', fellowship.hobbits[i]); + div.appendChild(newMember); + alert(fellowship.hobbits[i] + ' has joined the fellowship!') +
  }
}
}

// after each character is added make an alert that they have joined your party
