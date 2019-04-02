"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => res.send('Index user'));
router.get('/:userId', (req, res) => res.send('UserId'));
exports.default = router;
