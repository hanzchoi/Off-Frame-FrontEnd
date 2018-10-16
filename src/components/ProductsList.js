import React, { Component } from 'react';
import Product from './Product';

class ProductsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      products:
      [
        {name: 'Wide Leg Cropped Trouser v1',
          image: 'http://res.cloudinary.com/dbgp0ijfb/image/upload/v1539268407/off-frame-studio/P-001B-1.jpg',
          price: 99.99
        },
        {name: 'Wide Leg Cropped Trouser v2',
          image: 'http://res.cloudinary.com/dbgp0ijfb/image/upload/v1539268407/off-frame-studio/P-001A-1.jpg',
          price: 89.99
        }
      ]
    }
  }

  renderProducts = () => {
    return this.state.products.map((product, i) => <Product key={i} product={product}/>)
  }

  render() {
    return(
      <div>
        {this.renderProducts()}
      </div>
    )
  }
}

export default ProductsList;
