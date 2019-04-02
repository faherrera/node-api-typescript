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
        this.router.get('/add', (req, res) => res.send('Index'));
        this.router.post('/add', (req, res) => res.send('Index'));
    }
}
const booksRoutes = new IndexRoutes();
exports.default = booksRoutes.router;
