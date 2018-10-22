// const products = []

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


// { id: 1,
//   name: 'Wide Leg Cropped Trouser v1',
//   image: 'http://res.cloudinary.com/dbgp0ijfb/image/upload/v1539268407/off-frame-studio/P-001B-1.jpg',
//   price: 99.99,
//   color: 'Prussion Blue',
//   category: 'Trouser',
//   size: 'EU 42, WAIST MEASUREMENT: 80~100, FULL HIP MEASUREMENT : 120, RISER MEASUREMENT: 32, PANTS LENGTH: 81',
//   description: 'Testing Testing'
// },
// { id:2,
//   name: 'Wide Leg Cropped Trouser v2',
//   image: 'http://res.cloudinary.com/dbgp0ijfb/image/upload/v1539268407/off-frame-studio/P-001A-1.jpg',
//   price: 89.99,
//   color: 'Grey Brown',
//   category: 'Trouser',
//   size: 'EU 42, WAIST MEASUREMENT: 80~100, FULL HIP MEASUREMENT : 120, RISER MEASUREMENT: 32, PANTS LENGTH: 81',
//   description: 'Testing Testing'
// }
