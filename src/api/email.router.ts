import express from "express";
import { sendEmailSchema } from "../schema/validate.schema";

const { requireValid } = require('../middlewares/validate.middleware')
const { sendEmail } = require('./email.controller')
const router = express.Router()

router.post('/send', sendEmailSchema, requireValid, sendEmail)


module.exports = router