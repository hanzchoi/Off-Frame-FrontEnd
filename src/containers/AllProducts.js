import React, { Component } from 'react';
import ProductsList from '../components/ProductsList'

class AllProducts extends Component {
  render() {
    return(
      <div>
        <h1>Every Current Product</h1>
        <ProductsList/>
      </div>
    )
  }
}

export default AllProducts;
