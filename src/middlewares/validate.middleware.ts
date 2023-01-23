import {validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger.config';

export function requireValid(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logger.error(errors.array())
        return res.status(400).json({ errors: errors.array() });
    }

    next()
}




