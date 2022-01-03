class Character {
  //color must be rgb
  constructor(
    name,
    color,
    fanScore,
    broodScoot,
    righteousness,
    bigBrain,
    abrasive,
    justifCount
  ) {
    this.name = name;
    this.color = color;
    this.fanScore = fanScore;
    this.broodScoot = broodScoot;
    this.righteousness = righteousness;
    this.bigBrain = bigBrain;
    this.abrasive = abrasive;
    this.justifCount = justifCount;
  }

  makeLighter(color) {
    let secondHalf = this.color.split("(")[1];
    secondHalf = secondHalf.substring(0, secondHalf.length - 1);
    return "rgba(" + secondHalf + ",0.2)";
  }

  convert() {
    return {
      label: this.name,
      data: [
        this.fanScore,
        this.broodScoot,
        this.righteousness,
        this.bigBrain,
        this.abrasive,
        this.justifCount,
      ],
      fill: true,
      backgroundColor: this.makeLighter(this.color),
      borderColor: this.color,
      pointBackgroundColor: this.color,
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: this.color,
    };
  }
}

const theBatman = new Character(
  "The Batman",
  "rgb(53, 56, 57)",
  100,
  90,
  70,
  50,
  70,
  75
);

let currIndex = 0;
const characters = [theBatman];

let container = document.querySelector(".body-container");
let color = "rgb(53, 56, 57)";
let bgColor = "rgba(53, 56, 57, 0.2)";
const data = {
  labels: [
    "Fanbase goes aaaah",
    "Brooder Scooter",
    "Self-righteous Felt Righteous",
    "Biggest Brain",
    "Be Abrasive",
    "Justification of ?Questionable? Methods",
  ],
  datasets: [],
};

let radarChart = new RadarChart(container, data, "Le Batman");

/**
 * https://css-tricks.com/converting-color-spaces-in-javascript/
 */
