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
    for(var i=0; i<fellowship.hobbits.length; i++){
    var list = document.createElement("li");
    list.setAttribute("class", "hobbit");
    newList.appendChild(list);
    var textnode = document.createTextNode(fellowship.hobbits[i]);
    list.appendChild(textnode);
    var shire=document.getElementById('The Shire');
    shire.appendChild(newList);
    }

  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "the-ring");
    // add the ring as a child of Frodo
    var hobbits = document.querySelector('li.hobbit');
    hobbits.appendChild(newDiv);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    var newAside= document.createElement("aside");
    // display an unordered list of buddies in the aside


    var newList = document.createElement("ul");
    newAside.appendChild(newList);
    for(var i=0; i<fellowship.buddies.length; i++){
     var list = document.createElement("li");
     newList.appendChild(list);
     var textnode = document.createTextNode(fellowship.buddies[i]);
     list.appendChild(textnode);
    }
    // insert your aside before rivendell
    var rivenDell= document.querySelector('#Rivendell');

    rivenDell.parentNode.insertBefore(newAside, rivenDell);
    // document.body.appendChild(newAside);

  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var newText=document.createTextNode("Aragorn");
    var strider=document.getElementsByTagName('li');
    strider[3].replaceChild(newText, strider[3].firstChild);
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    var moveToRivendellH=document.querySelectorAll('li.hobbit');
    var moveToRivendellB=document.querySelectorAll('aside');
    var rivenDell= document.querySelector('#Rivendell');
    for(var i=0; i<moveToRivendellH.length; i++){
      // rivenDell= document.querySelector('#Rivendell');
      rivenDell.parentNode.insertBefore(moveToRivendellH[i], rivenDell);
    }
    var rivenDell= document.querySelector('#Rivendell');
    for(var i=0; i<moveToRivendellB.length; i++){
      // rivenDell= document.querySelector('#Rivendell');
      rivenDell.parentNode.insertBefore(moveToRivendellB[i], rivenDell);
    }

    // create a new div called 'the-fellowship'
    var newDiv=document.createElement("div");
    newDiv.setAttribute('id', 'the-fellowship');
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    moveToRivendellH=document.querySelectorAll('li.hobbit');
    moveToRivendellB=document.querySelectorAll('aside');
    for(var i=0; i<moveToRivendellH.length; i++){
      newDiv.appendChild(moveToRivendellH[i]);
      alert("Hobit"+moveToRivendellH[i]+"joined!");
    }
    for(var i=0; i<moveToRivendellB.length; i++){
      newDiv.appendChild(moveToRivendellB[i]);
      alert("Buddy"+moveToRivendellB[i]+"joined!");

    }
    document.body.appendChild(newDiv);
  }
}

fellowship.makeMiddleEarth()
fellowship.makeHobbits()
fellowship.makeBuddies()
