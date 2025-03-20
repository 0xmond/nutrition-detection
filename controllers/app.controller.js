import modelRouter from "./detection.controller.js";
import { uploadFile } from "../utils/upload/multer.js";

export const bootstrap = (app, express) => {
  app.use(express.json());

  app.use("/model", uploadFile().single("image"), modelRouter);
};
