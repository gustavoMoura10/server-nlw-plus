import express, { Application } from "express";
import * as path from 'path';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

const devEnv = path.join(__dirname, '..', '..', '.dev.env');
const prodEnv = path.join(__dirname, '..', '..', '.prod.env');

export default class Middlewares {
    constructor(app: Application) {
        dotenv.config({
            path: process.env.NODE_ENV === 'dev' ? devEnv : prodEnv
        })
        app.use(morgan('dev'));
        app.use(express.json());
        app.use(cors());
    }


}