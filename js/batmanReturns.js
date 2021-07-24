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
      'Fanbase goes aaaah',
      'Brooder Scooter',
      'Self-righteous Felt Righteous',
      'Biggest Brain',
      'Be Abrasive',
      'Justification of ?Questionable? Methods'
    ],
    datasets: [{
      label: 'The Batman',
      data: [100, 90, 65, 63.2, 74.8, 68],
      fill: true,
      backgroundColor: 'rgba(53, 56, 57, 0.2)',
      borderColor: 'rgb(53, 56, 57)',
      pointBackgroundColor: 'rgb(53, 56, 57)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(53, 56, 57)'
    }
]
  };

  //1. How much is they liked by everyone? by fanbase (Fanbase goes aaaah)
  //2. To what degree do they believe they are ultimately in the right 
  //3. Justification of Questionable Methods
  //4. Intelligence
  //5. abrasiveness
  //6. Brooder

  let radarChart = new RadarChart(container, data, "Le Batman Returns");


