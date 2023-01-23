import { Request, Response } from 'express';
const { send } = require('./email.service')

import logger from '../config/logger.config'


async function sendEmail(req: Request, res: Response) {
    try {
        const mail = await send(req.body)
        res.send(`mail to ${mail} send successfully`)
    } catch (error: any) {
        logger.error(error)
        throw Error(error)
    }
}

module.exports = {
    sendEmail
}