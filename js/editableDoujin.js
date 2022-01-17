const fieldList = [
  "Average Vibes",
  "Best! Doujin",
  "Le Canon Quality",
  "Worst Doujin",
];

const hibiEu = new DataPoint("Hibike Euphonium", "rgb(0, 253, 255)", [
  9,
  10,
  10,
  8
]);

const aikatsu = new DataPoint("Aikatsu", "rgb(255, 251, 0)", [9, 10, 10, 8]);

const bangDream = new DataPoint("BanG Dream", "rgb(48, 33, 146)", [8, 10, 5, 5]);

const kantai = new DataPoint("Kantai Collection", "rgb(0, 140, 180)", [
  8,
  10,
  3,
  7
]);

const revue = new DataPoint("Revue Starlight", "rgb(207, 49, 56)", [8, 9, 7, 7]);

const loveLive = new DataPoint("Love Live OG", "rgb(255, 147, 0)", [
  7,
  10,
  8,
  5
]);

const touhou = new DataPoint("Touhou", "rgb(148, 17, 0)", [7, 9, 7, 3]);

const loveLiveSun = new DataPoint("Love Live Sunshine", "rgb(53, 56, 57)", [
  7,
  8,
  6,
  4
]);

const loveLiveSup = new DataPoint("Love Live Superstar", "rgb(0, 253, 255)", [
  7,
  6,
  8,
  7,
]);

const kOn = new DataPoint("K-On!", "rgb(255, 255, 255)", [6, 7, 10, 5]);

const girlsUnd = new DataPoint("Girls und Panzer", "rgb(255, 126, 121)", [
  6,
  10,
  7,
  4
]);

const madoka = new DataPoint("Madoka Magica", "rgb(255, 64, 255)", [5, 8, 9, 3]);

const loveLiveNiji = new DataPoint("Love Live Nijigasaki", "rgb(0, 0, 0)", [
  5,
  8,
  8,
  2
]);

const shows = [
  hibiEu,
  aikatsu,
  bangDream,
  kantai,
  revue,
  loveLive,
  touhou,
  loveLiveSun,
  loveLiveSup,
  kOn,
  girlsUnd,
  madoka,
  loveLiveNiji,
];

generalSetup("Le Doujin", fieldList, shows, 10);
