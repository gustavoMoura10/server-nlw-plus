import { Application } from "express";
import { pointsRouter } from "./routes/PointsRoute";
import { itemsRouter } from "./routes/ItemsRoute";

export default class Routes{
    constructor(app:Application){
        app.use('/points',pointsRouter);
        app.use('/items',itemsRouter);
    }
}