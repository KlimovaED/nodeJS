const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]

export const productsRepository = {
    findProducts(title:string | null |undefined){
        if (title) {
            let filteredProducts =products.filter(p => p.title.indexOf(title) > -1)
            return filteredProducts;
        } else {
           return products
        }
    },
    createProduct(title:string){
        const newProduct = {
            id: +(new Date().getTime()),
            title:title,
        }
        products.push(newProduct)
        return newProduct
    },
    getProductById(id:number){
        let product = products.find(product => product.id === id)
        return product
    },
    deleteProductById(id:number){
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                products.splice(i, 1);
                return true;
            }
        }
        return false;
    },
    updateTitleProduct(id:number,title:string){
          let product = products.find(p => p.id === +id)
   if (product) {
       product.title = title
       return true
   } else {
       return false
   }
    }
}
