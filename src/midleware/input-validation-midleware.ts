import { NextFunction,Request,Response} from 'express';
import {validationResult} from 'express-validator';
import {productsRepository} from '../repositories/products-repository';

export const inputValidationMiddleware = (req:Request,res:Response,next:NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({errors:errors.array()})
    }else{
        next();
    }
}
