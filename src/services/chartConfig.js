const Chart = require("chart.js");
const ChartDataLabels = require("chartjs-plugin-datalabels");

exports.getRadarBarConfig = (dataset) => {
  return {
    type: "radar",
    plugins: [ChartDataLabels],
    data: {
      labels: [
        "1-Governança e Sucessão",
        "2-Resultados do Negócios",
        "3-Gente e Cultura",
        "4-Tático Finalístico",
        "5-Tático Suporte",
        "6-Operacional",
      ],
      datasets: [
        {
          data: dataset,
          fill: true,
          backgroundColor: "rgba(69, 177, 235, 0.5)",
          borderColor: "rgb(97, 194, 255)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        r: {
          min: 0,
          max: 100,
          angleLines: {
            display: true,
            lineWidth: 6,
          },
          ticks: {
            stepSize: 20,
            display: true,
            font: {
              size: 40,
              family: "Arial",
            },
          },
          pointLabels: {
            font: {
              size: 60,
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
      layout: {
        padding: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          color: "#000",
          font: {
            size: 47,
            weight: 600,
          },
          backgroundColor: "rgb(210, 210, 210)",
          borderWidth: 4,
          borderColor: "rgba(195, 195, 195, 1)",
          borderRadius: 20,
          padding: 18,
          formatter: (value) => value,
        },
        tooltip: {
          bodyFont: {
            size: 24,
          },
        },
      },
    },
  };
};
