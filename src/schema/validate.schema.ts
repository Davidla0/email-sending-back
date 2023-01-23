import {body} from 'express-validator'

const schema = [
    body('to')
    .isEmail()
    .withMessage('email must contain a destination address'),
    body('subject')
    .exists({checkFalsy: true})
    .withMessage('email must contain a subject'),
    body('text')
    .exists({checkFalsy: true})
    .withMessage('email must contain a text'),

]

export {schema as sendEmailSchema}