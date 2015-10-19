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
    //console.log(lands);
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    var sectionMiddleEarth = document.createElement("section");
    sectionMiddleEarth.id = "middle-earth";
    for ( var land in fellowship.lands ) {
      var article = document.createElement("article");
      var h1 = document.createElement("h1");
      h1.innerHTML = fellowship.lands[land];
      // console.log("Added H1 for " + fellowship.lands[land]);
      article.appendChild(h1);
      sectionMiddleEarth.appendChild(article);
    }
    document.body.appendChild(sectionMiddleEarth);
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    // give each hobbit a class of hobbit
    var ulHobbits = document.createElement("ul");
    for ( var hobbit in fellowship.hobbits ) {
      var li = document.createElement("li");
      li.innerHTML = fellowship.hobbits[hobbit];
      li.setAttribute("class", "hobbit");
      ulHobbits.appendChild(li);
    }
    document.body.appendChild(ulHobbits);
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    // add the ring as a child of Frodo
    var divForTheRing = document.createElement("div");
    divForTheRing.setAttribute("id", "the-ring");
    var liHobbitses = document.querySelectorAll("li.hobbit");
    for ( var hobbitIndex in liHobbitses ) {
      var liHobbit = liHobbitses[hobbitIndex];
      //console.log("hobbit:", liHobbit);
      if ( liHobbit.innerText == fellowship.hobbits[0] ) {
        liHobbit.appendChild(divForTheRing);
      }
    }
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    var aside = document.createElement("aside");
    // display an unordered list of buddies in the aside
    var ulBuddies = document.createElement("ul");
    for ( var buddy in fellowship.buddies ) {
      var liBuddy = document.createElement("li");
      liBuddy.innerText = fellowship.buddies[buddy];
      ulBuddies.appendChild(liBuddy);
    }
    aside.appendChild(ulBuddies);
    // insert your aside before rivendell
    //var h1Rivendell;
    var h1s = document.querySelectorAll("h1");
    for ( var h1 in h1s ) {
      if ( h1s[h1].innerText == fellowship.lands[1]) {
        h1s[h1].parentNode.insertBefore( aside, h1s[h1] );
      }
    }

  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var lis = document.querySelectorAll("li");
    for ( var li in lis ) {
      if ( lis[li].innerText == "Strider" ) {
        lis[li].innerText = "Aragorn";
      }
    }
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    var h1Rivendell;
    var h1s = document.querySelectorAll("h1");
    for ( var h1 in h1s ) {
      if ( h1s[h1].innerText == fellowship.lands[1]) {
        h1Rivendell = h1s[h1];
      }
    }
    var divFellowship = document.createElement("div");
    divFellowship.setAttribute("id", "the-fellowship"); // div called ??? id?
    // h1Rivendell.appendChild(divFellowship);
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var ulFellowship = document.createElement("ul");
    var liHobbitses = document.getElementsByClassName('hobbit');
    var lisBuddies = document.querySelectorAll("aside li");
    var fellowshipParty = [];
    for ( var i = 0; i < liHobbitses.length; i++ ) {
      fellowshipParty.push(liHobbitses[i]);
    }
    console.log("Hobbits checked in:", fellowshipParty);
    console.log(fellowshipParty.length);
    for ( var j in lisBuddies ) {
      fellowshipParty.push(lisBuddies[j]);
    }
    console.log("Buddies checked in:", fellowshipParty);
    console.log(fellowshipParty.length);
    var p = 9;
    for ( var f in fellowshipParty ) {
      console.log(typeof fellowshipParty[f]);
      if (typeof fellowshipParty[i] == "object") {
        ulFellowship.appendChild(fellowshipParty[f]);
        var msg = fellowshipParty[f].innerText + " has joined the fellowship of the ring.";
        console.log(msg);
        alert(msg);
      } else {
        console.log("Didn't add non li to party.");
      }
      p -= 1; // I couldn't figure out how to stop the loop from
      if ( p <= 0 ) { // iterating non-objects ?!?
        break;
      }
    }
    divFellowship.appendChild(ulFellowship);
    h1Rivendell.appendChild(divFellowship);
    console.log("Done.");
  }
};

function runAll() {
  fellowship.makeMiddleEarth();
  fellowship.makeHobbits();
  fellowship.keepItSecretKeepItSafe();
  fellowship.makeBuddies();
  fellowship.beautifulStranger();
  fellowship.forgeTheFellowShip();
}

runAll();

/* In console:
> for ( var i = 0; i < liHobbitses.length; i++ ) { liHobbitses[i] }
<li class=​"hobbit">​Peregrin 'Pippin' Took​</li>​
> liHobbitses
[<li class=​"hobbit">​…​</li>​, <li class=​"hobbit">​Samwise 'Sam' Gamgee​</li>​, <li class=​"hobbit">​Meriadoc "Merry" Brandybuck​</li>​, <li class=​"hobbit">​Peregrin 'Pippin' Took​</li>​]
*/
