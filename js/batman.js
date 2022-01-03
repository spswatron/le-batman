// let container = document.querySelector(".body-container");
// const data = {
//     labels: [
//       'Who tf Cares',
//       'Stoic Broic',
//       'Hates Superman',
//       'Sean Hates',
//       'Deeper Than He Seems',
//       'Is Main Character of Critically Acclaimed Series',
//       'Dead Inside'
//     ],
//     datasets: [{
//       label: 'The Batman',
//       data: [65, 95, 30, 81, 56, 55, 40],
//       fill: true,
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgb(255, 99, 132)',
//       pointBackgroundColor: 'rgb(255, 99, 132)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgb(255, 99, 132)'
//     }, {
//       label: 'Kiji',
//       data: [50, 30, 2, 19, 30, 5, 80],
//       fill: true,
//       backgroundColor: 'rgba(54, 162, 235, 0.2)',
//       borderColor: 'rgb(54, 162, 235)',
//       pointBackgroundColor: 'rgb(54, 162, 235)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgb(54, 162, 235)'
//     }]
//   };

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
      data: [100, 90, 70, 50, 70, 75],
      fill: true,
      backgroundColor: "rgba(53, 56, 57, 0.2)",
      borderColor: "rgb(53, 56, 57)",
      pointBackgroundColor: "rgb(53, 56, 57)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(53, 56, 57)",
    },
    {
      label: "Reigen",
      data: [95, 10, 65, 65, 40, 50],
      fill: true,
      backgroundColor: "rgba(255,127,80, 0.2)",
      borderColor: "rgb(255,127,80)",
      pointBackgroundColor: "rgb(255,127,80)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255,127,80)",
    },
    {
      label: "Kiji",
      data: [35, 30, 30, 12, 60, 30],
      fill: true,
      backgroundColor: "rgba(192,198,201, 0.2)",
      borderColor: "rgb(192,198,201)",
      pointBackgroundColor: "rgb(192,198,201)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(192,198,201)",
    },
    {
      label: "Ueno",
      data: [40, 15, 80, 75, 80, 70],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};

//1. How much is they liked by everyone? by fanbase (Fanbase goes aaaah)
//2. To what degree do they believe they are ultimately in the right
//3. Justification of Questionable Methods
//4. Intelligence
//5. abrasiveness
//6. Brooder

let radarChart = new RadarChart(container, data, "Le Batman");
