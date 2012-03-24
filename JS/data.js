var allRests = [new place("Miya's Sushi",[[0,0],[0,0],[12.5,22],[12.5,23],[12.5,23],[12.5,24],[12.5,24]]),
  new place("Prime 16",[[12,23],[11.5,23],[11.5,23],[11.5,23],[11.5,23],[11.5,23],[12,23]]),
  new place("Ibiza Restaurant",[[0,0],[17,22],[17,22],[17,22],[17,22],[17,23],[17,23]]),
  new place("Mamoun's",[ [ [11,0],[24,3] ],[ [11,0],[24,3] ], [ [11,0],[24,3] ], [ [11,0],[24,3] ], [ [11,0],[24,3] ], [ [11,0],[24,3] ], [ [11,0],[24,3] ] ]),
  new place("Basil Restaurant",[[10.5,22],[11.5,23],[11.5,23],[11.5,23],[11.5,23],[10.5,23],[10.5,23]]),
  new place("Zinc",[[17,21],[17,21],[ [17,12],[21,14.5] ],[ [17,12],[21,14.5] ],[ [17,12],[21,14.5] ],[[17,12],[22,14.5] ],[17,22]]),
  new place("Thali Too",[[12,21.5],[12,22],[12,22],[12,22],[12,22],[12,23],[12,23]]),
  new place("Great Wall of China",[[11,22],[10,21],[10,21],[10,21],[10,21],[10,21],[11,22]]),
  new place("168 York St Cafe",[[ [11,0],[24,1]],[ [0,15],[1,24] ],[ [0,15],[1,24] ],[ [0,15],[1,24] ],[ [0,15],[1,24] ],[ [0,15],[2,24] ],[ [0,14],[2,24] ]]),
  new place("York Street Noodle House",[[12,22],[11.5,22],[11.5,22],[11.5,22],[11.5,22],[11.5,23],[11.5,23]]),
  new place("Zaroka",[ [ [12,17],[15,22.5] ], [ [11.5,17], [15,22.5] ],[[11.5,17], [15,22.5] ],[[11.5,17], [15,22.5] ],[[11.5,17], [15,22.5] ],[[11.5,17], [15,23] ],[[11.5,17], [15,23] ]]),
  new place("Bangkok Gardens",[[12,22],[ [11.5,17],[15,22] ],[[11.5,17],[15,22] ],[[11.5,17],[15,22] ],[[11.5,17],[15,22] ],[[11.5,17],[15,23] ],[12,23]])
,new place("Yorkside", [[[0,11],[2,24]],[[0,11],[1,24]],[[0,11],[1,24]],[[0,11],[1,24]],[[0,11],[1,24]],[[0,11],[1,24]],[[0,11],[2,24]]])
  ];

var allSnacks = [new place("Starbucks", [[6.0,22.5],[5.5,22.5],[5.5,22.5],[5.5,22.5],[5.5,22.5],[5.5,22.5],[6.0,22.5]]),
  new place("Blue State on York St.", [[9,24],[7,24],[7,24],[7,24],[7,24],[7,23],[8,22]]),
  new place("Blue State on Wall St.",[[9,23],[7,23],[7,23],[7,23],[7,23],[7,23],[8,23]]),
  new place("Willoughby's",[[8,19],[7,19],[7,19],[7,19],[7,19],[7,19],[7,19]]),
  new place("Au Bon Pain",[[7,23],[7,23],[7,23],[7,23],[7,23],[7,23],[7,23]]),
  new place("The Mochi Store",[[15,21],[0,0],[0,0],[15,21],[15,21],[15,21],[13,22]]),
  new place("Froyo World", [[12,23],[12,23],[12,23],[12,23],[12,23],[12,24],[12,24]]),
  new place("Flavors", [ [0,24],[1,24],[1,24],[1,24],[11,24],[[0,11],[1,24]],[[0,11],[1,24]]]) ];


/*,
  new place("Yorkside",[[],[],[],[],[],[],[]]),
  new place("Miya's Sushi",[[],[],[],[],[],[],[]]),
  new place("Miya's Sushi",[[],[],[],[],[],[],[]]),
  new place("Miya's Sushi",[[],[],[],[],[],[],[]]),
  new place("Miya's Sushi",[[],[],[],[],[],[],[]]),
  new place("Miya's Sushi",[[],[],[],[],[],[],[]]),
  new place("Miya's Sushi",[[],[],[],[],[],[],[]]),
  new place("Miya's Sushi",[[],[],[],[],[],[],[]]), ];
  */

//new place("Miya's Sushi",[[],[],[],[],[],[],[]]) ];

