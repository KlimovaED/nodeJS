"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRepository = void 0;
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'orange' }];
exports.productsRepository = {
    findProducts(title) {
        if (title) {
            let filteredProducts = products.filter(p => p.title.indexOf(title) > -1);
            return filteredProducts;
        }
        else {
            return products;
        }
    },
    createProduct(title) {
        const newProduct = {
            id: +(new Date().getTime()),
            title: title,
        };
        products.push(newProduct);
        return newProduct;
    },
    getProductById(id) {
        let product = products.find(product => product.id === id);
        return product;
    },
    deleteProductById(id) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                products.splice(i, 1);
                return true;
            }
        }
        return false;
    },
    updateTitleProduct(id, title) {
        let product = products.find(p => p.id === +id);
        if (product) {
            product.title = title;
            return true;
        }
        else {
            return false;
        }
    }
};
