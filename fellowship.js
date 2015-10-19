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
    $('body').append('<section id="middle-earth">');
    // create a section tag with an id of middle-earth
    $each(lands, function(idx, value) {
      $("#middle-earth").append("<article>" + value + "</article>")
    }
        // add each land as an article tag
    $.each(lands, function(idx, value) {
      $.each('article').append("<h1>" + value + "</h1>")
    }

    // inside each article tag include an h1 with the name of the land
    makeMiddleEarth(lands);
    // append middle-earth to your document body
  },
  makeHobbits: function(hobbits) {
    for (i = 0; i<hobbits.length; i++) {
      document.write('<li>' + value + "</li>")
    }
    // display an unordered list of hobbits in the shire

    // give each hobbit a class of hobbit
  },
  keepItSecretKeepItSafe: function() {
    $("body").append('<div id="the-ring">');
    // create a div with an id of 'the-ring'
    document.getElementById('the-ring').appendChild("hobbits[0]");
    // add the ring as a child of Frodo
  },
  makeBuddies: function(buddies) {
    $.each(baddies,value){
      $('')
    }
    // create an aside tag
    $('body').append('<aside>');
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
