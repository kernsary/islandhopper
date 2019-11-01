use islands_info;
db.dropDatabase();

db.islands.insertMany([
  {
    "name": "Lewis and Harris",
    "region": "Outer Hebrides",
    "area": 217898,
    "population": 21031,
    "information": "Lewis is the north part of the island and Harris, with its wild hill country, is in the south. Both parts have amazing sandy beaches.",
    "image":
  },

  {
    "name": "Skye",
    "region": "Skye group",
    "area": 165625,
    "population": 10008,
    "information": "Skye has spectacular mountains and cliffs, and is the most popular Scottish island for tourists.",
    "image": `https://www.scottishfield.co.uk/wp-content/uploads/sites/101/2019/08/Fairy-Pools-waterfall-in-Glen-Brittle-surounded-by-mighty-mountains-Black-Cuillin-978x624.jpg`
  },

  {
    "name": "Shetland Mainland",
    "region": "Shetland",
    "area": 96879,
    "population": 18765,
    "information": "Mainland has an incredible number of inlets and peninsulas and lots of spectacular cliffs.",
    "image":
  },

  {
    "name": "Mull",
    "region": "Mull group",
    "area": 87535,
    "population": 2800,
    "information": "Mull has lots of hills and some huge cliffs, and is known for wildlife and for the painted houses in Tobermory.",
    "image":
  },

  {
    "name": "Islay",
    "region": "Islay group",
    "area": 61956,
    "population": 3228,
    "information": "Islay is famous for its whisky distilleries and is also an increasingly popular tourist destination, with lots of beaches and wildlife.",
    "image":
  },

  {
    "name": "Orkney Mainland",
    "region": "Orkney",
    "area": 52325,
    "population": 17162,
    "information": "Mainland is full of archaeological treasures like the Skara Brae stone-age village, standing stones and burial mounds.",
    "image":
  },

  {
    "name": "Arran",
    "region": "Firth of Clyde",
    "area": 43201,
    "population": 4629,
    "information": "Arran is the perfect holiday island with jagged mountains, castles, beaches and attractive villages." ,
    "image":
  },

  {
    "name": "Jura",
    "region": "Islay Group",
    "area": 36692,
    "population": 196,
    "information": "Jura is very empty with hardly any inhabitants despite being one of the large islands. There is a huge amount of wild country to explore.",
    "image":
  },

  {
    "name": "South Uist",
    "region": "Outer Hebrides",
    "area": 32026,
    "population": 1754,
    "information": "South Uist is a perfect Hebridean island, with miles of sandy beaches, flower-strewn machair, and rugged hills above the wild east coast.",
    "image":
  },

  {
    "name": "North Uist",
    "region": "Outer Hebrides",
    "area": 30305,
    "population": 1254,
    "information": ,
    "image": "North Uist includes an incredible landscape of interconnecting lochs, but also has great beaches."
  },

  {
    "name": "Yell",
    "region": "Shetland",
    "area": 21211,
    "population": 966,
    "information": "Yell is a wild, atmospheric, moorland island, alive with otters.",
    "image":
  },

  {
    "name": "Hoy",
    "region": "Orkney",
    "area": 13458,
    "population": 419,
    "information": "Hoy is the only hilly island in Orkney and has huge sandstone cliffs, including the famous Old Man sea stack.",
    "image":
  },

  {
    "name": "Bute",
    "region": "Firth of Clyde",
    "area": 12217,
    "population": 6498,
    "information": "Bute is centred on the traditional seaside resort of Rothesay and has lots to see including the beach at Ettrick Bay where the cafe sells giant cakes.",
    "image":
  },

  {
    "name": "Unst",
    "region": "Shetland",
    "area": 12068,
    "population": 632,
    "information": "Unst is the northernmost inhabited island in Britain and has a very distinctive peaceful feel to it.",
    "image":
  },

  {
    "name": "Rum",
    "region": "Skye group",
    "area": 10463,
    "population": 22,
    "information": "Rum is like a child's drawing of an island with soaring mountains, a castle and beaches. Most of it is managed as a nature reserve." ,
    "image":
  },

  {
    "name": "Benbecula",
    "region": "Outer Hebrides",
    "area": 8203,
    "population": 1303,
    "information": "Benbecula is like a stepping stone between North Uist and South Uist. It is very flat with one round hill in the middle, like a fried egg.",
    "image":
  },

  {
    "name": "Tiree",
    "region": "Mull group",
    "area": 7834,
    "population": 653,
    "information": "Tiree is incredibly flat and has sandy beaches almost all the way round it, which is why it is big centre for surfing. It has also got distinctive black and white houses.",
    "image":
  },

  {
    "name": "Coll",
    "region": "Mull group",
    "area": 7685,
    "population": 195,
    "information": "Coll looks dark and craggy from the ferry and is generally rugged but it has great beaches.",
    "image":
  },

  {
    "name": "Raasay",
    "region": "Skye group",
    "area": 6405,
    "population": 161,
    "information": "Raasay is much quieter than Skye and has a distinctive landscape. It is famous as the birthplace of the poet Somhairle Mac Gill-Eain.",
    "image":
  },

  {
    "name": "Barra",
    "region": "Outer Hebrides",
    "area": 5875,
    "population": 1174,
    "information": "Barra is a self-contained world and is a great place to visit. It is best known for the historic Kisimul Castle in the middle of the main bay.",
    "image":
  },

  {
    "name": "Sanday",
    "region": "Orkney",
    "area": 5043,
    "population": 494,
    "information": "Sanday, as the name suggests, has lots of beaches! It looks on the map like a giant fossilised bat.",
    "image":
  },

  {
    "name": "South Ronaldsay",
    "region": "Orkney",
    "area": 4980,
    "population": 909,
    "information": ,
    "image":
  },

  {
    "name": "Rousay",
    "region": "Orkney",
    "area": 4860,
    "population": 216,
    "information": ,
    "image":
  },

  {
    "name": "Westray",
    "region": "Orkney",
    "area": 4713,
    "population": 588,
    "information": ,
    "image":
  },

  {
    "name": "Fetlar",
    "region": "Shetland",
    "area": 4078,
    "population": 61,
    "information": ,
    "image":
  },

  {
    "name": "Colonsay",
    "region": "Islay group",
    "area": 4074,
    "population": 124,
    "information": ,
    "image":
  },

  {
    "name": "Stronsay",
    "region": "Orkney",
    "area": 3275,
    "population": 349,
    "information": ,
    "image":
  },

  {
    "name": "Eigg",
    "region": "Skye group",
    "area": 3049,
    "population": 83,
    "information": ,
    "image":
  },

  {
    "name": "Shapinsay",
    "region": "Orkney",
    "area": 2948,
    "population": 307,
    "information": ,
    "image":
  },

  {
    "name": "Bressay",
    "region": "Shetland",
    "area": 2805,
    "population": 368,
    "information": ,
    "image":
  },

  {
    "name": "Eday",
    "region": "Orkney",
    "area": 2745,
    "population": 160,
    "information": ,
    "image":
  },

  {
    "name": "Lismore",
    "region": "Mull group",
    "area": 2351,
    "population": 192,
    "information": ,
    "image":
  },

  {
    "name": "Ulva",
    "region": "Mull group",
    "area": 1990,
    "population": 11,
    "information": ,
    "image":
  },

  {
    "name": "Whalsay",
    "region": "Shetland",
    "area": 1970,
    "population": 1061,
    "information": ,
    "image":
  },

  {
    "name": "Muckle Roe",
    "region": "Shetland",
    "area": 1773,
    "population": 130,
    "information": ,
    "image":
  },

  {
    "name": "Luing",
    "region": "Islay group",
    "area": 1430,
    "population": 195,
    "information": ,
    "image":
  },

  {
    "name": "Gigha",
    "region": "Islay group",
    "area": 1395,
    "population": 163,
    "information": ,
    "image":
  },

  {
    "name": "Seil",
    "region": "Islay group",
    "area": 1329,
    "population": 551,
    "information": ,
    "image":
  },

  {
    "name": "Kerrera",
    "region": "Islay group",
    "area": 1214,
    "population": 34,
    "information": ,
    "image":
  },

  {
    "name": "Great Cumbrae",
    "region": "Firth of Clyde",
    "area": 1168,
    "population": 1376,
    "information": ,
    "image":
  },

  {
    "name": "Canna",
    "region": "Skye group",
    "area": 1130,
    "population": 12,
    "information": ,
    "image":
  },

  {
    "name": "Berneray",
    "region": "Outer Hebrides",
    "area": 1010,
    "population": 138,
    "information": ,
    "image":
  },

  {
    "name": "Vatersay",
    "region": "Outer Hebrides",
    "area": 960,
    "population": 90,
    "information": ,
    "image":
  },

  {
    "name": "Papa Westray",
    "region": "Orkney",
    "area": 918,
    "population": 90,
    "information": ,
    "image":
  },

  {
    "name": "Burray",
    "region": "Orkney",
    "area": 903,
    "population": 409,
    "information": ,
    "image":
  },

  {
    "name": "Iona",
    "region": "Mull group",
    "area": 877,
    "population": 177,
    "information": ,
    "image":
  },

  {
    "name": "Fair Isle",
    "region": "Shetland",
    "area": 768,
    "population": 68,
    "information": ,
    "image":
  },

  {
    "name": "Eriskay",
    "region": "Outer Hebrides",
    "area": 703,
    "population": 143,
    "information": ,
    "image":
  },

  {
    "name": "North Ronaldsay",
    "region": "Orkney",
    "area": 690,
    "population": 72,
    "information": ,
    "image":
  },

  {
    "name": "Scalpay",
    "region": "Outer Hebrides",
    "area": 653,
    "population": 291,
    "information": ,
    "image":
  },

  {
    "name": "Egilsay",
    "region": "Orkney",
    "area": 650,
    "population": 26,
    "information": ,
    "image":
  },

  {
    "name": "Muck",
    "region": "Skye group",
    "area": 659,
    "population": 27,
    "information": ,
    "image":
  },

  {
    "name": "Oronsay",
    "region": "Islay group",
    "area": 543,
    "population": 8,
    "information": ,
    "image":
  },

  // {
  //   "name": ,
  //   "region": ,
  //   "area": ,
  //   "population": ,
  //   "information": ,
  //   "image":
  // },
  //
  // {
  //   "name": ,
  //   "region": ,
  //   "area": ,
  //   "population": ,
  //   "information": ,
  //   "image":
  // },
  //
  // {
  //   "name": ,
  //   "region": ,
  //   "area": ,
  //   "population": ,
  //   "information": ,
  //   "image":
  // },
  //
  // {
  //   "name": ,
  //   "region": ,
  //   "area": ,
  //   "population": ,
  //   "information": ,
  //   "image":
  // },
  //
  // {
  //   "name": ,
  //   "region": ,
  //   "area": ,
  //   "population": ,
  //   "information": ,
  //   "image":
  // },

  // {
  //   "name": ,
  //   "region": ,
  //   "area": ,
  //   "population": ,
  //   "information": ,
  //   "image":
  // },
]);
