"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adressesRoute = void 0;
const express_1 = require("express");
exports.adressesRoute = (0, express_1.Router)({});
const adresses = [{ id: 1, value: 'Lenina 1' }, {
        id: 2,
        value: 'Lenina 2'
    }, { id: 3, value: 'Lenina 3' }];
exports.adressesRoute.get('/', (req, res) => {
    res.send(adresses);
});
exports.adressesRoute.get('/:id', (req, res) => {
    let street = adresses.find(st => st.id === +req.params.id);
    if (street) {
        res.send(street);
    }
    else {
        res.send(404);
    }
});
