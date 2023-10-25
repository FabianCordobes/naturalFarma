const updateProduct = ({id, history, login, product, user }) => {
    const productUpdate = getProductById({id})

    productUpdate.history = history ? history : productUpdate.history
    productUpdate.login = login ? login : productUpdate.login
    productUpdate.product = product ? product : productUpdate.product
    productUpdate.user = user ? user : productUpdate.user

    return productUpdate
}

module.exports = {
    updateProduct
}