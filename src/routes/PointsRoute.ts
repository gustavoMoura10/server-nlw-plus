import PointsController from '../controllers/PointsController';
import { create, findQuery, find } from '../validators/PointsValidator';
import { Router } from 'express';

const pointsRouter = Router();
const pointsController = new PointsController();

pointsRouter.post('/create', create, pointsController.create);
pointsRouter.get('/findQuery', findQuery, pointsController.findQuery);
pointsRouter.get('/find/:id', find, pointsController.find);

export {
    pointsRouter
}