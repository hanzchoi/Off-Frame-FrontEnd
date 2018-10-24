import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import './ProductsList.css';

class ProductsList extends Component {

  renderProducts = () => {
    return this.props.products.map((product) => <Product key={product.id} product={product}/>)
  }

  render() {
    return(
      <div className="product-list">
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
