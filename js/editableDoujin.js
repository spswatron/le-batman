const fieldList = [
  "Average Vibes",
  "Worst Doujin",
  "Best! Doujin",
  "Le Canon Quality",
];

const hibiEu = new DataPoint("Hibike Euphonium", "rgb(53, 56, 57)", [
  9,
  8,
  10,
  10,
]);

const aikatsu = new DataPoint("Aikatsu", "rgb(53, 56, 57)", [9, 8, 10, 10]);

const bangDream = new DataPoint("BanG Dream", "rgb(53, 56, 57)", [8, 5, 10, 5]);

const kantai = new DataPoint("Kantai Collection", "rgb(53, 56, 57)", [
  8,
  7,
  10,
  3,
]);

const revue = new DataPoint("Revue Starlight", "rgb(53, 56, 57)", [8, 7, 9, 7]);

const loveLive = new DataPoint("Love Live OG", "rgb(53, 56, 57)", [
  7,
  5,
  10,
  8,
]);

const touhou = new DataPoint("Touhou", "rgb(53, 56, 57)", [7, 3, 9, 7]);

const loveLiveSun = new DataPoint("Love Live Sunshine", "rgb(53, 56, 57)", [
  7,
  4,
  8,
  6,
]);

const loveLiveSup = new DataPoint("Love Live Superstar", "rgb(53, 56, 57)", [
  7,
  6,
  8,
  7,
]);

const kOn = new DataPoint("K-On!", "rgb(53, 56, 57)", [6, 5, 7, 10]);

const girlsUnd = new DataPoint("Girls und Panzer", "rgb(53, 56, 57)", [
  6,
  4,
  10,
  7,
]);

const madoka = new DataPoint("Madoka Magica", "rgb(53, 56, 57)", [5, 3, 8, 9]);

const loveLiveNiji = new DataPoint("Love Live Nijigasaki", "rgb(53, 56, 57)", [
  5,
  2,
  8,
  8,
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
