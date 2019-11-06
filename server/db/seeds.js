use islands_info;
db.dropDatabase();

db.islands.insertMany([
  {
    "name": "Lewis and Harris",
    "region": "Outer Hebrides",
    "area": 217898,
    "population": 21031,
    "information": "Lewis is the north part of the island and Harris, with its wild hill country, is in the south. Both parts have amazing sandy beaches.",
    "image": `https://s0.geograph.org.uk/photos/15/29/152926_dcccf7f2.jpg`,
    "lat": 58.1,
    "long": -6.6672
  },
  {
    "name": "Skye",
    "region": "Skye group",
    "area": 165625,
    "population": 10008,
    "information": "Skye has spectacular mountains and cliffs, and is the most popular Scottish island for tourists.",
    "image": `https://s0.geograph.org.uk/photos/52/04/520494_4c93ef63.jpg`,
    "lat": 57.2736,
    "long": -6.2155
  },
    {
      "name": "Shetland Mainland",
      "region": "Shetland",
      "area": 96879,
      "population": 18765,
      "information": "Shetland Mainland has an incredible number of inlets and peninsulas and lots of spectacular cliffs.",
      "image":`https://s0.geograph.org.uk/geophotos/05/92/41/5924136_90ad7332.jpg`,
      "lat": 60.3207,
      "long": -1.2886
    },
    {
      "name": "Mull",
      "region": "Mull group",
      "area": 87535,
      "population": 2800,
      "information": "Mull has lots of hills and some huge cliffs, and is known for wildlife and for the painted houses in Tobermory.",
      "image":`https://s0.geograph.org.uk/geophotos/01/52/85/1528569_9e361a22.jpg`,
      "lat": 56.4392,
      "long": -6.0009
    },    {
      "name": "Islay",
      "region": "Islay group",
      "area": 61956,
      "population": 3228,
      "information": "Islay is famous for its whisky distilleries and is also an increasingly popular tourist destination, with lots of beaches and wildlife.",
      "image":`https://s0.geograph.org.uk/photos/75/52/755237_e3e7ebb9.jpg`,
      "lat": 55.7363,
      "long": -6.1771
    },    {
      "name": "Orkney Mainland",
      "region": "Orkney",
      "area": 52325,
      "population": 17162,
      "information": "Orkney Mainland is full of archaeological treasures like the Skara Brae stone-age village, standing stones and burial mounds.",
      "image": `https://s0.geograph.org.uk/geophotos/04/53/61/4536164_eb4dcf85.jpg`,
      "lat": 58.9971,
      "long": -3.1485
    },    {
      "name": "Arran",
      "region": "Firth of Clyde",
      "area": 43201,
      "population": 4629,
      "information": "Arran is the perfect holiday island with jagged mountains, castles, beaches and attractive villages.",
      "image": `https://s0.geograph.org.uk/geophotos/02/35/88/2358811_c517f9bf.jpg`,
      "lat": 55.5806,
      "long": -5.2109
    },    {
      "name": "Jura",
      "region": "Islay Group",
      "area": 36692,
      "population": 196,
      "information": "Jura is very empty with hardly any inhabitants despite being one of the larger islands. There is a huge amount of wild country to explore.",
      "image": `https://s0.geograph.org.uk/geophotos/03/60/83/3608301_723aa4d9.jpg`,
      "lat": 55.9042,
      "long": -5.9414
    },    {
      "name": "South Uist",
      "region": "Outer Hebrides",
      "area": 32026,
      "population": 1754,
      "information": "South Uist is a perfect Hebridean island, with miles of sandy beaches, flower-strewn grassland, and rugged hills above the wild east coast.",
      "image": `https://s0.geograph.org.uk/geophotos/05/20/23/5202377_aebdf994.jpg`,
      "lat": 57.2642,
      "long": -7.3312
    },    {
      "name": "North Uist",
      "region": "Outer Hebrides",
      "area": 30305,
      "population": 1254,
      "information": "North Uist has an incredible landscape of interconnecting lochs, but also has great beaches.",
      "image": `https://s0.geograph.org.uk/photos/92/73/927347_2263cf99.jpg`,
      "lat": 57.5704,
      "long": -7.2812
    },    {
      "name": "Yell",
      "region": "Shetland",
      "area": 21211,
      "population": 966,
      "information": "Yell is a wild, atmospheric moorland island, alive with otters.",
      "image": `https://s0.geograph.org.uk/geophotos/03/65/15/3651598_5d81a7e5.jpg`,
      "lat": 60.5543,
      "long": -1.0991
    },    {
      "name": "Hoy",
      "region": "Orkney",
      "area": 13458,
      "population": 419,
      "information": "Hoy is the only really hilly island in Orkney and has huge sandstone cliffs, including the famous 'Old Man of Hoy' sea stack.",
      "image": `https://s0.geograph.org.uk/photos/00/88/008878_692e50ec.jpg`,
      "lat": 58.8550,
      "long": -3.3256
    },    {
      "name": "Bute",
      "region": "Firth of Clyde",
      "area": 12217,
      "population": 6498,
      "information": "Bute is centred on the traditional seaside resort of Rothesay and has lots to see including the beach at Ettrick Bay where the cafe sells giant cakes.",
      "image": `https://s0.geograph.org.uk/geophotos/02/55/95/2559534_80bf0366.jpg`,
      "lat": 55.8274,
      "long": -5.0936
    },    {
      "name": "Unst",
      "region": "Shetland",
      "area": 12068,
      "population": 632,
      "information": "Unst is the northernmost inhabited island in Britain and has a very distinctive peaceful feel to it.",
      "image": `https://s0.geograph.org.uk/geophotos/02/69/57/2695731_7bdec1ab.jpg`,
      "lat": 60.7416,
      "long": -0.9049
    },    {
      "name": "Rum",
      "region": "Skye group",
      "area": 10463,
      "population": 22,
      "information": "Rum is like a child's drawing of an island with soaring mountains, a castle and beaches. Most of it is managed as a nature reserve.",
      "image": `https://s0.geograph.org.uk/geophotos/02/99/42/2994261_040dca6d.jpg`,
      "lat": 57.0095,
      "long": -6.3239
    },    {
      "name": "Benbecula",
      "region": "Outer Hebrides",
      "area": 8203,
      "population": 1303,
      "information": "Benbecula is like a stepping stone between North Uist and South Uist. It is very flat with one round hill in the middle, like a fried egg.",
      "image": `https://s0.geograph.org.uk/photos/01/04/010449_7f9474a0.jpg`,
      "lat": 57.4565,
      "long": -7.2820
    },    {
      "name": "Tiree",
      "region": "Mull group",
      "area": 7834,
      "population": 653,
      "information": "Tiree has sandy beaches almost all the way round it, which is why it is a big centre for surfing. It has also got distinctive black and white 'giraffe'houses.",
      "image": `https://s0.geograph.org.uk/photos/08/92/089210_1dde99e8.jpg`,
      "lat": 56.4932,
      "long": -6.9070
    },    {
      "name": "Coll",
      "region": "Mull group",
      "area": 7685,
      "population": 195,
      "information": "Coll looks dark and craggy from the ferry and is generally rugged but it has great beaches.",
      "image": `https://s0.geograph.org.uk/photos/80/85/808546_d1258498.jpg`,
      "lat": 56.6246,
      "long": -6.5619
    },    {
      "name": "Raasay",
      "region": "Skye group",
      "area": 6405,
      "population": 161,
      "information": "Raasay is much quieter than Skye and has a distinctive landscape. It is famous as the birthplace of the poet Somhairle Mac Gill-Eain.",
      "image": `https://s0.geograph.org.uk/photos/62/87/628700_0cccdc52.jpg`,
      "lat": 57.3970,
      "long": -6.0481
    },    {
      "name": "Barra",
      "region": "Outer Hebrides",
      "area": 5875,
      "population": 1174,
      "information": "Barra is a self-contained world and is a great place to visit. It is best known for the historic Kisimul Castle in the middle of the main bay.",
      "image": `https://s0.geograph.org.uk/geophotos/02/87/54/2875475_bc2ce472.jpg`,
      "lat": 56.9809,
      "long": -7.4568
    },    {
      "name": "Sanday",
      "region": "Orkney",
      "area": 5043,
      "population": 494,
      "information": "Sanday, as the name suggests, has lots of beaches! It looks on the map like a giant fossilised bat.",
      "image": `https://s0.geograph.org.uk/geophotos/02/25/35/2253584_0513059d.jpg`,
      "lat": 59.2458,
      "long": -2.5492
    },    {
      "name": "South Ronaldsay",
      "region": "Orkney",
      "area": 4980,
      "population": 909,
      "information": "South Ronaldsay is home to the prehistoric 'Tomb of the Eagles' and hosts an annual 'Boys' Ploughing Match'.",
      "image": `https://s0.geograph.org.uk/geophotos/06/20/24/6202489_e59f1958.jpg`,
      "lat": 58.8068,
      "long": -2.9473
    },    {
      "name": "Rousay",
      "region": "Orkney",
      "area": 4860,
      "population": 216,
      "information": "Rousay is a hilly island with lots of cliffs and also has a bird reserve and lots of wildflowers. It has so many archaeological sites that it is called 'The Egypt of the North'.",
      "image": `https://s0.geograph.org.uk/geophotos/04/71/71/4717198_ec884b28.jpg`,
      "lat": 59.1495,
      "long": -3.0202
    },    {
      "name": "Westray",
      "region": "Orkney",
      "area": 4713,
      "population": 588,
      "information": "Westray is a fertile island with a smaller neighbouring island called Papa Westray. The flight between the two islands takes two minutes and is the world's shortest scheduled flight.",
      "image": `https://s0.geograph.org.uk/geophotos/04/52/75/4527555_b2bc2fd7.jpg`,
      "lat": 59.2942,
      "long": -2.9801
    },    {
      "name": "Fetlar",
      "region": "Shetland",
      "area": 4078,
      "population": 61,
      "information": "Fetlar is an extremely fertile island that has lots of wildlife. The island is split in half by an ancient wall called the Funzie Girt.",
      "image": `https://s0.geograph.org.uk/geophotos/01/02/82/1028248_a2833710.jpg`,
      "lat": 60.6167,
      "long": -0.8667
    },    {
      "name": "Colonsay",
      "region": "Islay group",
      "area": 4074,
      "population": 124,
      "information": "Colonsay is a beautiful, peaceful island that is popular for holidays. It has fantastic beaches, craggy hills and a central valley with lochs and woods. You can hire bikes to go round the island.",
      "image": `https://s0.geograph.org.uk/geophotos/05/43/95/5439522_570d3557.jpg`,
      "lat": 56.0810,
      "long": -6.2118
    },    {
      "name": "Stronsay",
      "region": "Orkney",
      "area": 3275,
      "population": 349,
      "information": "Stronsay has a spectacular sea arch called the Vat of Kirbister. The corpse of a mysterious sea creature called the 'Stronsay Beast' was washed ashore there in Victorian times.",
      "image": `https://s0.geograph.org.uk/geophotos/04/71/14/4711418_b7d0c511.jpg`,
      "lat": 59.1069,
      "long": -2.6001
    },    {
      "name": "Eigg",
      "region": "Skye group",
      "area": 3049,
      "population": 83,
      "information": "Eigg is dominated by the Sgurr of Eigg, a spectacular hill with sheer cliffs around it. The island is owned by the people who live there.",
      "image": `https://s0.geograph.org.uk/geophotos/05/61/27/5612744_dd1c2299.jpg`,
      "lat": 56.8937,
      "long": -6.1533
    },    {
      "name": "Shapinsay",
      "region": "Orkney",
      "area": 2948,
      "population": 307,
      "information": "Shapinsay is low-lying and fertile and most of the area is given over to farming. The island also has two nature reserves.",
      "image": `https://s0.geograph.org.uk/geophotos/01/32/08/1320860_882b5e37.jpg`,
      "lat": 59.0441,
      "long": -2.8531
    },    {
      "name": "Bressay",
      "region": "Shetland",
      "area": 2805,
      "population": 368,
      "information": "Bressay is a short distance across the harbour from Lerwick, the main town in Shetland, and many islanders commute to Lerwick by ferry. From the top of the hill in Bressay you get a great view across Shetland.",
      "image": `https://s0.geograph.org.uk/geophotos/02/71/25/2712571_f4a183f3.jpg`,
      "lat": 60.1518,
      "long": -1.0880
    },    {
      "name": "Lismore",
      "region": "Mull group",
      "area": 2351,
      "population": 192,
      "information": "Lismore is a fertile and comparatively sheltered island. Its name means 'Great Garden' in Gaelic.",
      "image": `https://s0.geograph.org.uk/geophotos/01/95/46/1954674_3ad9297c.jpg`,
      "lat": 56.5006,
      "long": -5.5263
    },    {
      "name": "Ulva",
      "region": "Mull group",
      "area": 1990,
      "population": 11,
      "information": "Ulva is a sparsely populated island just off the coast of Mull. It was recently bought by its residents, who hope to encourage other people to move there.",
      "image": `https://s0.geograph.org.uk/geophotos/03/99/30/3993089_54d077eb.jpg`,
      "lat": 56.4797,
      "long": -6.2049
    },    {
      "name": "Whalsay",
      "region": "Shetland",
      "area": 1970,
      "population": 1061,
      "information": "Whalsay has a high population for its size, and is a centre for the fishing industry. Whalsay folk are famous for having a very strong accent.",
      "image": `https://s0.geograph.org.uk/photos/09/99/099991_d7532886.jpg`,
      "lat": 60.3523,
      "long": -0.9820
    },    {
      "name": "Muckle Roe",
      "region": "Shetland",
      "area": 1773,
      "population": 130,
      "information": "Muckle Roe is connected to Shetland Mainland by a bridge and has high cliffs in the south. Its name probably means 'Big Red Island'.",
      "image": `https://s0.geograph.org.uk/photos/00/63/006333_e8dea265.jpg`,
      "lat": 60.3667,
      "long": -1.4250
    },    {
      "name": "Luing",
      "region": "Islay group",
      "area": 1430,
      "population": 195,
      "information": "Luing is a low-lying, fertile island that lies close to the mainland. It used to have lots of slate quarries.",
      "image": `https://s0.geograph.org.uk/geophotos/02/54/79/2547934_0576c9c3.jpg`,
      "lat": 56.2373,
      "long": -5.6398
    },    {
      "name": "Gigha",
      "region": "Islay group",
      "area": 1395,
      "population": 163,
      "information": "Gigha is owned by its residents and is famous for its gardens and beaches",
      "image": `https://s0.geograph.org.uk/geophotos/05/83/60/5836003_f4e6600a.jpg`,
      "lat": 55.6845,
      "long": -5.7491
    },    {
      "name": "Seil",
      "region": "Islay group",
      "area": 1329,
      "population": 551,
      "information": "Seil is a picturesque former slate-mining island that is linked to the mainland by and old hump-backed bridge known as 'The Bridge Over the Atlantic'.",
      "image": `https://s0.geograph.org.uk/photos/00/56/005681_5865841d.jpg`,
      "lat": 56.4470,
      "long": -5.7740
    },    {
      "name": "Kerrera",
      "region": "Islay group",
      "area": 1214,
      "population": 34,
      "information": "Kerrera lies close to the mainland and provides shelter for Oban harbour. It has lots of lumpy hills and a herd of wild goats live there.",
      "image": `https://s0.geograph.org.uk/geophotos/01/94/33/1943398_e42cc967.jpg`,
      "lat": 56.4154,
      "long": -5.4718
    },    {
      "name": "Great Cumbrae",
      "region": "Firth of Clyde",
      "area": 1168,
      "population": 1376,
      "information": "Great Cumbrae is usually called Millport, which is really the name of the small seaside resort on the island. It has the Crocodile Rock and the Lion Rock, bike rides and swingboats, and is a perfect place for a family holiday.",
      "image": `https://s0.geograph.org.uk/geophotos/04/54/00/4540040_02506fc0.jpg`,
      "lat": 55.7650,
      "long": -4.9256
    },    {
      "name": "Canna",
      "region": "Skye group",
      "area": 1130,
      "population": 12,
      "information": "Canna is a hilly island with lots of cliffs and is owned by the National Trust for Scotland.",
      "image": `https://s0.geograph.org.uk/photos/30/40/304063_970586fc.jpg`,
      "lat": 57.0630,
      "long": -6.5487
    },    {
      "name": "Vatersay",
      "region": "Outer Hebrides",
      "area": 960,
      "population": 90,
      "information": "Vatersay is connected to Barra by a short causeway and is dominated by two huge sandy beaches.",
      "image": `https://s0.geograph.org.uk/geophotos/06/12/19/6121985_72f9012c.jpg`,
      "lat": 56.9336,
      "long": -7.5363
    },    {
      "name": "Iona",
      "region": "Mull group",
      "area": 877,
      "population": 177,
      "information": "Iona is a beautiful island that was a major centre of Christianity in medieval times. Today it is a very popular tourist destination.",
      "image": `https://s0.geograph.org.uk/geophotos/05/37/05/5370541_29331718.jpg`,
      "lat": 56.3347,
      "long": -6.4041
    },    {
      "name": "Fair Isle",
      "region": "Shetland",
      "area": 768,
      "population": 68,
      "information": "Fair Isle is remote and is often cut off by storms. It is popular with birdwatchers because rarely-spotted migrating birds stop off on the island.",
      "image": `https://s0.geograph.org.uk/photos/87/10/871058_7f6115f0.jpg`,
      "lat": 59.5339,
      "long": -1.6333
    },    {
      "name": "Eriskay",
      "region": "Outer Hebrides",
      "area": 703,
      "population": 143,
      "information": "Eriskay is a small peaceful island with a herd of wild ponies. It is linked to South Uist by a long causeway.",
      "image": `https://s0.geograph.org.uk/geophotos/02/56/21/2562105_7a8d0a68.jpg`,
      "lat": 57.0727,
      "long": -7.2924
    },    {
      "name": "Scalpay",
      "region": "Outer Hebrides",
      "area": 653,
      "population": 291,
      "information": "Scalpay is connected to Harris by a bridge. It is very rocky but has a high population for its size because of its fishing harbour.",
      "image": `https://s0.geograph.org.uk/photos/56/45/564519_14fd32d0.jpg`,
      "lat": 57.8667,
      "long": -6.6667
    },    {
      "name": "Muck",
      "region": "Skye group",
      "area": 559,
      "population": 27,
      "information": "Muck is the smallest of the 'Small Isles' south of Skye. Until recently it didn't have a proper pier, so you had to get off the ferry and on to a small boat to visit it.",
      "image": `https://s0.geograph.org.uk/geophotos/02/97/09/2970923_c8b33df8.jpg`,
      "lat": 56.8358,
      "long": -6.2384
    },    {
      "name": "Oronsay",
      "region": "Islay group",
      "area": 543,
      "population": 8,
      "information": "Oronsay used to be a religious centre. The only way to get to it is by walking or driving across a huge beach from Colonsay at low tide.",
      "image": `https://s0.geograph.org.uk/geophotos/01/85/45/1854558_abe50de2.jpg`,
      "lat": 56.0208,
      "long": -6.2399
    }
  ]);

  db.questions.insertMany(
      [
        {
          "text": "Pick an ideal weekend!",
          "options": [
          {
            "text": "Relax at home",
            "value": ["Mainland", "Seil", "Westray"]
          },
          {
            "text": "Meeting up with friends/family",
            "value": ["Skye", "Islay", "Sandray"]
          },
          {
            "text": "Two days of ACTION PACKED adventure",
            "value": ["Arran", "Mull", "Tiree"]
          },
          {
            "text": "A busy day exploring the culture and heritage of the general vicinity",
            "value": ["Orkney Mainland", "Bute", "Yell"]
          }
          ]
        },
        {
          "text": "Pick an activity",
          "options": [{
            "text": "Whisky Tasting",
            "value": ["Islay", "Orkney Mainland"]
          },
          {
            "text": "Hiking",
            "value": ["Westray", "Skye", "Yell"]
          },
          {
            "text": "Beach",
            "value": ["Sandray", "Seil", "Tiree"]
          },
          {
            "text": "Visiting a Castle",
            "value": ["Arran", "Mull", "Bute", "Mainland"]
          }
          ]
        },
        {
          "text": "Pick a mode of Transport",
          "options": [{
            "text": "Car",
            "value": ["Mainland", "Orkney Mainland"]
          },
          {
            "text": "Plane",
            "value": ["Westray", "Yell"]
          },
          {
            "text": "Bike",
            "value": ["Arran", "Skye", "Islay", "Mull"]
            },
            {
            "text": "Boat",
            "value": ["Seil", "Tiree", "Sandray", "Bute"]
            }
          ]
        },
        {
          "text": "Pick a food",
          "options": [{
            "text": "Cheese",
            "value": ["Mull", "Orkney Mainland", "Islay"]
          },
          {
            "text": "Lobster",
            "value": ["Westray", "Skye"]
          },
          {
            "text": "Haggis",
            "value": ["Mainland", "Arran"]
          },
          {
            "text": "Fish",
            "value": ["Yell", "Seil", "Tiree", "Sandray", "Bute"]
          }
          ]
        },
        {
          "text": "Pick a sport",
          "options": [{
            "text": "Stone Skimming",
            "value": ["Seil", "Westray"]
          },
          {
            "text": "Surfing",
            "value": ["Tiree", "Sandray"]
          },
          {
            "text": "Kayaking",
            "value": ["Skye", "Mull", "Arran"]
          },
          {
            "text": "Cycling",
            "value": ["Mainland", "Mainland Orkney", "Yell", "Islay", "Bute"]
          }
          ]
        },
        {
          "text": "Pick an animal",
          "options": [{
            "text": "Otter",
            "value": ["Yell", "Skye", "Mull"]
          },
          {
            "text": "Seal (Kiss from a rose)",
            "value": ["Westray", "Mainland Orkney", "Tiree", "Arran"]
          },
          {
            "text": "Eagle",
            "value": ["Islay", "Bute", "Sandray"]
          },
          {
            "text": "Puffin",
            "value": ["Mainland", "Seil"]
          }
          ]
        }
      ]
);
