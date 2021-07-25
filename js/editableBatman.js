let container = document.querySelector(".body-container");
let color = "rgb(53, 56, 57)";
let bgColor = "rgba(53, 56, 57, 0.2)";
const data = {
    labels: [
      'Fanbase goes aaaah',
      'Brooder Scooter',
      'Self-righteous Felt Righteous',
      'Biggest Brain',
      'Be Abrasive',
      'Justification of ?Questionable? Methods'
    ],
    datasets: [{
      label: 'The Batman',
      data: [100, 90, 70, 50, 70, 75],
      fill: true,
      backgroundColor: bgColor,
      borderColor: color,
      pointBackgroundColor: color,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: color
    },
    {
      label: 'Reigen',
      data: [95, 10, 65, 65, 40, 50],
      fill: true,
      backgroundColor: bgColor,
      borderColor: color,
      pointBackgroundColor: color,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: color
    }, {
      label: 'Kiji',
      data: [35, 30, 30, 12, 60, 30],
      fill: true,
      backgroundColor: bgColor,
      borderColor: color,
      pointBackgroundColor: color,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: color
    },
    {
      label: 'Ueno',
      data: [40, 15, 80, 75, 80, 70],
      fill: true,
      backgroundColor: bgColor,
      borderColor: color,
      pointBackgroundColor: color,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: color
    }]
  };

  //1. How much is they liked by everyone? by fanbase (Fanbase goes aaaah)
  //2. To what degree do they believe they are ultimately in the right 
  //3. Justification of Questionable Methods
  //4. Intelligence
  //5. abrasiveness
  //6. Brooder

  let radarChart = new RadarChart(container, data, "Le Batman");


  const characterList = document.getElementById("form-stacked-select");
  const newOption = document.createElement("option");
  newOption.value = 
  newOption.text = "hello world";
  characterList.add(newOption);

  const colorPicker = document.getElementById("batman-color-picker");
  colorPicker.addEventListener("input", (e) => {
    const rgbValue = hexToRGB(e.target.value);
    color = rgbValue;
    bgColor = rgbValue.substring(0, rgbValue.length - 1) + ",0.2)"
    console.log(color, bgColor)
  })

  /** 
   * https://css-tricks.com/converting-color-spaces-in-javascript/
  */
  function hexToRGB(h) {
    let r = 0, g = 0, b = 0;
  
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
    
    return "rgb("+ +r + "," + +g + "," + +b + ")";
  }

