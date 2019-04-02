"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Index'));
        this.router.get('/contact', (req, res) => res.send('Contact!'));
    }
}
const booksRoutes = new IndexRoutes();
exports.default = booksRoutes.router;
