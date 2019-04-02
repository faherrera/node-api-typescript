"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_routes_1 = __importDefault(require("./posts.routes"));
class AppRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.all('/', (req, res) => res.send('Index Get'));
        this.router.all('/posts', posts_routes_1.default);
    }
}
const appRoutes = new AppRoutes();
exports.default = appRoutes.router;
