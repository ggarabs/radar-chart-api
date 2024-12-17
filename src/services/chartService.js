const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { getRadarBarConfig } = require("./chartConfig");
const { renderChartToBuffer } = require("./chartRenderer");

exports.generateRadarBar = async (params) => {
  try {
    const dataset = Object.values(params);

    const config = getRadarBarConfig(dataset);

    const buffer = await renderChartToBuffer(config);

    const croppedImg = await sharp(buffer)
      .extract({ width: 2050, height: 1100, left: 50, top: 350 })
      .toBuffer();

    const imagePath = path.join(__dirname, "../../public/img.jpg");

    fs.writeFileSync(imagePath, croppedImg);

    const base64Img = fs.readFileSync(imagePath, "base64");

    console.log("Imagem gerada com sucesso em: ", imagePath);

    return base64Img;
  } catch (error) {
    console.error("Erro ao gerar o gráfico: ", error);
    throw error;
  }
};
