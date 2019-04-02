import { Router } from "express";

const router: Router = Router();

router.get('/', (req, res) => res.send('Index user'));
router.get('/:userId', (req, res) => res.send('UserId'));

export default router;