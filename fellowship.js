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
    var lands = this.lands;
    var makeSection = document.createElement('section');
    makeSection.setAttribute('id', 'middle-earth');

    for (var i = 0, length = lands.length; i < length; i++ ) {

      var makeArticle = document.createElement('article');
      var makeH1 = document.createElement('h1');
      makeH1.textContent = this.lands[i];
      makeArticle.appendChild(makeH1)
      makeSection.appendChild(makeArticle);
    }
  document.body.appendChild(makeSection);

    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
  },
  makeHobbits: function(hobbits) {
    var makeUL = document.createElement('ul');
    var hobbits = this.hobbits;
    for (var i = 0, length = hobbits.length; i < length; i++) {

        var li = document.createElement('li');
        li.setAttribute('class', 'hobbit');
        li.textContent = this.hobbits[i];
        makeUL.appendChild(li);

    }
      document.body.appendChild(makeUL);
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo

    var makeDiv = document.createElement('div');
    makeDiv.setAttribute('id', 'the-ring');
    makeDiv.textContent = "The Ring!!!"
    var frodo = document.getElementsByClassName('hobbit')[0];
    frodo.appendChild(makeDiv);

  },
  makeBuddies: function(buddies) {
    // create an aside tag
    // display an unordered list of buddies in the aside
    // insert your aside before rivendell
    var buddies = this.buddies;
    var makeAside = document.createElement('aside');
    var rivendell = document.getElementsByTagName('article')[0].children[0];


    for (var i = 0, length = buddies.length; i < length; i++) {
      var makeUL = document.createElement('ul');
      makeUL.innerHTML = "<li>" + buddies[i] + "</li>";
      makeAside.appendChild(makeUL);



}
    rivendell.appendChild(makeAside);// makeAside.insertBefore(makeAside, rivendell);

},
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var rivendell = document.getElementsByTagName('ul')[3].firstChild;
    rivendell.textContent = "Aragorn";


  },
  forgeTheFellowShip: function() {

    var hobbits = this.hobbits;
    var buddies = this.buddies;
    // this.lands.push(hobbits);
    // this.lands.push(buddies);

    var makeDiv = document.createElement('div');
    makeDiv.id = "the-fellowship";

    for (var i = 0, j = 0, length = hobbits.length, length2 = buddies.length; i < length && j < length2; i++) {

      // makeDiv.textConent = buddies[i];
      var makeP = document.createElement('p')
      makeP.textContent = hobbits[i];
      makeDiv.appendChild(makeP);
      alert(hobbits[i] + " Has joined the party!");

      var makeP2 = document.createElement('p');
      makeP2.textContent = buddies[i];
      makeDiv.appendChild(makeP2);
      alert(buddies[i] + " Has joined the party!");
  }

    document.body.appendChild(makeDiv);
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
  }
}
