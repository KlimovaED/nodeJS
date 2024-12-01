import {NextFunction, Request, Response, Router} from 'express';
import {productsRepository} from '../repositories/products-repository';
import {body, validationResult} from 'express-validator';
import {
    inputValidationMiddleware
} from '../midleware/input-validation-midleware';

export const productsRoute = Router({});

const titleValidation = body('title').trim().isLength({min:3,max:10}).withMessage('Title length should be from 3 to 10 symbols')




productsRoute.get('/:id', (req: Request, res: Response) => {
  const findProduct = productsRepository.getProductById(+req.params.id);
  if(findProduct) {
      res.send(findProduct);
  }else{
      res.send(404)
  }


})
productsRoute.delete('/:id', (req, res) => {
    let isDeleted = productsRepository.deleteProductById(+req.params.id);
    if(isDeleted) {
        res.send(204);
    }else{
        res.send(404)
    }
});
productsRoute.post('/',titleValidation,inputValidationMiddleware, (req: Request, res: Response):void => {
            const newProduct = productsRepository.createProduct(req.body.title);
            res.status(201).send(newProduct);

})
productsRoute.put('/:id',titleValidation,inputValidationMiddleware, (req: Request, res: Response) => {
const isUpdated =productsRepository.updateTitleProduct(+req.params.id, req.body.title);
    if(isUpdated) {
      const product =  productsRepository.getProductById(+req.params.id)
        res.send(product);
    }else{
        res.send(404)
    }
})
productsRoute.get('/', (req: Request, res: Response) => {
   const foundProducts= productsRepository.findProducts(req.query.title?.toString())



    res.send(foundProducts)
})
