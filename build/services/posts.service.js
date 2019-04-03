"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts_model_1 = __importDefault(require("../models/posts.model"));
class PostService {
    constructor() {
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('Ejecutando el get All');
                const posts = yield posts_model_1.default.find({});
                return posts;
            }
            catch (error) {
                return new Error("Ocurrió un error al intentar traer todos los registros.");
            }
        });
    }
    get() {
    }
    store() {
    }
    update() {
    }
    remove() {
    }
}
exports.default = new PostService();
