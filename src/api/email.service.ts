import logger from '../config/logger.config'
import sendEmail from '../config/nodeMailer'
const Email = require('../schema/mongoose.schema')

export interface Email{
    to: string,
    subject: string,
    text: any
}

async function send({to, subject, text}:Email) {
    try {
        await sendEmail({to, subject, text})
        const email = new Email({to, subject, text})
        await email.save()
        return to
    } catch (error: any) {
        logger.error(error)
        throw Error(error)
    }
}

module.exports = {
    send,
}