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
      var newSection = document.createElement('section');
      newSection.setAttribute('id','middle-earth');
    // add each land as an article tag
      for (i=0; i<fellowship.lands.length; i++) {
        console.log(fellowship.lands[i]);
        var article = document.createElement('article');
    // inside each article tag include an h1 with the name of the land
      var title= document.createTextNode(fellowship.lands[i]);
      document.title.setAttribute('h1', 'title');
    // append middle-earth to your document body
      document.body.setAttribute('middle-earth');
  }
},
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
      for (i=1; i<fellowship.hobbits.length; i++) {

      // let's come back to this part!
      // ?? document.body.getElementsByTagName("a")[0]
      //
      console.log(fellowship.hobbits[i].lands[0]);

  }
    // give each hobbit a class of hobbit
      var hobbit = document.createElement('hobbit');
      for (j=1; j<fellowship.hobbits.length; j++) {
        document.fellowship.hobbits.setAttribute(hobbit);
      }
    },

  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
      var div = document.createElement('div');
    div.SetAttribute('id','the-ring');
    // add the ring as a child of Frodo
      frodo.appendChild(the-ring);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
      var aside = document.createElement('aside');
    // display an unordered list of buddies in the aside
      for (i=0; i<fellowship.buddies.length; i++);
      console.log(fellowship.buddies.getElementsByTagName(aside));
    // insert your aside before rivendell
      fellowship.lands.insertBefore(aside, rivendell);
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
      fellowship.buddies[3].innerHTML='Aragorn';
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
        //?? document.getElementby
    // create a new div called 'the-fellowship'
      var theFellowship=document.createElement('div');
      theFellowship.SetAttribute('the-fellowship');
    // add each hobbit and buddy one at a time to 'the-fellowship'
    for (i=0; i<fellowship.hobbit[i].rivendell.length; i++) {
      get.appendChild
    }
    // after each character is added make an alert that they have joined your party
    console.log()
  }
}
