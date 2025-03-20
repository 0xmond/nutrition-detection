import axios from "axios";
import { Router } from "express";
import fs from "fs";
import { detectionService } from "../services/detection.service.js";

const router = Router();

router.post("", detectionService);

export default router;
