import axios from "axios";
import fs from "fs";

export const detectionService = async (req, res, next) => {
  try {
    const image = fs.readFileSync(req.file.path, {
      encoding: "base64",
    });

    const result = await axios({
      method: "POST",
      url: process.env.URL,
      params: {
        api_key: process.env.API_KEY,
      },
      data: image,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return res
      .status(200)
      .json({ success: true, data: result.data.predictions });
    //   console.log(result.data.predictions);
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};
