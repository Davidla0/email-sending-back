const express = require("express");
const mongoose = require("mongoose")
require('dotenv').config()
import logger from './config/logger.config'
import { apiKeyMiddleware } from './middlewares/apikey.middleware';

const app = express();
const http = require('http').createServer(app)
app.use(express.json())

// Routes //
const emailRoutes = require('./api/email.router')
app.use('/api/v1/email', apiKeyMiddleware, emailRoutes)


const port = process.env.PORT || 3030

http.listen(port, () => {
  try {
    logger.info('Server is running on port: ' + port)
    mongoose.connect(process.env.MONGO_URL)
    mongoose.set('strictQuery', false)
  } catch (error) {
    logger.error('Server not running', error)

  }
})
