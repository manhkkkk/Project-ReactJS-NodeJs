import { Router } from 'express';
import { create, getProduct, list, remove, update } from '../controllers/product';
import { userById } from '../controllers/user';

const router = Router();

router.get('/products', list);
router.post('/products', create);
router.get('/products/:id', getProduct);
router.delete('/products/:id', remove);
router.put('/products/:id', update);

router.param('userId', userById)

export default router;