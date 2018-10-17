import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';


class ProductsList extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     products:
  //     [
  //       {name: 'Wide Leg Cropped Trouser v1',
  //         image: 'http://res.cloudinary.com/dbgp0ijfb/image/upload/v1539268407/off-frame-studio/P-001B-1.jpg',
  //         price: 99.99
  //       },
  //       {name: 'Wide Leg Cropped Trouser v2',
  //         image: 'http://res.cloudinary.com/dbgp0ijfb/image/upload/v1539268407/off-frame-studio/P-001A-1.jpg',
  //         price: 89.99
  //       }
  //     ]
  //   }
  // }

  renderProducts = () => {
    return this.props.products.map((product, i) => <Product key={i} product={product}/>)
  }

  render() {
    return(
      <div>
        {this.renderProducts()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductsList);


  //{this.renderProducts()}
