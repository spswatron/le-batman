const container = document.querySelector(".body-container");
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
      label: "Sean",
      data: [77, 13, 92, 30, 26, 46],
      fill: true,
      backgroundColor: "rgba(230,0,126, 0.2)",
      borderColor: "rgb(230,0,126)",
      pointBackgroundColor: "rgb(230,0,126)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(230,0,126)",
    },
    {
      label: "Parker",
      data: [85, 28, 73, 60, 9, 81],
      fill: true,
      backgroundColor: "rgba(46,26,71, 0.2)",
      borderColor: "rgb(46,26,71)",
      pointBackgroundColor: "rgb(46,26,71)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(46,26,71)",
    },
    {
      label: "Henderson",
      data: [64, 63.2, 92, 51, 57, 100],
      fill: true,
      backgroundColor: "rgba(44, 90, 160, 0.2)",
      borderColor: "rgb(44, 90, 160)",
      pointBackgroundColor: "rgb(44, 90, 160)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(44, 90, 160)",
    },
    {
      label: "Santiago",
      data: [85, 64, 25, 77, 8, 67],
      fill: true,
      backgroundColor: "rgba(255,0,0, 0.2)",
      borderColor: "rgb(255,0,0)",
      pointBackgroundColor: "rgb(255,0,0)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255,0,0)",
    },
    {
      label: "Seebas",
      data: [93, 52, 72, 98, 83, 80],
      fill: true,
      backgroundColor: "rgba(255, 103, 0, 0.2)",
      borderColor: "rgb(255, 103, 0)",
      pointBackgroundColor: "rgb(255, 103, 0)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 103, 0)",
    },
    {
      label: "Ashley",
      data: [72, 11, 51, 66, 7.4, 35],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 103, 0)",
    },
  ],
};

//sean - pink
//parker - orange, purple/dark purple
//henderson - dark blue
//

new RadarChart(container, data, "Le ICAS");
