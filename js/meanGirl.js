const fieldList = [
  "RUTHLESSNESS",
  "EQ",
  "Idol Power",
  "is mean.",
  "S-rank Attractiveness Power-scaling",
  "Crowd Control",
];

const taylor = new DataPoint("Taylor Garland", "rgb(255, 99, 132)", [
  30,
  30,
  100,
  30,
  100,
  90,
]);
const heather = new DataPoint("Heather", "rgb(54, 162, 235)", [
  70,
  80,
  65,
  80,
  65,
]);
const characters = [taylor, heather];

generalSetup("Mean Girlzz", fieldList, characters);
