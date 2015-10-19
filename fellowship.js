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
    var newSection = document.createElement('section');
    newSection.setAttribute("id","middle-earth");
    // add each land as an article tag
    for(i = 0; i < fellowship.lands.length; i++){
      var newArticle = document.createElement('article');
      var newH1 = document.createElement('h1');
      newH1.textContent = fellowship.lands[i];
      newArticle.appendChild(newH1);
      newSection.appendChild(newArticle);
    }
    document.body.appendChild(newSection);

    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    var newUl = document.createElement('ul');

    for(i = 0; i < fellowship.hobbits.length; i++) {
      var newLi = document.createElement('li');
      newLi.setAttribute('class', 'hobbit');
      newLi.textContent = fellowship.hobbits[i];
      newUl.appendChild(newLi);
    }

    var shire = document.getElementsByTagName('article')[0]
    shire.appendChild(newUl);

  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'the ring');
    var frodo = document.getElementsByTagName('li')[0];
    frodo.appendChild(newDiv);


  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    var newAside = document.createElement('aside');
    var newerUl = document.createElement('ul');
    for(i = 0; i < fellowship.buddies.length; i++) {
      newerLi = document.createElement('li');
      newerLi.textContent = fellowship.buddies[i];
      newerUl.appendChild(newerLi);
    }
    newAside.appendChild(newerUl);
    var rivendell = document.getElementsByTagName('h1')[1];
    rivendell.parentNode.insertBefore(newAside, rivendell);
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var aragorn = document.getElementsByTagName('aside')[0].getElementsByTagName('li')[3]
    aragorn.textContent = 'Aragorn';

  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var the_fellowship = document.createElement('div');
    the_fellowship.setAttribute('id', 'the-fellowship');
    // var fellowshipList = document.createElement('ul');
    // the_fellowship.appendChild(fellowshipList);
    var fellowshipList = the_fellowship.appendChild(document.createElement('ul'));

    var hobbits_list = document.getElementsByTagName('ul')[0]
    for(i = 0; i < fellowship.hobbits.length; i++) {
      var hobbitses = hobbits_list.childNodes[0];
      the_fellowship.children[0]appendChild(hobbitses[i]);
      alert(hobbits_list[i] + " has joined the fellowship!")
    }

    var buds2 = document.getElementsByTagName('ul')[1]
    for(i = 0; i < fellowship.buddies.length; i++) {
      var bud = buds2.childNodes[0]
      the_fellowship.children[0].appendChild(bud[i]);
      alert(buds2[i] + " has joined the fellowship!")
    }
    var rivDell = document.getElementsByTagName('article')[1];
    rivDell.appendChild(the_fellowship);

  }
}
