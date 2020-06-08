import ItemsController from '../controllers/ItemsController';
import { Router } from 'express';
import { find } from '../validators/ItemsValidator';

const itemsRouter = Router();
const itemsController = new ItemsController();

itemsRouter.get('/findAll', itemsController.findAll);

export {
    itemsRouter
}