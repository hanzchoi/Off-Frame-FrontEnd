
// export const selectProduct = (id) => {
//   return {
//     type: 'SELECTED_PRODUCT',
//     payload: id
//   }
// }

export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}
