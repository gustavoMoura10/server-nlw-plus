import express from 'express';
import Middlewares from './config/Middlewares';
import Connection from './config/Connection';
import Routes from './Routes';
const app = express();

//MAIN
(async () => {
    try {
        const middlewares = new Middlewares(app);
        const connection = new Connection();
        const routes = new Routes(app);
        
    } catch (error) {
        console.log(error);
    }
    app.listen(process.env.PORT,()=>console.log(`Running on PORT:${process.env.PORT}`));
})()