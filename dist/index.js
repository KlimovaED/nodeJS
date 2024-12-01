"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const products_route_1 = require("./routes/products-route");
const adresses_route_1 = require("./routes/adresses-route");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, body_parser_1.default)({}));
app.use('/adresses', adresses_route_1.adressesRoute);
app.use('/products', products_route_1.productsRoute);
const blaBlaMidleware = (request, res, next) => {
    //@ts-ignore
    request.blabla = "hello";
    next();
};
const authGuardMidleware = (request, res, next) => {
    if (request.query.token === "123") {
        next();
    }
    else {
        res.send(401);
    }
};
let reqCount = 0;
const requestCounterMidleware = (request, res, next) => {
    reqCount++;
    next();
};
app.use(requestCounterMidleware);
app.use(blaBlaMidleware); //подключение ко всему  приложению
app.use(authGuardMidleware);
/*app.get('/products', blaBlaMidleware, (request: Request, response: Response) => {
    //@ts-ignore
    const blabla =request.blabla
    response.send({value:blabla + "!!!!"})
})*/
app.get('/users', (request, response) => {
    //@ts-ignore
    const blabla = request.blabla;
    response.send({ value: blabla + " users !!!!" + reqCount });
});
//start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
