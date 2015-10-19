// Dramatis Personae
/*I am getting the error "TypeError: null is not an object (evaluating 'document.getElementById("Middle-Earth").appendChild"  This is prohibiting me from successfully completing this homework...*/
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

    var mkSection = document.createElement("section");
    var mkTextNodeME = document.createTextNode("Middle-Earth");
    mkSection.appendChild(mkTextNodeME);

    var mkArticle = document.createElement("a");
    for (var i = 0; i < fellowship.lands.length; i++) {
      var mkTextNodeLands = document.createTextNode(fellowship.lands[i]);
      var mkTextNodeLandsName = document.createTextNode("<h1>" + fellowship.lands[i]) + "</h1>";
    }
    //mkArticle.appendChild(mkTextNodeLands).appendChild(mkTextNodeLandsName)
    document.body.appendChild(document.getElementById("Middle-Earth"));

    /*document.createElement("SECTION").id="Middle-Earth";
      // create a section tag with an id of middle-earth
    var a = document.createElement("ARTICLE");
    a.id = fellowship.lands[0];
    document.getElementById(fellowship.lands[0]).innerHTML ='<h1>The Shire</h1>';
    document.getElementById("Middle-Earth").appendChild(document.getElementById(fellowship.lands[0]));
    a.id = fellowship.lands[1];
    getElementById(fellowship.lands[1]).innerHTML = '<h1>Rivendell</h1>';
    document.getElementById("Middle-Earth").appendChild(document.getElementById(fellowship.lands[1]));
    a.id = fellowship.lands[2];
    getElementById(fellowship.lands[2]).innerHTML = '<h1>Mordor</h1>';
    document.getElementById("Middle-Earth").appendChild(document.getElementById(fellowship.lands[2]));
      // add each land as an article tag
      // inside each article tag include an h1 with the name of the land
      document.body.appendChild.getElementById("Middle-Earth");
        // append middle-earth to your document body*/
  },

  makeHobbits: function(hobbits) {
    document.body.createElement("UL").id = "Hobbits";
    for (var hobbitIterator = 0; hobbitIterator < Hobbits.length; hobbitIterator++) {
      document.getElementById("Hobbits").createElement("li").innerHTML = "<class = 'hobbit'>" + hobbits[hobbitIterator];
    }
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
  },

  keepItSecretKeepItSafe: function() {
    document.createElement("div").id='the-ring';
    // create a div with an id of 'the-ring'
    fellowship.Hobbits[0].appendChild(getElementById('the-ring'));
    // add the ring as a child of Frodo
  },

  makeBuddies: function(buddies) {
    var mkAside = function(buddies) {
      for (var i = 0; i < buddies.length; i++) {"<li>" + buddies[i] + "</li>"}
    }
    document.createElement("aside").innerHTML = "<ul>" + mkAside + "</ul>";
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    /*  Not sure how to do that without an OL to insert into...*/
  },

  beautifulStranger: function() {
    fellowship[3] = "Aragorn";
    // change the buddy 'Strider' textnode to "Aragorn"
  },

  forgeTheFellowShip: function() {
    document.append(document.getElementById(fellowship.lands[1]), document.getElementsByName("aside"));
    append(document.getElementById(fellowship.lands[1]), document.getElementById("Hobbits"));
    // move the hobbits and the buddies to Rivendell
    document.createElement("div").textnode='the-fellowship';
    // create a new div called 'the-fellowship'
    var mkFellows = function(lands) {
      for (var q = 0; q < fellowship.lands[1].length; q++) {
        fellowship.lands[1][q];
      }
    }
    append(document.getElementsByName('the-fellowship'), mkFellows)
    // add each hobbit and buddy one at a time to 'the-fellowship'

    // after each character is added make an alert that they have joined your party

  }

}
