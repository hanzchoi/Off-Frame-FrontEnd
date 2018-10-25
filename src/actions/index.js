import { fetchProducts } from '../adapters/productsAdapter'
//import UserAdapter from '../adapters/UserAdapter';

// export const loadCartPorducts = (userInfo) => {
//   return (dispatch) => {
//     UserAdapter.login(userInfo)
//     .then(data => {
//       dispatch(setUserCart(data))
//     })
//   }
// }

// export const setUserInformation

// export const setUserCart = (cartItems) => {
//   return {
//     type: 'LOAD_USER_CART',
//     payload: cartItems
//   }
// }

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

export const loadProducts = () => {
  return (dispatch) => {
    fetchProducts()
    .then(products => {
      dispatch(setProducts(products))
    })
  }
}

export const setProducts = (products) => {
  return {
    type: 'LOAD_PRODUCTS',
    payload: products
  }
}

// export function fetchCats() {
//   return (dispatch) => {
//     dispatch({ type: 'START_ADDING_CATS_REQUEST' });
//     return fetch('http://www.catapi.com')
//       .then(response => response.json())
//       .then(cats => dispatch({ type: 'ADD_CATS', cats }));
//   };
// }
