const { ChartJSNodeCanvas } = require("chartjs-node-canvas");

exports.renderChartToBuffer = async (config) => {
  const chartJSNodeCanvas = new ChartJSNodeCanvas({
    width: 2000,
    height: 2000,
    backgroundColour: "white",
    devicePixelRatio: 6,
  });

  try {
    const buffer = await chartJSNodeCanvas.renderToBuffer(config, "image/jpeg");
    return buffer;
  } catch (error) {
    throw new Error(`Erro ao renderizar o gráfico: ${error.message}`);
  }
};
