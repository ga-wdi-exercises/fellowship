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
    console.log(fellowship.lands)
      // create a section tag with an id of middle-earth
    var newSection = document.createElement('section');
    newSection.setAttribute('id', 'middle-earth');
    document.body.appendChild(newSection);
    // add each land as an article tag
    for (var i = 0; i < fellowship.lands.length; i++) {
      var article = document.createElement('article');
      article.setAttribute('id', fellowship.lands[i]);
      document.getElementById('middle-earth').appendChild(article);
    }
    // inside each article tag include an h1 with the name of the land
    for (var i = 0; i < fellowship.lands.length; i++) {
      var head = document.createElement('h1');
      head.textContent = fellowship.lands[i];
      document.getElementById(fellowship.lands[i]).appendChild(head);
    }
    // append middle-earth to your document body
    //I reordered these steps. Middle-earth appended earlier.
  },
  makeHobbits: function() {
    // display an unordered list of hobbits in the shire
    var list = document.createElement('ul')
    list.setAttribute('id', 'hobbits')
    for (i = 0; i < fellowship.hobbits.length; i++) {
      var hob = document.createElement('li');
      hob.textContent = fellowship.hobbits[i];
      list.appendChild(hob);
    }
    document.getElementById('The Shire').appendChild(list);

    // give each hobbit a class of hobbit
    for (i = 0; i < fellowship.hobbits.length; i++) {
      var hob = document.createElement('div')
      hob.setAttribute('class', fellowship.hobbits[i])
    }
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var ring = document.createElement('div');
    ring.setAttribute('id', 'ring');
    // add the ring as a child of Frodo
    var frodo = document.getElementById('The Shire').childNodes[1].firstChild
    frodo.appendChild(ring);
  },
  makeBuddies: function() {
    // create an aside tag
    var aside = document.createElement('aside')
    aside.setAttribute('id', 'buddies')
      // display an unordered list of buddies in the aside
    var list = document.createElement('ul');
    aside.appendChild(list);
    for (i = 0; i < fellowship.buddies.length; i++) {
      var item = document.createElement('li');
      item.textContent = fellowship.buddies[i];
      list.appendChild(item);
    }
    // insert your aside before rivendell
    document.getElementById('middle-earth').insertBefore(aside, document.getElementById('Rivendell'));
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var bud4 = document.getElementById('buddies').firstChild.childNodes[3];
    bud4.textContent = "Aragorn";
  },

  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    document.getElementById('Rivendell').appendChild(document.getElementById('hobbits'));
    document.getElementById('Rivendell').appendChild(document.getElementById('buddies'));
    //create a new div called 'the-fellowship'
    var div = document.createElement('div');
    div.setAttribute('id', 'the-fellowship');
    //add each hobbit and buddy one at a time to 'the-fellowship'
    //after each character is added make an alert that they have joined your party
    for (i = 0; i < fellowship.buddies.length; i++) {
      var member = document.createElement('h1')
      member.setAttribute('id', fellowship.buddies[i]);
      div.appendChild(member);
      alert(fellowship.buddies[i] + ' has joined the fellowship.')
    }
    for (i = 0; i < fellowship.hobbits.length; i++) {
      var member = document.createElement('h1')
      member.setAttribute('id', fellowship.hobbits[i]);
      div.appendChild(member);
      alert(fellowship.hobbits[i] + ' has joined the fellowship.')
    }
  }
}
