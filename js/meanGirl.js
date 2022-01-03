const fieldList = [
  "Meanness",
  "Expressiveness",
  "Flawed-ness",
  "Popularity",
  "Compelling-ness",
  "Chaos",
];

const yuna = new DataPoint("Yuna", "rgb(255, 99, 132)", [
  65,
  59,
  90,
  81,
  56,
  55,
  40,
]);
const ueno = new DataPoint("Ueno", "rgb(54, 162, 235)", [
  28,
  48,
  40,
  19,
  27,
  100,
]);
const characters = [yuna, ueno];

generalSetup("Mean Girlzz", fieldList, characters);
