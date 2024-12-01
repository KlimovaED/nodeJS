"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoute = void 0;
const express_1 = require("express");
const products_repository_1 = require("../repositories/products-repository");
const express_validator_1 = require("express-validator");
const input_validation_midleware_1 = require("../midleware/input-validation-midleware");
exports.productsRoute = (0, express_1.Router)({});
const titleValidation = (0, express_validator_1.body)('title').trim().isLength({ min: 3, max: 10 }).withMessage('Title length should be from 3 to 10 symbols');
exports.productsRoute.get('/:id', (req, res) => {
    const findProduct = products_repository_1.productsRepository.getProductById(+req.params.id);
    if (findProduct) {
        res.send(findProduct);
    }
    else {
        res.send(404);
    }
});
exports.productsRoute.delete('/:id', (req, res) => {
    let isDeleted = products_repository_1.productsRepository.deleteProductById(+req.params.id);
    if (isDeleted) {
        res.send(204);
    }
    else {
        res.send(404);
    }
});
exports.productsRoute.post('/', titleValidation, input_validation_midleware_1.inputValidationMiddleware, (req, res) => {
    const newProduct = products_repository_1.productsRepository.createProduct(req.body.title);
    res.status(201).send(newProduct);
});
exports.productsRoute.put('/:id', titleValidation, input_validation_midleware_1.inputValidationMiddleware, (req, res) => {
    const isUpdated = products_repository_1.productsRepository.updateTitleProduct(+req.params.id, req.body.title);
    if (isUpdated) {
        const product = products_repository_1.productsRepository.getProductById(+req.params.id);
        res.send(product);
    }
    else {
        res.send(404);
    }
});
exports.productsRoute.get('/', (req, res) => {
    var _a;
    const foundProducts = products_repository_1.productsRepository.findProducts((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.send(foundProducts);
});
