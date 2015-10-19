// When I was creating an article tag, I only tried to declare 'articleNode' once,
// However, it ended up creating Article tag called Mordor at the end once.
// Do I have to declare it everytime like document.createElement
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
    var newSection=document.createElement("section");
    newSection.setAttribute('Id','middle-earth');


    // add each land as an article tag


    var article1 = document.createElement("article");
    article1.setAttribute('Id', 'The Shire');
    newSection.appendChild(article1);
    var article2 = document.createElement("article");
    article2.setAttribute('Id', 'Rivendell');
    newSection.appendChild(article2);
    var article3 = document.createElement("article");
    article3.setAttribute('Id', 'Mordor');
    newSection.appendChild(article3);

    // inside each article tag include an h1 with the name of the land
    var h1 = document.createElement("h1");
    var shire = document.getElementById('The Shire');
    h1.innerHTML+="The Shire";
    article1.insertBefore(h1, shire);
    var h1 = document.createElement("h1");
    var rivendell=document.getElementById('Rivendell');
    h1.innerHTML+='Rivendell';
    article2.insertBefore(h1, rivendell);
    var h1 = document.createElement("h1");
    var mordor = document.getElementById('Mordor');
    h1.innerHTML+='Mordor';
    article3.insertBefore(h1, mordor);


    // append middle-earth to your document body
    document.body.appendChild(newSection);

  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    var newList = document.createElement("ul");
    document.body.appendChild(newList);
    for(var i=0; i<fellowship.hobbits.length; i++){
    var list = document.createElement("li");
    var cName= document.createElement("hobbit");
    list.appendChild(cName);
    var textnode = document.createTextNode(fellowship.hobbits[i]);
    cName.appendChild(textnode);
    newList.appendChild(list);
    }
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "the-ring");
    // add the ring as a child of Frodo
    var hobbits = document.getElementsByTagName('hobbit');
    for(var i=0; i<hobbits.length; i++){
      var data = hobbits[i].getAttribute('Frodo');
      console.log(data);
    }
    // .appendChild(newDiv);
    // Frodo.appendChild(newDiv);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    var newAside= document.createElement("aside");
    // display an unordered list of buddies in the aside


    // var startNode=document.getElementsByTagName('aside').parentNode;
    var newList = document.createElement("ul");
    newAside.appendChild('newList');
    var nodeIndication=newAside.parentNode;
    // startNode.appendChild("newList");
    // document.body.appendChild('startNode');

    for(var i=0; i<fellowship.buddies.length; i++){
     var list = document.createElement("li");
     nodeIndication.appendChild("list");
     var textnode = document.createTextNode(fellowship.buddies[i]);
     list.appendChild(textnode);
    }
    // insert your aside before rivendell
    // var rivenDell= document.getElementById('Rivendell');
    // rivenDell.parentNode.insertBefore(newAside,rivenDell);
    document.body.appendChild(nodeIndication);
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  }
}
