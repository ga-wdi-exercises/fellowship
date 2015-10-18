// Dramatis Personae

var fellowship = {
  hobbits: [
    "Frodo Baggins",
    "Samwise 'Sam' Gamgee",
    "Meriadoc \"Merry\" Brandybuck",
    "Peregrin 'Pippin' Took"
  ];
  buddies: [
    "Gandalf the Grey",
    "Legolas",
    "Gimli",
    "Strider",
    "Boromir"
  ];

  var lands = ["The Shire", "Rivendell", "Mordor"];

  makeMiddleEarth: function(lands) {
    var middleEarth = document.createElement('section');
    middleEarth.id = "middle-earth"
    for (var i = 0; i < lands.length; i++) {
      var articleTag = document.createElement('article');
      var h1Tag = document.createElement('h1');
      h1Tag.textContent = lands[i];
      articleTag.appendChild(h1Tag);
      middleEarth.appendChild(articleTag);
    }
    document.body.appendChild(middleEarth);
  }
  makeMiddleEarth(lands);


  makeHobbits: function(hobbits) {
    var hobbitsList = document.createElement('ul')
      // display an unordered list of hobbits in the shire
    for (var i = 0; i < hobbits.length; i++) {
      // give each hobbit a class of hobbit
      var hobbit = document.createElement('li');
      hobbit.className = "hobbit";
      hobbitsList.appendChild(hobbit)
    }
    var shire = document.getElementsByTagName('article')[0];
    shire.appendChild(hobbitsList);
  }
  makeHobbits(hibbits);


  keepItSecretKeepItSafe: function() {

    var ring = document.createElement('div');
    ring.id = "the-ring";
    var frodo = document.getElementsByClassName('hobbit')[0];
    frodo.appendChild('ring');
  }
  keepItSecretKeepItSafe();

  makeBuddies: function(buddies) {
    var asideTag - document.createElement('asside');
    var buddiesList - document.createElement('ul')
    for (var i = 0; i < buddies.length; i++) {
      var buddy - document.createElement('li');
      buddy.textContent - buddies [i];
      buddiesList.appendChild(buddy);
    }
  asideTag.appendChild(buddiesList);
  var rivendell = document.getElementsByTagName('aarticle')[1];
  rivendell.parentNode.insertBefore(asideTag, rivendell);
  }
  makeBuddies(buddies);
  beautifulStranger: function() {
    var buddies = document.getElementsByTagName('aside') [0].getElementsByTagName('li')
    var strider = buddies[3];
    strider.textContent = "Aragon";
  }
  beautifulStranger();

  forgeTheFellowShip: function() {
  var theFellowship = document.createElement('div');
    theFellowship.id = 'the-fellowship';
    theFellowship.appendChild(document.createElement('ul'));

  var hobbitsList = document. getElementById('the-ring').parentNode.parentNode;
  var hobbitCount - hobbitList.childElementCount;
  for (var i - 0; i < hobbitCount; i++) {
    var hobbit = hobbitList.childNodes[0];
    theFellowship.children[0].appendChild(hobbit);
    alert(hobbit.txtContent + "has joined the party");
  }
var buddies = document.getElementsByTagName('aside') [0].children[0].children;
var buddyCount = buddies.length;
for (var j =0; j < buddyCount; j++) {
var buddy = buddies[0];
theFellowship.children[0].appendChild(buddy);
alert(buddy.txtContent + "has joined the party")
}
var rivendell = document.getElementsByTagName('article')[1];
rivendell.appendChild(thefellowship);
}
forgeTheFellowShip();
