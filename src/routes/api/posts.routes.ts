import { Router } from "express";

const router : Router = Router();

router.get('/', (req,res) => res.send('Index Post ---'));
router.get('/:id', (req,res) => res.send('Get el post'));

export default router;

