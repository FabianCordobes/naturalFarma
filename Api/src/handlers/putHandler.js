const putHandler = ({id, brand, category, therapeuticAction, presentation, stocks, price, image }) => {
    const handlerPut = putHandlerById({id})

    handlerPut.brand = brand ? brand : handlerPut.brand
    handlerPut.category = category ? category : handlerPut.category
    handlerPut.therapeuticAction = therapeuticAction ? therapeuticAction : handlerPut.therapeuticAction
    handlerPut.presentation = presentation ? presentation : handlerPut.presentation
    handlerPut.stocks = stocks ? stocks : handlerPut.stocks
    handlerPut.price = price ? price : handlerPut.price
    handlerPut.image = image ? image : handlerPut.image

    return handlerPut
}

module.exports = {
    putHandler
}