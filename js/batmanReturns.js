let container = document.querySelector(".body-container");
const data = {
  labels: [
    "Fanbase goes aaaah",
    "Brooder Scooter",
    "Self-righteous Felt Righteous",
    "Biggest Brain",
    "Be Abrasive",
    "Justification of ?Questionable? Methods",
  ],
  datasets: [
    {
      label: "The Batman",
      data: [100, 90, 65, 63.2, 74.8, 68],
      fill: true,
      backgroundColor: "rgba(53, 56, 57, 0.2)",
      borderColor: "rgb(53, 56, 57)",
      pointBackgroundColor: "rgb(53, 56, 57)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(53, 56, 57)",
    },
    {
      label: "John",
      data: [97, 80, 98, 54, 77, 96],
      fill: true,
      backgroundColor: "rgba(157, 127, 97, 0.2)",
      borderColor: "rgb(157, 127, 97)",
      pointBackgroundColor: "rgb(157, 127, 97)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(157, 127, 97)",
    },
    {
      label: "Andrew",
      data: [38, 84, 39, 42, 31, 9.29],
      fill: true,
      backgroundColor: "rgba(0,191,255, 0.2)",
      borderColor: "rgb(0,191,255)",
      pointBackgroundColor: "rgb(0,191,255)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(0,191,255)",
    },
    {
      label: "Taylor!",
      data: [23, 78, 81, 18, 100, 55],
      fill: true,
      backgroundColor: "rgba(250, 94, 167, 0.2)",
      borderColor: "rgb(250, 94, 167)",
      pointBackgroundColor: "rgb(250, 94, 167)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(250, 94, 167)",
    },
    {
      label: "Angela",
      data: [34, 27, 29, 18, 92, 62],
      fill: true,
      backgroundColor: "rgba(192,198,201, 0.2)",
      borderColor: "rgb(192,198,201)",
      pointBackgroundColor: "rgb(192,198,201)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(192,198,201)",
    },
    {
      label: "Daniel",
      data: [81, 3, 53, 19, 10, 34],
      fill: true,
      backgroundColor: "rgba(255,0,0, 0.2)",
      borderColor: "rgb(1255,0,0)",
      pointBackgroundColor: "rgb(255,0,0)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255,0,0)",
    },
  ],
};

//1. How much is they liked by everyone? by fanbase (Fanbase goes aaaah)
//2. To what degree do they believe they are ultimately in the right
//3. Justification of Questionable Methods
//4. Intelligence
//5. abrasiveness
//6. Brooder

let radarChart = new RadarChart(container, data, "Le Batman Returns");
