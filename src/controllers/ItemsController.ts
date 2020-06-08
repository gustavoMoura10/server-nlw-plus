import { Request, Response } from "express";
import Items from "../models/Items";
import Points from "../models/Points";
import { validationResult } from "express-validator";

export default class ItemsController {

    public async findAll(request:Request,response:Response){
        let status = 400;
        try {
            status = 500;
            const items = await Items.findAll();
            status = 200;
            response.status(status).json(items);
        } catch (error) {
            console.log(error);
            status === 400?
            response.status(status).json(error):
            response.status(status).json({
                message:'Error on Server'
            });
        }
    }
}