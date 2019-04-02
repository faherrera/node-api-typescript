"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
class App {
    constructor() {
        this.app = express_1.default();
        this.config();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        //Middlewares
        this.app.use(morgan_1.default('dev'));
        this.app.use(helmet_1.default());
    }
}
exports.default = new App().app;
