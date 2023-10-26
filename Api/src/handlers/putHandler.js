const {putRouter} = require('../routes/PutRouter')


const putHandler = ({ id, brand, category, therapeuticAction, presentation, stocks, price, image }) => {
   
    const handlerPut = getProductById(id);

    if (!handlerPut) {
        return null; 
    }

    
    if (brand) handlerPut.brand = brand;
    if (category) handlerPut.category = category;
    if (therapeuticAction) handlerPut.therapeuticAction = therapeuticAction;
    if (presentation) handlerPut.presentation = presentation;
    if (stocks) handlerPut.stocks = stocks;
    if (price) handlerPut.price = price;
    if (image) handlerPut.image = image;

    return handlerPut;
}

module.exports = {
    putHandler
}



// const putHandler = ({id, brand, category, therapeuticAction, presentation, stocks, price, image }) => {
//     const handlerPut = handlerPutById({id})

//     handlerPut.brand = brand ? brand : handlerPut.brand
//     handlerPut.category = category ? category : handlerPut.category
//     handlerPut.therapeuticAction = therapeuticAction ? therapeuticAction : handlerPut.therapeuticAction
//     handlerPut.presentation = presentation ? presentation : handlerPut.presentation
//     handlerPut.stocks = stocks ? stocks : handlerPut.stocks
//     handlerPut.price = price ? price : handlerPut.price
//     handlerPut.image = image ? image : handlerPut.image

//     return handlerPut
// }

// module.exports = {
//     putHandler
// }