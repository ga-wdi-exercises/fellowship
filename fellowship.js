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
    var middleEarth = document.createElement('section');
    middleEarth.id = "middle-earth";
    for(var i=0;i<lands.length;i++){
      // add each land as an article tag
      var articleTag = document.createElement('article');
      // inside each article tag include an h1 with the name of the land
      var h1Tag = document.createElement('h1');
      h1Tag.textContent = lands[i]; //makes the name of the land the h1 tag, iterates throught the lands using the for loop and uses  textContent to alter DOM elements
      articleTag.appendChild(h1Tag);//adds the h1 tag to the corresponding article tag
      middleEarth.appendChild(articleTag);//adds the article tag with the h1 inside to section middle earth

    }
    // append middle-earth to your document body
    document.body.appendChild(middleEarth);
  },
  makeHobbits: function(hobbits) {
    // display an unordered list of hobbits in the shire
    var hobbitList = document.createElement('ul');
    for(var i=0; i<hobbits.length;i++){
      var hobbit = document.createElement('li');//creates a list element
      hobbit.textContent = hobbits[i];//uses textContent to store the name of each hobbit in each list element, iterates through hobbits
      hobbit.className = 'hobbit';//gives each hobbit list element the a class name of hobbit
      hobbitList.appendChild(hobbit);//adds each hobbit list element to the unordered list hobbitlist
    }
    var shire = document.getElementsByTagName('article')[0];//selects the  elements with tag name article at the 0 index which is the shire.
    shire.appendChild(hobbitList);//adds the hobbit list to the shire article with appendChild
  },
  keepItSecretKeepItSafe: function() {
    // create a div with an id of 'the-ring'
    var ring = document.createElement('div');
    ring.id = "the-ring";
    // add the ring as a child of Frodo
    var frodo = document.getElementsByClassName('hobbit')[0];//selects the elements with the class name "hobbit" and selects the element/hobbit with the index of 0 which is frodo, and sets it to the variable frodo
    frodo.appendChild(ring);//adds ring as a child element of frodo
  },
  makeBuddies: function(buddies) {
    // create an aside tag
    var asideTag = document.createElement('aside');
    // display an unordered list of buddies in the aside
    var buddyList = document.createElement('ul');
    for(var i = 0;i<buddies.length;i++){
      var buddy = document.createElement('li');
      buddy.textContent = buddies[i];
      buddyList.appendChild(buddy);
    }
    asideTag.appendChild(buddyList);//appends the buddyList to the aside tag
    // insert your aside before rivendell
    var rivendell = document.getElementsByTagName('article')[1];//searches elements with the article tag and are at the 1 index which points to rivendell and sets it to the variable rivendell
    rivendell.parentNode.insertBefore(asideTag, rivendell);//not exactly sure what this does but I think it looks at rivendells parentNode which is lands and places the aside above rivendell-so into shire? seems like a roundabout way of doing this. good practice though
  },
  beautifulStranger: function() {
    // change the buddy 'Strider' textnode to "Aragorn"
    var buddy = document.getElementsByTagName('aside')[0].getElementsByTagName('li');//uses the getElements by tag name to access the aside and then the list inside the aside
    var strider = buddy[3];//looks at the 3rd index position of buddy which is the list inside of the aside, the 3rd index position is the string strider - and assigns it to variable strider
    strider.textContent = "Aragorn";//changes the text at that strider position to aragorn -- it was strider
  },
  forgeTheFellowShip: function() {
    // move the hobbits and the buddies to Rivendell
    // create a new div called 'the-fellowship'
    var theFellowship = document.createElement('div');//create a new div and assigned to theFellowship variable
    theFellowship.id = "the-fellowship";//give the new theFellowship div the id "the-fellowship"
    theFellowship.appendChild(document.createElement('ul'));//create a new ul element and append it to theFellowship div
    // add each hobbit and buddy one at a time to 'the-fellowship'
    var hobbitList = document.getElementById('the-ring').parentNode.parentNode; //use getElementById to search for the id of 'the-ring' then move up two levels of the tree using the parentNode twice. This puts us at the list of hobbits - it is set to the hobbitlist variable
    var hobbitCount = hobbitList.childElementCount;//uses the child element count to determine the number of li elements in the hobbitList unordered list
    for(var i=0;i<hobbitCount;i++){
      var hobbit = hobbitList.childNodes[0];//not completely sure how this section works. I think the childNodes is looking at the 0th index child of hobbitList,(the first hobbit/li in the ul) which is a list element, and assigning it to the hobbit variable
      theFellowship.children[0].appendChild(hobbit);// that hobbit variable is then added to the first child of theFellowship which is the hobbit list?
      alert(hobbit.textContent + " has joined the party!");
      // after each character is added make an alert that they have joined your party
    }
    var buddies = document.getElementsByTagName('aside')[0].children[0].children;//using the getElementsByTagName to access the aside and the the unordered list below and the list elements below that, these list elements are assigned to the buddies variable
    var buddyCount = buddies.length;
    for(var j=0; j<buddyCount; j++){//iterating as many times as there are list items
      var buddy = buddies[0];//assiging the first element of the buddies variable to a new variable
      theFellowship.children[0].appendChild(buddy);
      alert(buddy.textContent + " has joined the party");
    }
    var rivendell = document.getElementsByTagName('article')[1];//adds the buddies and hobbits to the rivendell article
    rivendell.appendChild(theFellowship);
  }
}
fellowship.makeMiddleEarth(fellowship.lands);
fellowship.makeHobbits(fellowship.hobbits);
fellowship.keepItSecretKeepItSafe();
fellowship.makeBuddies(fellowship.buddies);
fellowship.beautifulStranger();
fellowship.forgeTheFellowShip();
