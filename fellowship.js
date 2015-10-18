
//exmaple to follow:
// var btn = document.createElement("BUTTON");        // Create a <button> element
// var t = document.createTextNode("CLICK ME");       // Create a text node
// btn.appendChild(t);                                // Append the text to <button>
// document.body.appendChild(btn);
// var el = document.createElement("p");
// el.appendChild(document.createTextNode("Test"));
//
// var tmp = document.createElement("div");
// tmp.appendChild(el);
// console.log(tmp.innerHTML);




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
    var middleEarth = document.createElement("section");
    middleEarth.id = "middle-earth";
    for (var i=0; i<fellowship.lands.length; i++)
    {
      var articleTag = document.createElement("article");
      var h1Tag = document.createElement("h1");
      h1Tag.textContent = fellowship.lands[i]; //gets each name and adds to h1
      articleTag.appendChild(h1tag); //appends h1 to acticle
      middleEarth.appendChild(articleTag); //aapends article to section

    }
  document.body.appendChild(middleEarth)

      },

  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    var hobbitsUL = fellowship.hobbits
    console.log(hobbitsUL)
    // give each hobbit a class of hobbit
  var addClass = fellowship.hobbits.length; //gets total # of hobbits in array
  for (i =0; i< addClass.length; i++) {
    "class" += ' ' + hobbitsUL[i];
  }
},
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
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
fellowship.makeMiddleEarth(fellowship.lands);
