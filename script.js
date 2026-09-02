/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/


// Listed in the same order as the UIST 2026 workshops page. This list is
// intentionally NOT shuffled - see the render loop below.
const organizers = [
  {
    'name': 'David Zhou',
    'web': 'https://david23.web.illinois.edu',
    'affiliation': 'University of Illinois Urbana-Champaign',
    'headshot': 'assets/images/david_zhou.jpg?v=1732714326838'
  },
  {
    'name': 'John Joon Young Chung',
    'web': 'https://johnr0.github.io/',
    'affiliation': 'Midjourney',
    'headshot': 'assets/images/john.jpg?v=1639699115753'
  },
  {
    'name': 'James Eschrich',
    'web': 'https://jaeschrich.github.io/',
    'affiliation': 'University of Illinois Urbana-Champaign',
    'headshot': 'assets/images/james.jpg'
  },
  {
    'name': 'Xiyu Jenny Fu',
    'web': 'https://jennyxfu.github.io/',
    'affiliation': 'Cornell University',
    'headshot': 'assets/images/jenny.jpg'
  },
  {
    'name': "Ting-Hao 'Kenneth' Huang",
    'web': 'http://kennethhuang.cc/',
    'affiliation': 'Pennsylvania State University',
    'headshot': 'assets/images/kenneth.jpg?v=1639691757489'
  },
  {
    'name': 'Andrew Jelson',
    'web': 'https://jelson.vercel.app/',
    'affiliation': 'Virginia Tech',
    'headshot': 'assets/images/andrew.jpeg'
  },
  {
    'name': 'Seyed Parsa Neshaei',
    'web': 'https://github.com/spneshaei',
    'affiliation': 'EPFL',
    'headshot': 'assets/images/parsa.jpg'
  },
  {
    'name': 'Vishakh Padmakumar',
    'web': 'https://vishakhpk.github.io/',
    'affiliation': 'Stanford University',
    'headshot': 'assets/images/vishakh.jpg?v=1732714421570'
  },
  {
    'name': 'Sarah Sterman',
    'web': 'https://ssterman.web.illinois.edu/',
    'affiliation': 'University of Illinois Urbana-Champaign',
    'headshot': 'assets/images/sarah.jpg?v=1702500794274'
  },
  {
    'name': 'Thiemo Wambsganss',
    'web': 'https://thiemowa.github.io',
    'affiliation': 'Bern University of Applied Sciences',
    'headshot': 'assets/images/Thiemo.png?v=1704977249831'
  },
  {
    'name': 'Zixin Zhao',
    'web': 'https://zixin.ca',
    'affiliation': 'University of Toronto',
    'headshot': 'assets/images/zixin.jpeg'
  },
];

const advisors = [
  {
    'name': 'Dongyeop Kang',
    'web': 'https://dykang.github.io/',
    'affiliation': 'University of Minnesota',
    'headshot': 'assets/images/dk.png?v=1642428582025'
  },
  // {
  //   'name': 'Minsuk Chang',
  //   'web': 'https://minsukchang.com/',
  //   'affiliation': 'Google',
  //   'headshot': 'assets/images/Minsuk.jpeg?v=1670975068794'
  // },
  {
    'name': 'Mina Lee',
    'web': 'https://minalee-research.github.io/',
    'affiliation': 'University of Chicago',
    'headshot': 'assets/images/mina.webp?v=1671309244845'
  },
  {
    'name': 'Vipul Raheja',
    'web': 'https://www.linkedin.com/in/vipulraheja',
    'affiliation': 'Grammarly',
    'headshot': 'assets/images/VipulRaheja.jpg?v=1639761679649'
  },
];

// Keynote speakers and panelists are still being confirmed. Add entries here
// (and a <div class="row speakers"></div> to index.html) once they are.
const speakers = [];

// No sponsors confirmed for this edition yet - the Sponsors section on the page
// invites prospective supporters to get in touch. Add logo paths here when we
// have them.
const sponsors = [];

const sections = [
  "About",
  "Participate",
  "Schedule",
  "Speakers",
  "Organizers",
  "Advisors",
  "Sponsors"
];
const editions = [{
  "year": 2022,
  "description": "@ACL 2022"
},{
  "year": 2023,
  "description": "@CHI 2023"
}, {
  "year": 2024,
  "description": "@CHI 2024"
}, {
  "year": 2025,
  "description": "@NAACL 2025"
}
];

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

$(document).ready( function() {
  
  // The nav has two lines: this year's sections, then links to past editions.
  var navSections = $("<div class='w-100'>");
  $.each(sections, function(i, sec) {
    var link = $("<a class='nav-header-links' href='#"+sec+"'>").text(sec);
    navSections.append(link).append(' ');
  });

  var navEditions = $("<div class='w-100 past-versions'>").append('Past versions: ');
  $.each(editions, function(i, ed) {
    var link = $("<a href='/archive/"+ed["year"]+"'>").text(ed["description"]);
    navEditions.append(link).append(' ');
  });

  $('.jumpto').append(navSections).append(navEditions);

  
  // Organizers are listed in a fixed order to match the UIST 2026 workshops
  // page, so this list is deliberately not shuffled.
  $.each(organizers, function(i, person) {
    var col = $("<div class='col-sm-3 org-col'>");
    var name = $("<p class='name'>")
    var link = $("<a>").append(person.name);
    link.attr('href', person.web);
    name.append(link);
    var headshot = $("<img class='img-thumbnail headshot'>");
    headshot.attr('src', person.headshot);
    var affiliation = $("<p class='affiliation'>").append(person.affiliation);
    col.append(headshot).append(name).append(affiliation);
    $('.organizers').append(col);
  });
  
  shuffle(advisors);
  $.each(advisors, function(i, person) {
    var col = $("<div class='col-sm-3 org-col'>");
    var name = $("<p class='name'>")
    var link = $("<a>").append(person.name);
    link.attr('href', person.web);
    name.append(link);
    var headshot = $("<img class='img-thumbnail headshot'>");
    headshot.attr('src', person.headshot);
    var affiliation = $("<p class='affiliation'>").append(person.affiliation);
    col.append(headshot).append(name).append(affiliation);
    $('.advisors').append(col);
  });
  
  shuffle(speakers);
  $.each(speakers, function(i, person) {
    var col = $("<div class='col-md-3 speaker-col'>");
    var name = $("<p class='name'>")
    var link = $("<a>").append(person.name);
    link.attr('href', person.web);
    name.append(link);
    var title = $("<p class='speakertitle'>").append(person.title)
    var headshot = $("<img class='img-thumbnail speakerheadshot'>");
    headshot.attr('src', person.headshot);
    var affiliation = $("<p class='affiliation'>").append(person.affiliation);
    col.append(headshot).append(name).append(title).append(affiliation);
    $('.speakers').append(col);
  });
  
  shuffle(sponsors);
  $.each(sponsors, function(i, url) {
    var div = $("<div class='col col-sm-6 text-center'>");
    var img = $("<img class='sponsor img-fluid'>");
    if (url.includes('grammarly')) { img.attr('style', 'margin-top: 13px;') };
    if (url.includes('wordtune')) { img.attr('style', 'margin-bottom: 13px;') };
    img.attr('src', url);
    div.append(img);
    $(".sponsors").append(div);
  });
});
