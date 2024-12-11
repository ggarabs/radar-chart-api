const { generateRadarBar } = require("./../services/chartService");

exports.generateChart = async (req, res) => {
  const { results } = req.body;

  if (!results) {
    return res.status(400).json({ error: "Data are required." });
  }

  try {
    const chartImg = await generateRadarBar(results);
    res.json({ image: chartImg });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error generating chart", details: error.message });
  }
};
