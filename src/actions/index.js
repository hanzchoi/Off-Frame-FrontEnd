
export const selectProduct = (product) => {
  console.log(product);
  return {
    type: 'SELECTED_PRODUCT',
    payload: product
  }
}