var allLibs = [new place("Bass Library",[[12,24],[[0,8.5],[1.75,24]],[[0,8.5],[1.75,24]],[[0,8.5],[1.75,24]],[[0,8.5],[1.75,24]],[8.5,21.75],[10,16.75]]),
  new place("Arts Library",[[14,23],[8.5,23],[8.5,23],[8.5,23],[8.5,23],[8.5,17],[10,18]]),
  new place("Music Library",[[1,8.75],[8.5,20.75],[8.5,20.75],[8.5,20.75],[8.5,20.75],[8.5,16.75],[10,16.75]]),
  new place("Sterling Memorial Library",[[12,23.75],[8.5,23.75],[8.5,23.75],[8.5,23.75],[8.5,23.75],[8.5,16.75],[10,16.75]]),
  new place("Classics Library",[[17,21],[8.5,21],[8.5,21],[8.5,21],[8.5,21],[8.5,17],[0,0]])];

var allMisc = [new place("Yale Post Office",[[0,0],[9,17.5],[9,17.5],[9,17.5],[9,17.5],[9,17.5],[8,12]]),
  new place("Undergraduate Career Services",[[11,17],[11,17],[11,17],[11,17],[11,17],[11,17],[11,17]])];
//  new place("Miya's Sushi",[[],[],[],[],[],[],[]]),
// new place("Miya's Sushi",[[],[],[],[],[],[],[]])];


var allDH = [new place("Commons Breakfast",[[0,0],[7.75,11],[7.75,11],[7.75,11],[7.75,11],[7.75,11],[0,0]]),
  new place("Commons Lunch",[[0,0],[11,14.5],[11,14.5],[11,14.5],[11,14.5],[11,14.5],[0,0]]),
  new place("All Colleges Breakfast",[[0,0],[8,11],[8,11],[8,11],[8,11],[8,11],[0,0]]),
  new place("Morse and Calhoun Breakfast",[[8,10.5],[0,0],[0,0],[0,0],[0,0],[0,0],[8,10.5]]),
  new place("All Colleges Brunch",[[11,13.5],[0,0],[0,0],[0,0],[0,0],[0,0],[11,13.5]]),
  new place("All Colleges Dinner",[[17,19],[17,19.5],[17,19.5],[17,19.5],[17,19.5],[17,19.5],[17,19]]),
  new place("Calhoun, Stiles, Morse Dinner",[[0,0],[17,20],[17,20],[17,20],[17,20],[0,0],[0,0]]),
  new place("Hall of Graduate Studies Lunch",[[0,0],[11.5,14],[11.5,14],[11.5,14],[11.5,14],[11.5,14],[0,0]]),
  new place("Hall of Graduate Studies Dinner",[[0,0],[17,20],[17,20],[17,20],[17,20],[17,20],[0,0]]),
  new place("Durfee's",[[[0,12],[2.5,24]],[[0,10],[2.5,24]],[[0,10],[2.5,24]],[[0,10],[2.5,24]],[[0,10],[2.5,24]],[[0,10],[2.5,24]], [[0,12],[2.5,24]] ]),
  new place("Slifka Breakfast",[[0,0],[8,10],[8,10],[8,10],[8,10],[8,10],[0,0]]),
  new place("Slifka Brunch",[[11,13],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]),
  new place("Slifka Lunch",[[0,0],[11.5,13.5],[11.5,13.5],[11.5,13.5],[11.5,13.5],[11.5,13.5],[12.5,13.5]]),
  new place("Slifka Dinner",[[17,19.5],[17,19.5],[17,19.5],[17,19.5],[17,19.5],[17,19.5],[19,20]]),
  new place("Bass Cafe",[[12,23],[10,23],[10,23],[10,23],[10,23],[10,17],[12,17]]), 
  new place("Triple E's", [[0,0],[12,19],[12,19],[12,19],[12,19],[12,19],[0,0]]),
  new place("KBT Lunch", [[0,0],[11,14.5],[11,14.5],[11,14.5],[11,14.5],[11,14.5],[0,0]]),
  new place("KBT Breakfast", [[0,0],[8.5,11],[8.5,11],[8.5,11],[8.5,11],[8.5,11],[0,0]])
  ];


var allFac = [  new place("Payne Whitney Gym",[[9.5,16.5],[6,22],[6,22],[6,22],[6,22],[6,20],[9.5,16.5]]),
 new place("Yale Bookstore",[[12,18],[9,21],[9,21],[9,21],[9,21],[9,22],[9,22]]),
 new place("Yale Post Office",[[0,0],[9,17.5],[9,17.5],[9,17.5],[9,17.5],[9,17.5],[8,12]])
];

//  new place("Miya's Sushi",[[],[],[],[],[],[],[]]),
//  new place("Miya's Sushi",[[],[],[],[],[],[],[]]),
//  new place("Miya's Sushi",[[],[],[],[],[],[],[]]),

var openFacs;
var openLibs;
var openRests;
var openDHs;
var openSnacks;

var closedFacs;
var closedLibs;
var closedRests;
var closedDHs;
var closedSnacks;

