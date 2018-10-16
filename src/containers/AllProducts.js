import React, { Component } from 'react';
import ProductsList from '../components/ProductsList'

class AllProducts extends Component {
  render() {
    return(
      <div>
        <h1>This is the Part that will show the products</h1>
        <ProductsList/>
      </div>
    )
  }
}

export default AllProducts;
