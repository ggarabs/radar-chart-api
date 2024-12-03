const fs = require("fs");
const path = require("path");
const { getRadarBarConfig } = require("./chartConfig");
const { renderChartToBuffer } = require("./chartRenderer");

exports.generateRadarBar = async (months) => {
  try {
    const dataset = Object.values(months);

    const config = getRadarBarConfig(dataset);

    const buffer = await renderChartToBuffer(config);

    const imagePath = path.join(__dirname, "../../public/teste.jpg");

    fs.writeFileSync(imagePath, buffer);
    console.log("Imagem gerada com sucesso em: ", imagePath);

    return imagePath;
  } catch (error) {
    console.error("Erro ao gerar o gráfico: ", error);
    throw error;
  }
};
