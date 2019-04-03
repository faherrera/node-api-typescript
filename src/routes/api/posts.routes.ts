import { Router } from "express";
import PostController from "./../../controllers/posts.api.controller";

const router : Router = Router();
const _postController = new PostController();

router.get('/', _postController.getAll);
router.get('/:id', _postController.get);

export default router;

