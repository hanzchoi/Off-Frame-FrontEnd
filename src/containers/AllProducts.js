import React, { Component } from 'react';
import ProductsList from '../components/ProductsList'


class AllProducts extends Component {
  render() {
    return(
      <div className="all-products-container">

        <ProductsList/>
      </div>
    )
  }
}

export default AllProducts;
// <h1>Every Current Product</h1>
