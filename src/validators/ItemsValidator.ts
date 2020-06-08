import {check,param} from 'express-validator';
const find = [
    param('id').exists().isNumeric()
]
export {
    find
}