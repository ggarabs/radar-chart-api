exports.getRadarBarConfig = (dataset) => {
  return {
    type: "radar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First Dataset",
          data: dataset,
          fill: true,
          backgroundColor: "rgba(97, 194, 255, 0.2)",
          borderColor: "rgb(97, 194, 255)",
          pointBackgroundColor: "rgb(97, 194, 255)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointBorderWidth: 5,
          pointHoverBorderColor: "rgb(255, 99, 132)",
          pointRadius: 12,
          borderWidth: 10,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        r: {
          angleLines: {
            display: true,
            lineWidth: 6,
          },
          ticks: {
            display: true,
            font: {
              size: 40,
              family: "Arial",
              weight: "bold",
            },
            padding: 30,
          },
          pointLabels: {
            font: {
              size: 40,
              family: "Arial",
              weight: "bold",
            },
          },
          grid: {
            lineWidth: 5,
          },
        },
      },
      elements: {
        line: {
          borderWidth: 6,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          bodyFont: {
            size: 24,
          },
          titleFont: {
            size: 28,
          },
        },
      },
    },
  };
};
