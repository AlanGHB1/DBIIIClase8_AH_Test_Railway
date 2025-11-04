import { Router } from "express";
import { index_ah, ping_ah } from "../controllers/index.rotes.js";

const router_ah = Router();

router_ah.get("/", index_ah);

router_ah.get("/ping", ping_ah);

export default router_ah;
