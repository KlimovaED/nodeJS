import express, {NextFunction, Request, Response} from 'express'
import bodyParser from 'body-parser'
import {productsRoute} from './routes/products-route';
import {adressesRoute} from './routes/adresses-route';

const app = express()
const port = 3000


app.use(bodyParser({}))

app.use('/adresses',adressesRoute)
app.use('/products',productsRoute)


const blaBlaMidleware = (request: Request, res: Response, next: NextFunction) => {
    //@ts-ignore
    request.blabla = "hello";
    next();
};
const authGuardMidleware = (request: Request, res: Response, next: NextFunction) => {
   if(request.query.token ==="123"){
       next();
   }
   else{
       res.send(401)
   }
};

let reqCount=0;

const requestCounterMidleware = (request: Request, res: Response, next: NextFunction) => {
   reqCount++;
   next()
};


app.use(requestCounterMidleware)
app.use(blaBlaMidleware) //подключение ко всему  приложению
app.use(authGuardMidleware)



/*app.get('/products', blaBlaMidleware, (request: Request, response: Response) => {
    //@ts-ignore
    const blabla =request.blabla
    response.send({value:blabla + "!!!!"})
})*/
app.get('/users', (request: Request, response: Response) => {
    //@ts-ignore
    const blabla =request.blabla
    response.send({value:blabla + " users !!!!" + reqCount})
})

//start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
