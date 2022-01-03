const fields = document.getElementById("field-container");
const selector = document.getElementById("character-select");
const nameLabel = document.getElementById("character-name");
const colorPicker = document.getElementById("color-picker");
const addButton = document.getElementById("add-character");
const deleteButton = document.getElementById("delete-character");
let currIndex = 0;

//general hex to rgb/rgb to hex utility conversion functions
function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function hexToRGB(h) {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (h.length === 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 digits
  } else if (h.length === 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return "rgb(" + +r + "," + +g + "," + +b + ")";
}

function rgbToHex(rgb) {
  rgb = rgb.split("(")[1];
  let [r, g, b] = rgb.substring(0, rgb.length - 1).split(",");
  [r, g, b] = [r, g, b].map((s) => Number.parseInt(s));
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const makeLighter = (color) => {
  let secondHalf = color.split("(")[1];
  secondHalf = secondHalf.substring(0, secondHalf.length - 1);
  return "rgba(" + secondHalf + ",0.2)";
};

//general datapoint class for documentation purposes
class DataPoint {
  constructor(label, color, fields) {
    this.label = label;
    this.color = color;
    this.fields = fields;
  }
  convert() {
    return {
      label: this.label,
      data: this.fields,
      fill: true,
      backgroundColor: makeLighter(this.color),
      borderColor: this.color,
      pointBackgroundColor: this.color,
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: this.color,
    };
  }
}

const defaultData = (fieldSize, max = 100) => {
  const fields = [];
  for (let i = 0; i < fieldSize; i++) {
    fields.push(Math.floor(0.75 * max));
  }
  return new DataPoint("", getRanRGB(), fields);
};

//the max should be an integer
const setUpFields = (fieldList, datapoints, chart, max) => {
  //update function for updating radar chart
  const update = () => {
    chart.chart.data.datasets = datapoints.map((c) => c.convert());
    chart.chart.update();
  };
  //set up options in select
  const setSelectOptions = () => {
    let options = "";
    for (let i = 0; i < datapoints.length; i++) {
      options += `<option id=${
        i.toString() + "-option"
      } value=${i.toString()}>${datapoints[i].label}</option>`;
    }
    selector.innerHTML = options;
  };
  setSelectOptions();
  selector.value = currIndex.toString();
  const changeCharacter = () => {
    selector.value = currIndex.toString();
    nameLabel.value = datapoints[currIndex].label;
    for (let i = 0; i < fieldList.length; i++) {
      const newVal = datapoints[currIndex].fields[i];
      document.getElementById(i.toString() + "-score").value = newVal;
      document.getElementById(i.toString() + "-num").value = newVal;
    }
  };
  const selectChange = (e) => {
    currIndex = Number.parseInt(e.target.value);
    changeCharacter();
  };
  selector.addEventListener("change", selectChange);
  //set up name field
  nameLabel.value = datapoints[currIndex].label;
  const nameChange = (e) => {
    datapoints[currIndex].label = e.target.value;
    document.getElementById(currIndex.toString() + "-option").innerHTML =
      e.target.value;
    update();
  };
  nameLabel.addEventListener("input", nameChange);
  //add html for editable fields
  for (let i = 0; i < fieldList.length; i++) {
    const field = `<div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text"
            >${fieldList[i]}</label
          >
          <div class="range-combo uk-form-controls">
            <input
              class="uk-range"
              value=${datapoints[currIndex].fields[i]}
              id=${i.toString() + "-score"}
              type="range"
              min="0"
              max="${Number.parseInt(max)}"
              step="1"
            />
            <input
              id=${i.toString() + "-num"}
              value=${datapoints[currIndex].fields[i]}
              class="uk-input uk-form-width-mini"
              type="number"
              min="0"
              max="${Number.parseInt(max)}"
              step="1"
            />
          </div>
        </div>`;
    fields.innerHTML += field;
  }
  //add listener events for editable fields
  for (let i = 0; i < fieldList.length; i++) {
    const fieldChange = (e) => {
      // console.log(e);
      const newVal = Number.parseFloat(e.target.value);
      datapoints[currIndex].fields[i] = newVal;
      document.getElementById(i.toString() + "-score").value = newVal;
      document.getElementById(i.toString() + "-num").value = newVal;
      update();
    };
    const ranger = document.getElementById(i.toString() + "-score");
    const numInput = document.getElementById(i.toString() + "-num");
    ranger.addEventListener("change", fieldChange);
    numInput.addEventListener("change", fieldChange);
  }
  //set up color picker
  colorPicker.value = rgbToHex(datapoints[currIndex].color);
  const colorChange = (e) => {
    const newColor = hexToRGB(e.target.value);
    datapoints[currIndex].color = newColor;
    update();
  };
  colorPicker.addEventListener("change", colorChange);
  //set up add button
  const addClick = (e) => {
    datapoints.push(defaultData(fieldList.length, max));
    currIndex = datapoints.length - 1;
    setSelectOptions();
    changeCharacter();
    update();
  };
  addButton.addEventListener("click", addClick);
  //set up delete button
  const deleteClick = (e) => {
    datapoints.splice(currIndex, 1);
    currIndex = Math.max(0, currIndex - 1);
    if (datapoints.length === 0) {
      datapoints.push(defaultData(fieldList.length, max));
    }
    setSelectOptions();
    changeCharacter();
    update();
  };
  deleteButton.addEventListener("click", deleteClick);
};

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

//set up fields and radar chart
const generalSetup = (title, fieldList, datapoints, max = 100) => {
  document.title = title;
  let container = document.querySelector(".body-container");

  const dataSets = [];
  for (const datapoint of datapoints) {
    dataSets.push(datapoint.convert());
  }

  if (dataSets.length === 0) {
    dataSets.push(defaultData(fieldList.length, max));
  }
  const data = {
    labels: fieldList,
    datasets: dataSets,
  };

  const radarChart = new RadarChart(container, data, title);
  setUpFields(fieldList, datapoints, radarChart, max);
  return radarChart;
};
