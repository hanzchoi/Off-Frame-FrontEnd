
const initState = {
  products: [],
  currentCart: [],
  currentUser: {},
  currentCartPrice: 0,
  selectedProduct: {}
}


export const reducer = (state = initState, action) => {
  switch (action.type){
    case 'LOAD_USER_CART':
      return { ...state, currentCart: action.payload }
    case 'SELECTED_PRODUCT':
      return { ...state, selectedProduct: action.payload }
    case 'DELETE_PRODUCT':
      console.log("reducer hit");
      return {...state}
    case 'ADD_PRODUCT':
      //console.log("Add product");
     return { ...state, currentCart: [...state.currentCart, action.payload] }
    case 'SET_CURRENT_PRICE':
      return { ...state, currentCartPrice: action.payload }
    case 'LOAD_PRODUCTS':
      return { ...state, products: action.payload }
    default:
      return state;
  }
}