function hexToRGB(h) {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return "rgb(" + +r + "," + +g + "," + +b + ")";
}

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgb) {
  rgb = rgb.split("(")[1];
  let [r, g, b] = rgb.substring(0, rgb.length - 1).split(",");
  [r, g, b] = [r, g, b].map((s) => Number.parseInt(s));
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// every after this is about OPTIONS
const settingsButton = `<img src="/icons/settings.svg">`;
const addCharacter = document.getElementById("add-character");
const deleteCharacter = document.getElementById("delete-character");
const downloadChart = document.getElementById("download-chart");
const downloadLink = document.getElementById("for-download");
const optionsContainer = document.querySelector(".options-container");
const characterSelect = document.getElementById("character-select");
const characterNameInput = document.getElementById("character-name");
//get ranges
const fanbaseRange = document.getElementById("fanbase-score");
const brooderRange = document.getElementById("brooder-score");
const righteousRange = document.getElementById("righteous-score");
const brainRange = document.getElementById("brain-score");
const abrasiveRange = document.getElementById("abrasive-score");
const justRange = document.getElementById("justif-score");
//get number inputs
const fanbaseNums = document.getElementById("fanbase-num");
const brooderNums = document.getElementById("brooder-num");
const righteousNums = document.getElementById("righteous-num");
const brainNums = document.getElementById("brain-num");
const abrasiveNums = document.getElementById("abrasive-num");
const justNums = document.getElementById("justif-num");
//get color picker
const colorPicker = document.getElementById("batman-color-picker");

const prevent = (e) => {
  if (e.keyCode == 13) {
    e.preventDefault();
  }
}
fanbaseRange.addEventListener("keyup", prevent);
brooderRange.addEventListener("keyup", prevent);
righteousRange.addEventListener("keyup", prevent);
brainRange.addEventListener("keyup", prevent);
abrasiveRange.addEventListener("keyup", prevent);
justRange.addEventListener("keyup", prevent);
characterNameInput.addEventListener("keyup", prevent);

const characterChange = (e) => {
  currIndex = Number.parseInt(e.target.value);
  setupCharacterSettings();
};
characterSelect.addEventListener("change", characterChange);

const characterNameChange = (e) => {
  characters[currIndex].name = e.target.value;
  setupCharacterSettings();
};
characterNameInput.addEventListener("input", characterNameChange);

//changes in ranges
const fanScoreChange = (e) => {
  const newScore = Number.parseFloat(e.target.value) * 10;
  characters[currIndex].fanScore = newScore;
  setupCharacterSettings();
};
fanbaseRange.addEventListener("change", fanScoreChange);

const brooderChange = (e) => {
  const newScore = Number.parseFloat(e.target.value) * 10;
  characters[currIndex].broodScoot = newScore;
  setupCharacterSettings();
};
brooderRange.addEventListener("change", brooderChange);

const righteousChange = (e) => {
  const newScore = Number.parseFloat(e.target.value) * 10;
  characters[currIndex].righteousness = newScore;
  setupCharacterSettings();
};
righteousRange.addEventListener("change", righteousChange);

const abrasiveChange = (e) => {
  const newScore = Number.parseFloat(e.target.value) * 10;
  characters[currIndex].abrasive = newScore;
  setupCharacterSettings();
};
abrasiveRange.addEventListener("change", abrasiveChange);

const brainChange = (e) => {
  const newScore = Number.parseFloat(e.target.value) * 10;
  characters[currIndex].bigBrain = newScore;
  setupCharacterSettings();
};
brainRange.addEventListener("change", brainChange);

const justChange = (e) => {
  const newScore = Number.parseFloat(e.target.value) * 10;
  characters[currIndex].justifCount = newScore;
  setupCharacterSettings();
};
justRange.addEventListener("change", justChange);

//changes in numInputs
const fanScoreNumChange = (e) => {
  const newScore = Number.parseFloat(e.target.value);
  characters[currIndex].fanScore = newScore;
  setupCharacterSettings();
};
fanbaseNums.addEventListener("change", fanScoreNumChange);

const brooderNumChange = (e) => {
  const newScore = Number.parseFloat(e.target.value);
  characters[currIndex].broodScoot = newScore;
  setupCharacterSettings();
};
brooderNums.addEventListener("change", brooderNumChange);

const righteousNumChange = (e) => {
  const newScore = Number.parseFloat(e.target.value);
  characters[currIndex].righteousness = newScore;
  setupCharacterSettings();
};
righteousNums.addEventListener("change", righteousNumChange);

const abrasiveNumChange = (e) => {
  const newScore = Number.parseFloat(e.target.value);
  characters[currIndex].abrasive = newScore;
  setupCharacterSettings();
};
abrasiveNums.addEventListener("change", abrasiveNumChange);

const brainNumChange = (e) => {
  const newScore = Number.parseFloat(e.target.value);
  characters[currIndex].bigBrain = newScore;
  setupCharacterSettings();
};
brainNums.addEventListener("change", brainNumChange);

const justNumChange = (e) => {
  const newScore = Number.parseFloat(e.target.value);
  characters[currIndex].justifCount = newScore;
  setupCharacterSettings();
};
justNums.addEventListener("change", justNumChange);

//change in colorpicker
const colorChange = (e) => {
  characters[currIndex].color = hexToRGB(e.target.value);
  setupCharacterSettings();
};
colorPicker.addEventListener("change", colorChange);

const update = () => {
  radarChart.chart.data.datasets = characters.map((c) => c.convert());
  radarChart.chart.update();
};

const setupCharacterSettings = () => {
  let options = "";
  for (let i = 0; i < characters.length; i++) {
    options += `<option value=${i.toString()}>${characters[i].name}</option>`;
  }
  characterSelect.innerHTML = options;
  characterSelect.value = currIndex.toString();
  characterNameInput.value = characters[currIndex].name;
  //set scores in range
  fanbaseRange.value = (characters[currIndex].fanScore / 10).toString();
  brooderRange.value = (characters[currIndex].broodScoot / 10).toString();
  righteousRange.value = (characters[currIndex].righteousness / 10).toString();
  brainRange.value = (characters[currIndex].bigBrain / 10).toString();
  abrasiveRange.value = (characters[currIndex].abrasive / 10).toString();
  justRange.value = (characters[currIndex].justifCount / 10).toString();
  //set scores in inputs
  fanbaseNums.value = characters[currIndex].fanScore.toString();
  brooderNums.value = characters[currIndex].broodScoot.toString();
  righteousNums.value = characters[currIndex].righteousness.toString();
  brainNums.value = characters[currIndex].bigBrain.toString();
  abrasiveNums.value = characters[currIndex].abrasive.toString();
  justNums.value = characters[currIndex].justifCount.toString();
  //set colors
  fanbaseRange.style.color = characters[currIndex].color;
  brooderRange.style.color = characters[currIndex].color;
  righteousRange.style.color = characters[currIndex].color;
  brainRange.style.color = characters[currIndex].color;
  abrasiveRange.style.color = characters[currIndex].color;
  justRange.style.color = characters[currIndex].color;
  colorPicker.value = rgbToHex(characters[currIndex].color);
  update();
};
setupCharacterSettings();

const getRanRGB = () => {
  return (
    "rgb(" +
    Math.floor(Math.random() * 255).toString() +
    "," +
    Math.floor(Math.random() * 255).toString() +
    "," +
    Math.floor(Math.random() * 255).toString() +
    ")"
  );
};
const addClick = (e) => {
  characters.push(new Character("", getRanRGB(), 75, 75, 75, 75, 75, 75));
  currIndex = characters.length - 1;
  setupCharacterSettings();
};
addCharacter.addEventListener("click", addClick);

const deleteClick = (e) => {
  if (characters.length > 0) {
    characters.splice(currIndex, 1);
  }
  currIndex = Math.max(currIndex - 1, 0);
  if (characters.length == 0) {
    characters.push(new Character("", getRanRGB(), 75, 75, 75, 75, 75, 75));
  }
  setupCharacterSettings();
  e.preventDefault();
}
deleteCharacter.addEventListener("click", deleteClick);

const downloadClick = (e) => {
  const radarCanvas = document.querySelector(".chartjs-render-monitor");
  ctx = radarCanvas.getContext("2d");
  // set the ctx to draw beneath your current content
  ctx.globalCompositeOperation = "destination-over";
  // set the fill color to white
  ctx.fillStyle = "white";
  // apply fill starting from point (0,0) to point (canvas.width,canvas.height)
  // these two points are the top left and the bottom right of the canvas
  ctx.fillRect(0, 0, radarCanvas.width, radarCanvas.height);
  const dataUrl = radarCanvas.toDataURL("image/png", 1.0);
  downloadLink.href = dataUrl;
  downloadLink.click();
};
downloadChart.addEventListener("click", downloadClick);
