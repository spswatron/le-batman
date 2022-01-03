class Series {
    //color must be rgb
    constructor(
       title, 
       color,
      average,
      lowestDoujin,
      highestDoujin,
      canonQual,
    ) {
      this.title = title;
      this.color = color;
      this.average = average;
      this.lowestDoujin = lowestDoujin;
      this.highestDoujin = highestDoujin;
      this.canonQual = canonQual;
    }
  
    makeLighter(color) {
      let secondHalf = color.split("(")[1];
      secondHalf = secondHalf.substring(0, secondHalf.length - 1);
      return "rgba(" + secondHalf + ",0.2)";
    }
  
    convert() {
      return {
        label: this.title,
        data: [
          this.average,
          this.lowestDoujin,
          this.highestDoujin,
          this.canonQual
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
  
  const hibiEu = new Series(
    "Hibike Euphonium",
    "rgb(53, 56, 57)",
    9,
    8,
    10,
    10
  );

  const aikatsu = new Series(
    "Aikatsu",
    "rgb(53, 56, 57)",
    9,
    8,
    10,
    10
  );

  const bangDream = new Series(
    "BanG Dream",
    "rgb(53, 56, 57)",
    8,
    5,
    10,
    5
  );

  const kantai = new Series(
    "Kantai Collection",
    "rgb(53, 56, 57)",
    8,
    7,
    10,
    3
  );

  const revue = new Series(
    "Revue Starlight",
    "rgb(53, 56, 57)",
    8,
    7,
    9,
    7
  );

  const loveLive = new Series(
      "Love Live OG",
      "rgb(53, 56, 57)",
      7, 5, 10, 8
  );

  const touhou = new Series(
    "Touhou",
    "rgb(53, 56, 57)",
    7, 3, 9, 7
);

const loveLiveSun = new Series(
    "Love Live Sunshine",
    "rgb(53, 56, 57)",
    7, 4, 8, 6
);

const loveLiveSup = new Series(
    "Love Live Superstar",
    "rgb(53, 56, 57)",
    7, 6, 8, 7
);

const kOn = new Series(
    "K-On!",
    "rgb(53, 56, 57)",
    6, 5, 7, 10
);

const girlsUnd = new Series(
    "Girls und Panzer",
    "rgb(53, 56, 57)",
    6, 4, 10, 7
);

const madoka = new Series(
    "Madoka Magica",
    "rgb(53, 56, 57)",
    5, 3, 8, 9
);

const loveLiveNiji = new Series(
    "Love Live Nijigasaki",
    "rgb(53, 56, 57)",
    5, 2, 8, 8
);




  
  let currIndex = 0;
  const shows = [hibiEu, aikatsu, bangDream, kantai, revue, loveLive, touhou, loveLiveSun, loveLiveSup, kOn, girlsUnd, madoka, loveLiveNiji];
  
  let container = document.querySelector(".body-container");
  let color = "rgb(53, 56, 57)";
  let bgColor = "rgba(53, 56, 57, 0.2)";
  const data = {
    labels: [
      "Average Vibes",
      "Worst Doujin",
      "Best! Doujin!",
      "Le Canon Quality",
    ],
    datasets: [],
  };
  
  let radarChart = new RadarChart(container, data, "Le Doujin");
  
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
//   const settingsButton = `<img src="/icons/settings.svg">`;
  const addCharacter = document.getElementById("add-character");
  const deleteCharacter = document.getElementById("delete-character");
  const downloadChart = document.getElementById("download-chart");
  const downloadLink = document.getElementById("for-download");
  const optionsContainer = document.querySelector(".options-container");
  const characterSelect = document.getElementById("character-select");
  const characterNameInput = document.getElementById("character-name");
  //get ranges
  const averageRange = document.getElementById("average-score");
  const worstRange = document.getElementById("worst-score");
  const bestRange = document.getElementById("best-score");
  const canonRange = document.getElementById("canon-score");
  //get number inputs
  const averageNums = document.getElementById("average-num");
  const worstNums = document.getElementById("worst-num");
  const bestNums = document.getElementById("best-num");
  const canonNums = document.getElementById("canon-num");
  //get color picker
  const colorPicker = document.getElementById("batman-color-picker");
  
  const characterChange = (e) => {
    currIndex = Number.parseInt(e.target.value);
    setupCharacterSettings();
  };
  characterSelect.addEventListener("change", characterChange);
  
  const characterNameChange = (e) => {
    shows[currIndex].name = e.target.value;
    setupCharacterSettings();
  };
  characterNameInput.addEventListener("input", characterNameChange);
  
  //changes in ranges
  const averageScoreChange = (e) => {
    const newScore = Number.parseFloat(e.target.value);
    shows[currIndex].average = newScore;
    setupCharacterSettings();
  };
  averageRange.addEventListener("change", averageScoreChange);
  averageNums.addEventListener("change", averageScoreChange);
  
  const worstChange = (e) => {
    const newScore = Number.parseFloat(e.target.value);
    shows[currIndex].lowestDoujin = newScore;
    setupCharacterSettings();
  };
  worstRange.addEventListener("change", worstChange);
  worstNums.addEventListener("change", worstChange);
  
  const bestChange = (e) => {
    const newScore = Number.parseFloat(e.target.value);
    shows[currIndex].highestDoujin = newScore;
    setupCharacterSettings();
  };
  bestRange.addEventListener("change", bestChange);
  bestNums.addEventListener("change", bestChange);
  
  const canonChange = (e) => {
    const newScore = Number.parseFloat(e.target.value);
    shows[currIndex].canonQual = newScore;
    setupCharacterSettings();
  };
  canonRange.addEventListener("change", canonChange);
  canonNums.addEventListener("change", canonChange);
  
  //change in colorpicker
  const colorChange = (e) => {
    shows[currIndex].color = hexToRGB(e.target.value);
    setupCharacterSettings();
  };
  colorPicker.addEventListener("change", colorChange);
  
  const update = () => {
    radarChart.chart.data.datasets = shows.map((c) => c.convert());
    const canvas = document.querySelector(".chartjs-render-monitor");
    if (canvas && canvas.clear) {
        canvas.clear();
        const context = canvas.getContext('2d');  
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    radarChart.chart.update();
  };
  
  const setupCharacterSettings = () => {
    let options = "";
    for (let i = 0; i < shows.length; i++) {
      options += `<option value=${i.toString()}>${shows[i].title}</option>`;
    }
    characterSelect.innerHTML = options;
    characterSelect.value = currIndex.toString();
    characterNameInput.value = shows[currIndex].title;
    //set scores in range
    averageRange.value = shows[currIndex].average.toString();
    worstRange.value = shows[currIndex].lowestDoujin.toString();
    bestRange.value = shows[currIndex].highestDoujin.toString();
    canonRange.value = shows[currIndex].canonQual.toString();
    //set scores in inputs
    averageNums.value = shows[currIndex].average.toString();
    worstNums.value = shows[currIndex].lowestDoujin.toString();
    bestNums.value = shows[currIndex].highestDoujin.toString();
    canonNums.value = shows[currIndex].canonQual.toString();
    //set colors
    averageRange.style.color = shows[currIndex].color;
    worstRange.style.color = shows[currIndex].color;
    bestRange.style.color = shows[currIndex].color;
    canonRange.style.color = shows[currIndex].color;
    colorPicker.value = rgbToHex(shows[currIndex].color);
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
    shows.push(new Series("", getRanRGB(), 75, 75, 75, 75));
    currIndex = shows.length - 1;
    setupCharacterSettings();
  };
  addCharacter.addEventListener("click", addClick);
  
  const deleteClick = (e) => {
    if (shows.length > 0) {
        shows.splice(currIndex, 1);
    }
    currIndex = Math.max(currIndex - 1, 0);
    if (shows.length == 0) {
        shows.push(new Series("", getRanRGB(), 75, 75, 75, 75));
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
  