import { Router } from 'express';
import { create, read, list, update, remove } from '../controllers/category';

const router = Router();
router.post('/category', create);
router.get("/category/:id", read);
router.get("/category", list);
router.put("/category/:id", update);
router.delete("/category/:id", remove);

export default router;