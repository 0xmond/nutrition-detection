import modelRouter from "./serviceRoute.js";
import { uploadFile } from "../utils/upload/multer.js";

export const bootstrap = (app, express) => {
  app.use(express.json());

  app.use("/model", uploadFile().single("image"), modelRouter);
};
