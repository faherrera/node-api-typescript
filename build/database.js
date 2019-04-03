"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./lib/config"));
mongoose_1.default.connect(config_1.default.MONGO_URI, {
    useNewUrlParser: true,
})
    .then(db => console.log('DB is conected'))
    .catch(err => console.log('Ocurrió un error', err));
