import {check,body,query, param} from 'express-validator';
const create = [
    body('image').exists(),
    body('email').exists().isEmail(),
    body('whatsapp').exists().isMobilePhone('any'),
    body('latitude').exists().isDecimal(),
    body('longitude').exists().isDecimal(),
    body('city')
    .exists()
    .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ \s]+$/)
    .withMessage('Name must be alphabetic.'),
    body('uf')
    .exists()
    .isLength({min:2,max:2})
    .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ \s]+$/)
    .withMessage('Name must be alphabetic.'),
]
const findQuery = [
    query('city').exists()
    .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ \s]+$/)
    .withMessage('Name must be alphabetic.'),
    query('uf').exists()
    .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ \s]+$/)
    .isLength({min:2,max:2})
    .withMessage('Name must be alphabetic.'),
    query('items').exists().isString()
]
const find = [
    param('id').exists().isNumeric()
]
export {
    create,
    findQuery,
    find
}