const products = [
  {name: 'Wide Leg Cropped Trouser v1',
    image: 'http://res.cloudinary.com/dbgp0ijfb/image/upload/v1539268407/off-frame-studio/P-001B-1.jpg',
    price: 99.99,
    color: 'Prussion Blue',
    category: 'Trouser',
    size: 'EU 42, WAIST MEASUREMENT: 80~100, FULL HIP MEASUREMENT : 120, RISER MEASUREMENT: 32, PANTS LENGTH: 81',
    description: 'Testing Testing'
  },
  {name: 'Wide Leg Cropped Trouser v2',
    image: 'http://res.cloudinary.com/dbgp0ijfb/image/upload/v1539268407/off-frame-studio/P-001A-1.jpg',
    price: 89.99,
    color: 'Grey Brown',
    category: 'Trouser',
    size: 'EU 42, WAIST MEASUREMENT: 80~100, FULL HIP MEASUREMENT : 120, RISER MEASUREMENT: 32, PANTS LENGTH: 81',
    description: 'Testing Testing'
  }
]

const initState = {
  products: products,
  currentCart: [],
  selectedProduct: {}
}


export const reducer = (state = initState, action) => {
  switch (action.type){
    default:
      return state;
  }
}
