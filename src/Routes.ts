import { Application } from "express";
import { pointsRouter } from "./Routes/PointsRoute";
import { itemsRouter } from "./Routes/ItemsRoute";

export default class Routes{
    constructor(app:Application){
        app.use('/points',pointsRouter);
        app.use('/items',itemsRouter);
    }
}