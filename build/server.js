"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const index_routes_1 = __importDefault(require("./routes/api/index.routes"));
const posts_routes_1 = __importDefault(require("./routes/api/posts.routes"));
const user_routes_1 = __importDefault(require("./routes/api/user.routes"));
class Server {
    routes() {
        //Api
        app_1.default.use('/api', index_routes_1.default);
        app_1.default.use('/api/posts', posts_routes_1.default);
        app_1.default.use('/api/users', user_routes_1.default);
        //Web
    }
    start() {
        app_1.default.listen(app_1.default.get('port'), () => console.log(`Estoy usando el puerto ${app_1.default.get('port')}`));
        this.routes();
    }
}
const _server = new Server();
_server.start();
