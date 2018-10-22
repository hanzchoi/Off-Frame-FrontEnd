
export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}

export const setCurrentPrice = (price) => {
  return {
    type: 'SET_CURRENT_PRICE',
    payload: price
  }
}
