"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts_service_1 = __importDefault(require("../services/posts.service"));
class PostApiController {
    constructor() {
    }
    getAll(req, res) {
        try {
            const posts = posts_service_1.default.getAll();
            res.status(200).json({
                data: posts,
                message: "Traidos los posts"
            });
        }
        catch (error) {
            res.status(500)
                .json({
                error: true,
                message: "Ocurrió un problema " + error
            });
        }
    }
    get(req, res) {
        const id = req.body.id;
        res.send('Este es el get Id');
    }
    post(req, res) {
        throw new Error("Method not implemented.");
    }
    put(req, res) {
        throw new Error("Method not implemented.");
    }
    delete(req, res) {
        throw new Error("Method not implemented.");
    }
}
exports.default = PostApiController;
