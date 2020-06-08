import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Points from '../models/Points';
import Items from '../models/Items';
import { Op } from 'sequelize';
export default class PointsController {
    

    public async create(request: Request, response: Response) {
        let status = 400;
        try {
            
            validationResult(request).throw();
            status = 500;
            const {items,...data} = request.body;
            
            const point = await Points.create(data);
            if(items.length > 0){
                for(let item of items){
                    point.setItems(item)
                }
            }
            status = 200;
            response.status(status).json(point)
        } catch (error) {
            console.log(error);
            status === 400?
            response.status(status).json(error):
            response.status(status).json({
                message:'Error on Server'
            })
        }
    }
    public async findQuery(request: Request, response: Response) {
        let status = 400;
        try {
            validationResult(request).throw();
            const {city,uf,items} = request.query;
            
            status = 500;
            let itemsId = String(items).split(',').map(el => el.trim());
            const points = await Points.findAll({
                where:{
                    city,
                    uf
                },
                include:[
                    {
                        model:Items,
                        as:'items',
                        where:{
                            id:{
                                [Op.in]:itemsId
                            }
                        }
                    }
                ]
            });
            status = 200;
            response.status(status).json(points)
        } catch (error) {
            console.log(error);
            status === 400?
            response.status(status).json(error):
            response.status(status).json({
                message:'Error on Server'
            })
        }
    }
    public async find(request: Request, response: Response) {
        let status = 400;
        try {
            validationResult(request).throw();
            const {id} = request.params;
            status = 500;
            const point  = await Points.findByPk(id,{
                include:[{
                    model:Items,
                    as:'items'
                }]
            });
            status = 200;
            response.status(status).json(point);
        } catch (error) {
            console.log(error);
            status === 400?
            response.status(status).json(error):
            response.status(status).json({
                message:'Error on Server'
            })
        }
    }
}