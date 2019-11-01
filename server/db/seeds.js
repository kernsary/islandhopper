use islands_info;
db.dropDatabase();

db.islands.insertMany([
  {
    "name": "Skye",
    "region": "Skye Group",
    "area": 165625,
    "population": 23082,
    "information": "Skye has spectacular mountains and cliffs, and is the most popular Scottish island for tourists.",
    "image": `https://www.scottishfield.co.uk/wp-content/uploads/sites/101/2019/08/Fairy-Pools-waterfall-in-Glen-Brittle-surounded-by-mighty-mountains-Black-Cuillin-978x624.jpg`
  }
]);
