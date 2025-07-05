/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/


const organizers = [
  {
    'name': 'John Joon Young Chung',
    'web': 'https://johnr0.github.io/',
    'affiliation': 'University of Michigan',
    'headshot': '../../assets/images/john.jpg'
  },
  {
    'name': 'Katy Ilonka Gero',
    'web': 'http://www.katygero.com/',
    'affiliation': 'Columbia University',
    'headshot': '../../assets/images/katy.webp'
  },
  {
    'name': 'Minsuk Chang',
    'web': 'https://minsukchang.com/',
    'affiliation': 'Google',
    'headshot': '../../assets/images/Minsuk.jpeg'
  },
  {
    'name': 'Thiemo Wambsganss',
    'web': 'https://thiemowa.github.io',
    'affiliation': 'Bern University of Applied Sciences',
    'headshot': '../../assets/images/Thiemo.png'
  },
  {
    'name': "Ting-Hao 'Kenneth' Huang",
    'web': 'http://kennethhuang.cc/',
    'affiliation': 'Pennsylvania State University',
    'headshot': '../../assets/images/kenneth.jpg'
  },
  {
    'name': 'Dongyeop Kang',
    'web': 'https://dykang.github.io/',
    'affiliation': 'University of Minnesota',
    'headshot': '../../assets/images/dk.png'
  },
  // {
  //   'name': 'Mina Lee',
  //   'web': 'https://minalee.info/',
  //   'affiliation': 'Stanford University',
  //   'headshot': '../../assets/images/mina.webp'
  // },
  {
    'name': 'Vipul Raheja',
    'web': 'https://www.linkedin.com/in/vipulraheja',
    'affiliation': 'Grammarly',
    'headshot': '../../assets/images/VipulRaheja.jpg'
  },
  {
    'name': 'Sarah Sterman',
    'web': 'https://ssterman.web.illinois.edu/',
    'affiliation': 'University of Illinois Urbana-Champaign',
    'headshot': '../../assets/images/sarah.jpg'
  },
];

const speakers = [
  {
    'name': 'Lillian-Yvonne Bertram',
    'web': 'https://www.lillianyvonnebertram.com/',
    'title': 'Writer/Artist/Educator',
    'affiliation': 'Northeastern University',
    'maxwidth': '100px',
    'headshot': '../../assets/images/lyb.jpg'
  },
  {
    'name': 'Claire L. Evans',
    'web': 'https://clairelevans.com/',
    'title': 'Writer and Musician',
    'maxwidth': '200px',
    'headshot': '../../assets/images/cle.jpg'
  },
  {
    'name': 'Elizabeth Clark',
    'web': 'https://homes.cs.washington.edu/~eaclark7/',
    'title':  'Research Scientist',
    'affiliation': 'Google NY',
    'maxwidth': '',
    'headshot': '../../assets/images/ec.JPG'
  },
  {
    'name': 'Timo Mertens',
    'web': 'https://www.linkedin.com/in/timo-mertens-b2153bb',
    'title': 'Head of ML & NLP Products',
    'affiliation': 'Grammarly',
    'maxwidth': '',
    'headshot': '../../assets/images/tm.jpg'
  },
  {
    'name': 'Melissa Roemelle',
    'web': 'https://roemmele.github.io/',
    'title': 'Research Scientist',
    'affiliation': 'RWS Language Weaver',
    'headshot': '../../assets/images/melissa.jpeg'
  },
  {
    'name': 'Daniel Gissin',
    'title': "Algo Team Lead",
    'web': 'https://www.linkedin.com/in/daniel-gissin-a9771a103/',
    'affiliation': 'AI21 Labs',
    'headshot': '../../assets/images/daniel.png'
  },
];

const pc = [
'Jordan Huffaker, University of Michigan',
// 'Ray Hong, George Mason University',
'Minsuk Chang, Naver AI Lab',
// 'Kang Min Yoo, Naver AI Lab',
'Hwaran Lee, Naver AI Lab',
'Risako Owan, University of Minnesota',
'Shirley Hayati, Geogia Tech',
// 'Libby Ferland, University of Minnesota',
'Chieh-Yang Huang, Penn State University',
// 'Stephanie M. Lukin, Army Research Laboratory',
// 'Tianyi Zhang, Stanford University',
'Alex Tamkin, Stanford University',
'Gabriel Poesia, Stanford University',
'Dae Hyun Kim, Stanford University',
'Joon Park, Stanford University',
'Alex Calderwood, UCSC',
'Vivian Liu, Columbia University',
'Kenneth Arnold, Calvin University',
'Melanie Subbiah, Columbia University',
'Chris Kedzie, Rasa',
// 'Tuhin Chakrabarty, Columbia University',
'Wanyu Du, University of Virginia',
'Dhruv Kumar, Grammarly',
'Arjun Akula, UCLA',
'Melissa Roemmele, RWS',
'Xinyu Hua, Bloomberg'
  ];


const sponsors = [
  "../../assets/images/logo-grammarly.png"
]

const sections = [
  "Call for Participation",
  // "Invited Speakers", 
  "Submit", 
  "Schedule", 
  // "Sponsors", 
  "Organizers", 
  // "Program Committee"
];
const editions = [{
  "year": 2022,
  "description": "@ACL 2022"
},{
  "year": 2023,
  "description": "@CHI 2023"
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
  
  $.each(sections.concat(editions), function(i, sec) {
    if (i < sections.length) {
      var span = $("<a class='nav-header-links' href='#"+sec+"'>").text(sec);
      $('.jumpto').append(span).append(' ');
    }
    else {
      var span = $("<a href='/archive/"+sec["year"]+"'>").text(sec["description"]);
      $('.jumpto').append(span).append(' ');  
    }
  })

  
  shuffle(organizers);
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
  
  $.each(pc, function(i, person) {
    var li = $("<li class='pc-li'>");
    li.append(person);
    $('.pc').append(li);
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
    // headshot.attr('style', 'max-width:'+person.maxwidth);
    var affiliation = $("<p class='affiliation'>").append(person.affiliation);
    col.append(headshot).append(name).append(title).append(affiliation);
    $('.speakers').append(col);
  });
  
  shuffle(sponsors);
  $.each(sponsors, function(i, url) {
    var div = $("<div class='col col-sm-6 text-center'>");
    var img = $("<img class='sponsor img-fluid'>");
    if (url.includes('grammarly')) { img.attr('style', 'margin-top: 13px;') };
    img.attr('src', url);
    div.append(img);
    $(".sponsors").append(div);
  });
});