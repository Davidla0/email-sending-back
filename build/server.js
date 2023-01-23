"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger_js_1 = __importDefault(require("./logger.js"));
const app = express();
const http = require('http').createServer(app);
app.use(express.json());
// Routes //
// const emailRoutes = require('./api/email.router')
// app.use('/api/v1', emailRoutes)
const port = process.env.PORT || 3030;
http.listen(port, () => {
    try {
        logger_js_1.default.info('Server is running on port: ' + port);
    }
    catch (error) {
        logger_js_1.default.error('Server not running', error);
    }
});
