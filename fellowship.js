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

    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
  makeMiddleEarth: function(lands) {
    console.log(lands);
    var section = document.createElement("section");
    section.setAttribute("id", "middle-earth");
    for (var i = 0; i < fellowship.lands.length; i++) {
      var article = document.createElement("article");
      var h1 = document.createElement("h1");
      h1.textContent = fellowship.lands[i];
      article.appendChild(h1);
      document.getElementById("middle-earth").appendChild(article);
    }
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    var ul = document.createElement("ul");
      for (var i = 0; i < fellowship.hobbits.length; i++) {
      var li = document.createElement("li");
      li.setAttribute("class", "hobbit")
      li.textContent = fellowship.hobbits[i];
      ul.appendChild(li);
    }
    document.body.appendChild(ul);
    var firstArt = document.querySelector("article")
    firstArt.appendChild(ul);
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
    var div = document.createElement("div");
    div.id = "the-ring";
    var frodo = document.getElementsByClassName("hobbit")[0];
    frodo.appendChild(div);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    var aside = document.createElement("aside");
    var ul = document.createElement("ul");
    for (var i = 0; i < fellowship.buddies.length; i++) {
      var li = document.createElement("li");
      li.textContent = fellowship.buddies[i];
      ul.appendChild(li);
    }
    aside.appendChild(ul);
    var parentArticle = document.querySelectorAll("article")[1];
    var rivendell = document.querySelectorAll("h1")[1];
    rivendell.parentNode.insertBefore(aside, rivendell);

  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var strider = document.getElementsByTagName("ul")[1].childNodes[3];
    strider.textContent = "Aragorn"
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party

    // did this to get the hobbits ul
    var hobbits = document.querySelectorAll("ul")[0];
    var rivendell = document.querySelectorAll("article")[1]
    rivendell.appendChild(hobbits);
    var buddies = document.querySelectorAll("ul")[0]
    rivendell.appendChild(buddies);

    var div = document.createElement("div");
    div.id = "the-fellowship";
    div.appendChild(document.createElement("ul"));

  // did this to get the hobbits ul with li as 4 children.
    var hobbits = document.querySelectorAll("ul")[0].childNodes;
    for (var i = 0; i < hobbits.length + 1; i++) {
      var i = 0;
      alert(hobbits[i].textContent + " has joined your party.");
      div.children[0].appendChild(hobbits[i]);
    }

    var buddies = document.querySelectorAll("ul")[1].childNodes;
    for (var i = 0; i < buddies.length + 1; i++) {
      var i = 0;
      alert(buddies[i].textContent + " has joined your party.");
      div.children[0].appendChild(buddies[i]);
    }

    // Alternate way:
    // var hobbits = document.querySelectorAll("ul")[0].childNodes;
    // while (hobbits.length > 0) {
    //   var hobbit = hobbits[0];
    //   alert(hobbit.textContent + " has joined your party.");
    //   div.children[0].appendChild(hobbit);
    // }

  } // ends forgeTheFellowship
} // ends fellowship object

fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies(fellowship.buddies);
fellowship.beautifulStranger();
fellowship.forgeTheFellowShip();





// Why does makeMiddleEarth have parameters if they are not defined/used in the function?
// How do I get rid of the empty strings that are in the Mordor h1?
