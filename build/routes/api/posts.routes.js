"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_api_controller_1 = __importDefault(require("./../../controllers/posts.api.controller"));
const router = express_1.Router();
const _postController = new posts_api_controller_1.default();
router.get('/', _postController.getAll);
router.get('/:id', _postController.get);
exports.default = router;
