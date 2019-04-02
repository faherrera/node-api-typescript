"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => res.send('Index Post ---'));
router.get('/:id', (req, res) => res.send('Get el post'));
exports.default = router;
