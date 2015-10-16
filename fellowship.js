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
    // create a section tag with an id of middle-earth
    var newElement = document.createElement('section')
    newElement.setAttribute('id', 'middle-earth')
    // add each land as an article tag
    for( i=0;i<fellowship.lands.length;i++){
      var subElement = document.createElement('article');
      subElement.setAttribute('H1',fellowship.lands[i]);
      var landH1 = document.createElement('H1');
      var landTextNode = document.createTextNode(fellowship.lands[i]);
      landH1.appendChild(landTextNode);
      subElement.appendChild(landH1);
      newElement.appendChild(subElement);
    }
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    document.body.appendChild(newElement)
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    var hobbitElement = document.createElement("UL")
    // give each hobbit a class of hobbit
    for(i=0;i<fellowship.hobbits.length;i++){
    var singleHobbit = document.createElement("LI")
    singleHobbit.setAttribute('class', 'hobbit');
    var singleHobbitTextNode = document.createTextNode(fellowship.hobbits[i]);
    singleHobbit.setAttribute('value', fellowship.hobbits[i]);
    singleHobbit.appendChild(singleHobbitTextNode);
    hobbitElement.appendChild(singleHobbit)
  }
  var addHobbits = document.querySelector('article[h1="The Shire"]');
  addHobbits.appendChild(hobbitElement)
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var ringElement = document.createElement('div')
    ringElement.setAttribute('class','the-ring');
    ringElement.setAttribute('id','the-ring');
    // add the ring as a child of Frodo
    document.querySelector('li[value="Frodo Baggins"]').appendChild(ringElement)
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    var buddyElement = document.createElement('aside')
    // display an unordered list of buddies in the aside
    var buddyElementList = document.createElement("UL")
    for(i=0;i<fellowship.buddies.length;i++) {
      var singleBuddy = document.createElement("LI");
      var singleBuddyTextNode = document.createTextNode(fellowship.buddies[i])
      singleBuddy.appendChild(singleBuddyTextNode);
      singleBuddy.setAttribute('value',fellowship.buddies[i]);
      buddyElementList.appendChild(singleBuddy);
    }
    buddyElement.appendChild(buddyElementList);
    // insert your aside before rivendell
    var locationForInsert =document.getElementById('middle-earth')
    var buddyInsert = document.querySelector('article[H1="Rivendell"]');
    locationForInsert.insertBefore(buddyElement,buddyInsert)
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var striderInsert = document.querySelector('LI[value="Strider"]')
    var striderInsertTextNode = document.createTextNode("Aragorn")
    striderInsert.replaceChild(striderInsertTextNode,striderInsert.childNodes[0])

  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    var theTrip = document.querySelectorAll("UL")
    var theDestination = document.querySelector('article[H1="Rivendell"]')
    for(i=0;i<theTrip.length;i++){
      theDestination.appendChild(theTrip[i]);
    }
    // create a new div called 'the-fellowship'
    var theFellowship = document.createElement('div');
    var theFellowshipTextNode = document.createTextNode("The Fellowship:")
    theFellowship.appendChild(theFellowshipTextNode);
    theFellowship.setAttribute('class','the-fellowship');
    theFellowship.setAttribute('id','the-fellowship');
    document.body.appendChild(theFellowship);
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var theTrip = document.querySelectorAll("UL")
      for (i=0 ; i<theTrip.length ; i++) {
        for (j=0; j<theTrip[i].childNodes.length ; j++) {
          var theFellowship = document.getElementById('the-fellowship');
          var theHero = theTrip[i].childNodes[j];
          var theHeroName = theHero.innerText;
          var clone = theHero.cloneNode(true);
          theFellowship.appendChild(clone);
          alert(theHeroName + " has joined the party!")
        }
      }
    }
}
fellowship.makeMiddleEarth()
fellowship.makeHobbits()
fellowship.keepItSecretKeepItSafe()
fellowship.makeBuddies()
