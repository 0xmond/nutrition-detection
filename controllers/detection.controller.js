import { Router } from "express";
import { detectionService } from "../services/detection.service.js";

const router = Router();

router.post("", detectionService);

export default router;
