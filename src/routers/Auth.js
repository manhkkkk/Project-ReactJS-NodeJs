import { Router } from "express";
import { register, login } from "../controllers/Auth";
import { list, remove } from "../controllers/user";
const router = Router();

router.post('/signup', register);
router.post('/signin', login);
router.get('/signin', list);
router.delete('/signin', remove);

export default router;