import axios from "axios";
import { Router } from "express";
import fs from "fs";

const router = Router();

router.post("", async (req, res, next) => {
  const image = fs.readFileSync(req.file.path, {
    encoding: "base64",
  });

  const result = await axios({
    method: "POST",
    url: "https://detect.roboflow.com/alll-2zqpi/6",
    params: {
      api_key: "ukm79OvtzslzAigknqCQ",
    },
    data: image,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return res.status(200).json({ success: true, data: result.data.predictions });
  //   console.log(result.data.predictions);
});

export default router;
