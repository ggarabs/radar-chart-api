const fs = require("fs");
const path = require("path");
const { getRadarBarConfig } = require("./chartConfig");
const { renderChartToBuffer } = require("./chartRenderer");

exports.generateRadarBar = async (months) => {
  try {
    const dataset = Object.values(months);

    const config = getRadarBarConfig(dataset);

    const buffer = await renderChartToBuffer(config);

    const imagePath = path.join(__dirname, "../../public/img.jpg");

    fs.writeFileSync(imagePath, buffer);

    const base64Img = fs.readFileSync(imagePath, "base64");

    console.log("Imagem gerada com sucesso em: ", imagePath);

    return base64Img;
  } catch (error) {
    console.error("Erro ao gerar o gráfico: ", error);
    throw error;
  }
};
