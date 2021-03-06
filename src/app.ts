import express from "express";
import morgan from 'morgan';
import helmet from 'helmet';
import './database'; //Import Database.

process.env.NODE_ENV && require('dotenv').config();

class App {
    public app: express.Application;

    constructor() {

        this.app = express();
        this.config();
        
    }

    config(){
        this.app.set('port', process.env.PORT || 3000);

        //Middlewares
        this.app.use(morgan('dev'));
        this.app.use(helmet());
    }

}

export default new App().app;
