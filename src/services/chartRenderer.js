const { ChartJSNodeCanvas } = require("chartjs-node-canvas");

exports.renderChartToBuffer = async (config) => {
  const chartJSNodeCanvas = new ChartJSNodeCanvas({
    width: 2200,
    height: 1800,
    devicePixelRatio: 6,
  });

  try {
    const buffer = await chartJSNodeCanvas.renderToBuffer(config);
    return buffer;
  } catch (error) {
    throw new Error(`Erro ao renderizar o gráfico: ${error.message}`);
  }
};
