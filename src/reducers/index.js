
const initState = {
  products: [],
  currentCart: [],
  currentCartPrice: 0,
  selectedProduct: {}
}


export const reducer = (state = initState, action) => {
  switch (action.type){
    case 'SELECTED_PRODUCT':
      return { ...state, selectedProduct: action.payload }
    case 'ADD_PRODUCT':
     return { ...state, currentCart: [...state.currentCart, action.payload] }
    case 'SET_CURRENT_PRICE':
      return { ...state, currentCartPrice: action.payload }
    case 'LOAD_PRODUCTS':
      return { ...state, products: action.payload }
    default:
      return state;
  }
}
