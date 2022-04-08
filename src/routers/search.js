import { Router } from "express";
import { key } from "../controllers/search"
const router = Router()

router.get('/search/:key', key);

export default router