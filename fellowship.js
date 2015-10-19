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
    console.log(lands);
    // create a section tag with an id of middle-earth
    var x = document.createElement("middle-earth");
    // add each land as an article tag
    <article>
      <h1>The Shire</h1>
    </article>
    <article>
      <h1>Rivendell</h1>
    </article>
    <article>
      <h1>Mordor</h1>
    </article>
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    appendChild(middle-earth)
  },
  makeHobbits: function(hobbits) {
    <div id="hobbitsList">
    <h4>All the hobbits in the shire:</h4>
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    <ul>
      <li>"Frodo Baggins"</li>
        document.getElementById("hobbitsList").className = "FrodoMeister";
      <li>"Samwise 'Sam' Gamgee"</li>
        document.getElementById("hobbitsList").className = "SamMeister";
      <li>"Meriadoc \"Merry\" Brandybuck"</li>
        document.getElementById("hobbitsList").className = "MerryMeister";
      <li>"Peregrin 'Pippin' Took"</li>
        document.getElementById("hobbitsList").className = "PippinMeister";
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    g.setAttribute("the-ring", "Div1");
    // add the ring as a child of Frodo
    document.getElementById("the-ring").appendChild(FrodoMeister);
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    var x = document.createElement("ASIDE");
    x.setAttribute("id", "myAside");
    document.body.appendChild(buddies);
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell [????? - BL]
    <ul>
      <li>"Gandalf the Grey"</li>
      <li>"Legolas"</li>
      <li>"Gimli"</li>
      <li>"Strider"</li>
      <li>"Boromir"</li>
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    node.Strider="Aragorn";
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell [????? - BL]
    // create a new div called 'the-fellowship'
    var div = document.createElement('the-fellowship');
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var FrodoMeister = document.getElementById('the-fellowship');
      alert("Frodo Baggins has joined your party.");
    var SamMeister = document.getElementById('myDiv');
      alert("Samwise 'Sam' Gamgee has joined your party.")
    var MerryMeister = document.getElementById('myDiv');
      alert("Meriadoc \"Merry\" Brandybuck has joined your party.")
    var PippinMeister = document.getElementById('myDiv');
      alert("Peregrin 'Pippin' Took has joined your party.")
  }
}
